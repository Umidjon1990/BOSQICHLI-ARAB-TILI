const state = {
  levelId: 1,
  stepIndex: 0,
  score: 0,
  hearts: 3,
  combo: 1,
  selected: null,
  selectedTokens: [],
  bossAnswers: [],
  matches: [],
  matchedKeys: new Set(),
  checked: false,
  sound: localStorage.getItem("arabicGameSound") !== "off",
  completedStars: Number(localStorage.getItem("arabicGameStars") || 0)
};

const activityCard = document.getElementById("activityCard");
const levelGrid = document.getElementById("levelGrid");
const checkButton = document.getElementById("checkAnswer");
const nextButton = document.getElementById("nextStep");
const restartButton = document.getElementById("restartLevel");
const backToMap = document.getElementById("backToMap");
const soundToggle = document.getElementById("soundToggle");
const levelPanel = document.querySelector(".level-panel");

let audioContext;

function currentLevel() {
  return COURSE.levels.find((level) => level.id === state.levelId);
}

function currentStep() {
  return currentLevel().steps[state.stepIndex];
}

function renderLevelGrid() {
  levelGrid.innerHTML = "";

  for (let index = 1; index <= COURSE.totalLevels; index += 1) {
    const level = COURSE.levels.find((item) => item.id === index);
    const button = document.createElement("button");
    button.className = "level-button";
    if (index === state.levelId) button.classList.add("active");
    if (!level) button.classList.add("locked");
    button.innerHTML = `<strong>${index}</strong><span>${level ? level.shortTitle : "tez kunda"}</span>`;

    if (level) {
      button.addEventListener("click", () => {
        playSound("tap");
        state.levelId = level.id;
        startLevel();
        levelPanel.classList.remove("open");
      });
    }

    levelGrid.appendChild(button);
  }
}

function renderStats() {
  const level = currentLevel();
  document.getElementById("lessonBadge").textContent = `${level.id}-level`;
  document.getElementById("lessonTitle").textContent = level.title;
  document.getElementById("heartStat").textContent = "\u2665".repeat(state.hearts) || "0";
  document.getElementById("comboStat").textContent = `x${state.combo}`;
  document.getElementById("scoreStat").textContent = `${state.score} ball`;
  document.getElementById("totalStars").textContent = `${state.completedStars} yulduz`;
  document.getElementById("courseProgress").textContent = `${level.id}/${COURSE.totalLevels}`;
  document.getElementById("stepProgress").style.width = `${(state.stepIndex / level.steps.length) * 100}%`;
  soundToggle.textContent = state.sound ? "\u266A" : "\u266B";
  soundToggle.classList.toggle("muted", !state.sound);
}

function renderActivity() {
  state.selected = null;
  state.selectedTokens = [];
  state.bossAnswers = [];
  state.matches = [];
  state.checked = false;
  activityCard.classList.remove("success-burst", "danger-shake");
  checkButton.classList.remove("hidden");
  nextButton.classList.add("hidden");

  const step = currentStep();

  if (step.type === "intro") renderIntro(step);
  if (step.type === "learn") renderLearn(step);
  if (step.type === "quiz") renderQuiz(step);
  if (step.type === "choice") renderChoice(step);
  if (step.type === "match") renderMatch(step);
  if (step.type === "sort") renderSort(step);
  if (step.type === "build") renderBuild(step);
  if (step.type === "truefalse") renderTrueFalse(step);
  if (step.type === "dialog") renderDialog(step);
  if (step.type === "boss") renderBoss(step);

  renderStats();
}

function head(step) {
  return `
    <div class="activity-head">
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </div>
  `;
}

function renderIntro(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="hero-word arabic">${step.focus}</div>
    <div class="mission-strip">
      <span>Lug'at</span><span>Jins</span><span>Olmosh</span><span>Tarjima</span><span>Boss</span>
    </div>
  `;
  checkButton.textContent = "Boshlash";
}

function renderLearn(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="vocab-grid">
      ${step.words.map((word, index) => `
        <article class="vocab-card flip-card" style="--delay:${index * 60}ms">
          <span class="arabic">${word.ar}</span>
          <strong>${word.uz}</strong>
          <small>${word.gender === "m" ? "erkak jins" : "ayol jins"}</small>
        </article>
      `).join("")}
    </div>
  `;
  checkButton.textContent = "Yodladim";
}

function renderQuiz(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="sentence-card prompt-card">
      <div class="arabic">${step.prompt}</div>
    </div>
    ${optionGrid(step.options)}
  `;
  wireOptions();
  checkButton.textContent = "Tekshirish";
}

function renderChoice(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="sentence-card prompt-card">
      <div class="sentence-line arabic">
        <span class="blank">${state.selected || ""}</span>
        <span>${step.sentence.replace("________", "")}</span>
      </div>
    </div>
    ${optionGrid(step.options, true)}
  `;
  wireOptions(() => renderChoice(step));
  checkButton.textContent = "Tekshirish";
}

function renderBuild(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="sentence-card">
      <span class="eyebrow">O'zbekcha</span>
      <strong>${step.uz}</strong>
    </div>
    ${optionGrid(step.options, true)}
  `;
  wireOptions();
  checkButton.textContent = "Tekshirish";
}

function renderTrueFalse(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="duo-card">
      <div class="arabic">${step.arabic}</div>
      <strong>${step.uz}</strong>
    </div>
    ${optionGrid(["To'g'ri", "Noto'g'ri"])}
  `;
  wireOptions();
  checkButton.textContent = "Tekshirish";
}

function renderDialog(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="dialogue-card">
      <div class="avatar">؟</div>
      <div class="arabic">${step.prompt}</div>
    </div>
    ${optionGrid(step.options, true)}
  `;
  wireOptions();
  checkButton.textContent = "Tekshirish";
}

function renderSort(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="sentence-card">
      <span class="eyebrow">Maqsad</span>
      <strong>${step.uz}</strong>
      <div class="token-answer arabic" id="tokenAnswer">${state.selectedTokens.join(" ")}</div>
    </div>
    <div class="token-grid">
      ${step.tokens.map((token) => `<button class="token-card arabic" data-value="${escapeHtml(token)}">${token}</button>`).join("")}
    </div>
  `;
  document.querySelectorAll(".token-card").forEach((button) => {
    button.addEventListener("click", () => {
      playSound("tap");
      button.disabled = true;
      button.classList.add("selected");
      state.selectedTokens.push(button.dataset.value);
      document.getElementById("tokenAnswer").textContent = state.selectedTokens.join(" ");
    });
  });
  checkButton.textContent = "Tekshirish";
}

function renderBoss(step) {
  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="boss-grid">
      ${step.questions.map((question, index) => `
        <article class="boss-row" data-index="${index}">
          <div class="sentence-line arabic">
            <span class="blank">${state.bossAnswers[index] || ""}</span>
            <span>${question.sentence.replace("________", "")}</span>
          </div>
          <div class="mini-options">
            ${step.options.map((option) => `<button class="mini-option arabic" data-index="${index}" data-value="${escapeHtml(option)}">${option}</button>`).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".mini-option").forEach((button) => {
    button.addEventListener("click", () => {
      playSound("tap");
      const index = Number(button.dataset.index);
      state.bossAnswers[index] = button.dataset.value;
      renderBoss(step);
    });
  });
  checkButton.textContent = "Finalni tekshirish";
}

function optionGrid(options, arabic = false) {
  return `
    <div class="option-grid">
      ${options.map((option) => `
        <button class="option-card ${arabic ? "arabic" : ""}" data-value="${escapeHtml(option)}">${option}</button>
      `).join("")}
    </div>
  `;
}

function wireOptions(afterSelect) {
  document.querySelectorAll(".option-card").forEach((button) => {
    button.addEventListener("click", () => {
      playSound("tap");
      state.selected = button.dataset.value;
      document.querySelectorAll(".option-card").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      if (afterSelect) afterSelect();
    });
  });
}

function renderMatch(step) {
  state.matchedKeys = new Set();
  const left = [...step.pairs];
  const right = [...step.pairs].sort((a, b) => a.uz.localeCompare(b.uz));

  activityCard.innerHTML = `
    ${scene3d()}
    ${head(step)}
    <div class="match-grid">
      <div class="match-column">
        ${left.map((pair) => `<button class="match-card arabic" data-side="ar" data-key="${escapeHtml(pair.ar)}">${pair.ar}</button>`).join("")}
      </div>
      <div class="match-column">
        ${right.map((pair) => `<button class="match-card" data-side="uz" data-key="${escapeHtml(pair.ar)}">${pair.uz}</button>`).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => selectMatch(button));
  });
  checkButton.textContent = "Tekshirish";
}

function selectMatch(button) {
  if (button.disabled) return;
  playSound("tap");
  const side = button.dataset.side;
  const key = button.dataset.key;
  state.matches = state.matches.filter((item) => item.side !== side);
  state.matches.push({ side, key, button });
  document.querySelectorAll(`.match-card[data-side="${side}"]`).forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");

  if (state.matches.length === 2) {
    const [first, second] = state.matches;
    if (first.key === second.key && first.side !== second.side) {
      playSound("match");
      first.button.classList.add("correct");
      second.button.classList.add("correct");
      first.button.disabled = true;
      second.button.disabled = true;
      state.matchedKeys.add(first.key);
    } else {
      playSound("wrong");
      first.button.classList.add("wrong");
      second.button.classList.add("wrong");
      setTimeout(() => {
        first.button.classList.remove("wrong");
        second.button.classList.remove("wrong");
      }, 420);
    }
    state.matches.forEach((item) => item.button.classList.remove("selected"));
    state.matches = [];
  }
}

function checkAnswer() {
  if (state.checked) return;

  const step = currentStep();
  if (step.type === "intro" || step.type === "learn") {
    markCorrect(step.type === "intro" ? "Level boshlandi." : "Zo'r. Endi so'zlarni mashqda sinab ko'ramiz.", 5);
    return;
  }

  if (step.type === "match") {
    const ok = state.matchedKeys.size === step.pairs.length;
    ok ? markCorrect("Hammasi to'g'ri juftlandi.", 15) : markWrong("Hali hamma juftlik topilmadi.");
    return;
  }

  if (step.type === "sort") {
    const candidate = state.selectedTokens.join(" ");
    candidate === step.answer ? markCorrect("Gap to'g'ri yig'ildi.", 15) : markWrong("So'zlar tartibini qayta o'ylab ko'ring.");
    return;
  }

  if (step.type === "boss") {
    const ok = step.questions.every((question, index) => state.bossAnswers[index] === question.answer);
    ok ? markCorrect("Final sinovi zo'r o'tdi.", 25) : markWrong("Finalda kamida bitta olmosh adashdi.");
    return;
  }

  if (!state.selected) {
    showFeedback("bad", "Avval javob tanlang.");
    playSound("wrong");
    return;
  }

  let answer = step.answer;
  let isCorrect = state.selected === answer;

  if (step.type === "truefalse") {
    answer = step.answer ? "To'g'ri" : "Noto'g'ri";
    isCorrect = state.selected === answer;
  }

  document.querySelectorAll(".option-card").forEach((button) => {
    if (button.dataset.value === answer) button.classList.add("correct");
    if (button.dataset.value === state.selected && !isCorrect) button.classList.add("wrong");
  });

  isCorrect ? markCorrect("To'g'ri javob.", 10) : markWrong(step.hint || "Yana bir marta diqqat bilan ko'ring.");
}

function markCorrect(message, points) {
  const earned = points * state.combo;
  state.score += earned;
  state.combo = Math.min(5, state.combo + 1);
  state.checked = true;
  activityCard.classList.add("success-burst");
  playSound("success");
  showFeedback("good", `${message} +${earned} ball`);
  revealNext();
  renderStats();
}

function markWrong(message) {
  state.hearts = Math.max(0, state.hearts - 1);
  state.combo = 1;
  state.checked = true;
  activityCard.classList.add("danger-shake");
  playSound("wrong");
  showFeedback("bad", message);
  revealNext();
  renderStats();
}

function showFeedback(type, message) {
  const oldFeedback = document.querySelector(".feedback");
  if (oldFeedback) oldFeedback.remove();
  const feedback = document.createElement("div");
  feedback.className = `feedback ${type}`;
  feedback.textContent = message;
  activityCard.appendChild(feedback);
}

function revealNext() {
  checkButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
}

function nextStep() {
  playSound("tap");
  const level = currentLevel();
  if (state.stepIndex < level.steps.length - 1 && state.hearts > 0) {
    state.stepIndex += 1;
    renderActivity();
    return;
  }

  renderComplete();
}

function renderComplete() {
  const possible = currentLevel().steps.length * 12;
  const stars = state.score >= possible * 0.72 ? 3 : state.score >= possible * 0.48 ? 2 : 1;
  state.completedStars = Math.max(state.completedStars, stars);
  localStorage.setItem("arabicGameStars", String(state.completedStars));
  document.getElementById("stepProgress").style.width = "100%";
  checkButton.classList.add("hidden");
  nextButton.classList.add("hidden");
  playSound("win");

  activityCard.innerHTML = `
    ${scene3d()}
    <div class="completion">
      <div class="stars">${"\u2605".repeat(stars)}${"\u2606".repeat(3 - stars)}</div>
      <div class="activity-head">
        <h3>1-level yakunlandi</h3>
        <p>Siz oila mavzusidagi asosiy so'zlar, jins va <span class="arabic">${AR.thisM} / ${AR.thisF} / ${AR.these}</span> olmoshlarini kuchli mashq qildingiz.</p>
      </div>
      <div class="sentence-card result-card">
        <strong>Natija:</strong> ${state.score} ball, ${state.hearts} yurak qoldi.
      </div>
    </div>
  `;
  renderStats();
}

function startLevel() {
  playSound("start");
  state.stepIndex = 0;
  state.score = 0;
  state.hearts = 3;
  state.combo = 1;
  renderLevelGrid();
  renderActivity();
}

function scene3d() {
  return `
    <div class="stage-3d" aria-hidden="true">
      <span class="orb one"></span>
      <span class="orb two"></span>
      <span class="float-letter a">ع</span>
      <span class="float-letter b">أ</span>
      <span class="float-letter c">ه</span>
      <span class="cube"></span>
    </div>
  `;
}

function playSound(type) {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    if (type === "success") {
      [
        [523.25, 0],
        [659.25, 0.07],
        [783.99, 0.14],
        [1046.5, 0.24]
      ].forEach(([freq, offset], index) => {
        bell(freq, now + offset, 0.18 - index * 0.02);
      });
      return;
    }
    const notes = {
      tap: [360, 0.04, "sine"],
      start: [220, 0.08, "triangle"],
      match: [520, 0.08, "sine"],
      correct: [660, 0.1, "triangle"],
      wrong: [130, 0.16, "sawtooth"],
      win: [740, 0.2, "sine"]
    };
    const [freq, duration, wave] = notes[type] || notes.tap;
    tone(freq, duration, wave, now);
    if (type === "correct" || type === "win") tone(freq * 1.5, duration * 0.9, wave, now + duration * 0.72);
  } catch {
    state.sound = false;
  }
}

function tone(freq, duration, wave, start) {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = wave;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.12, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain).connect(audioContext.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function bell(freq, start, duration) {
  const osc = audioContext.createOscillator();
  const shimmer = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const shimmerGain = audioContext.createGain();

  osc.type = "sine";
  shimmer.type = "triangle";
  osc.frequency.setValueAtTime(freq, start);
  shimmer.frequency.setValueAtTime(freq * 2.01, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.16, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  shimmerGain.gain.setValueAtTime(0.03, start);
  shimmerGain.gain.exponentialRampToValueAtTime(0.0001, start + duration * 0.75);
  osc.connect(gain).connect(audioContext.destination);
  shimmer.connect(shimmerGain).connect(audioContext.destination);
  osc.start(start);
  shimmer.start(start);
  osc.stop(start + duration + 0.02);
  shimmer.stop(start + duration + 0.02);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextStep);
restartButton.addEventListener("click", startLevel);
backToMap.addEventListener("click", () => {
  playSound("tap");
  levelPanel.classList.add("open");
});
soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  localStorage.setItem("arabicGameSound", state.sound ? "on" : "off");
  playSound("tap");
  renderStats();
});

renderLevelGrid();
startLevel();
