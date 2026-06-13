const AR = {
  father: "\u0623\u064E\u0628\u064C",
  mother: "\u0623\u064F\u0645\u0651\u064C",
  brother: "\u0623\u064E\u062E\u064C",
  sister: "\u0623\u064F\u062E\u0652\u062A\u064C",
  grandfather: "\u062C\u064E\u062F\u0651\u064C",
  grandmother: "\u062C\u064E\u062F\u0651\u064E\u0629\u064C",
  uncle: "\u0639\u064E\u0645\u0651\u064C",
  aunt: "\u0639\u064E\u0645\u0651\u064E\u0629\u064C",
  maternalUncle: "\u062E\u064E\u0627\u0644\u064C",
  maternalAunt: "\u062E\u064E\u0627\u0644\u064E\u0629\u064C",
  thisM: "\u0647\u064E\u0630\u064E\u0627",
  thisF: "\u0647\u064E\u0630\u0650\u0647\u0650",
  these: "\u0647\u064E\u0624\u064F\u0644\u064E\u0627\u0621\u0650",
  whoThisM: "\u0645\u064E\u0646\u0652 \u0647\u064E\u0630\u064E\u0627\u061F",
  whoThisF: "\u0645\u064E\u0646\u0652 \u0647\u064E\u0630\u0650\u0647\u0650\u061F",
  myFather: "\u0623\u064E\u0628\u0650\u064A",
  myMother: "\u0623\u064F\u0645\u0651\u0650\u064A",
  myBrother: "\u0623\u064E\u062E\u0650\u064A",
  mySister: "\u0623\u064F\u062E\u0652\u062A\u0650\u064A",
  myGrandfather: "\u062C\u064E\u062F\u0651\u0650\u064A",
  myGrandmother: "\u062C\u064E\u062F\u0651\u064E\u062A\u0650\u064A",
  myUncle: "\u0639\u064E\u0645\u0651\u0650\u064A",
  myAunt: "\u0639\u064E\u0645\u0651\u064E\u062A\u0650\u064A",
  myMaternalAunt: "\u062E\u064E\u0627\u0644\u064E\u062A\u0650\u064A",
  mySisters: "\u0623\u064E\u062E\u064E\u0648\u064E\u0627\u062A\u0650\u064A",
  myBrothers: "\u0625\u0650\u062E\u0652\u0648\u064E\u062A\u0650\u064A"
};

const familyWords = [
  { ar: AR.father, uz: "ota", gender: "m" },
  { ar: AR.mother, uz: "ona", gender: "f" },
  { ar: AR.brother, uz: "aka / uka", gender: "m" },
  { ar: AR.sister, uz: "opa / singil", gender: "f" },
  { ar: AR.grandfather, uz: "buva", gender: "m" },
  { ar: AR.grandmother, uz: "buvi", gender: "f" },
  { ar: AR.uncle, uz: "amaki", gender: "m" },
  { ar: AR.aunt, uz: "amma", gender: "f" },
  { ar: AR.maternalUncle, uz: "tog'a", gender: "m" },
  { ar: AR.maternalAunt, uz: "xola", gender: "f" }
];

const COURSE = {
  totalLevels: 20,
  levels: [
    {
      id: 1,
      title: "Oila va ko'rsatish olmoshlari",
      shortTitle: "Oila",
      unlocked: true,
      steps: [
        {
          type: "intro",
          title: "1-level: Oila saroyi",
          text: "Bu levelda oila so'zlari, erkak-ayol jinsi va ko'rsatish olmoshlarini o'yin orqali mustahkamlaysiz.",
          focus: `${AR.thisM} / ${AR.thisF} / ${AR.these}`
        },
        {
          type: "learn",
          title: "Yangi so'zlar",
          text: "Kartalarni kuzating va arabcha-o'zbekcha juftliklarni eslab qoling.",
          words: familyWords
        },
        {
          type: "quiz",
          title: "Tarjima zarbasi",
          text: "Arabcha so'zning o'zbekcha ma'nosini tanlang.",
          prompt: AR.mother,
          options: ["ona", "ota", "buva", "aka / uka"],
          answer: "ona"
        },
        {
          type: "quiz",
          title: "Tezkor lug'at",
          text: "Bu so'z qo'llanmadagi oila lug'atidan olingan.",
          prompt: AR.grandmother,
          options: ["xola", "buvi", "amma", "singil"],
          answer: "buvi"
        },
        {
          type: "choice",
          title: "Ayol jinsini toping",
          text: "Ayol jinsidagi birlik so'zlar uchun mos ko'rsatish olmoshini tanlang.",
          sentence: `________ ${AR.myMother}.`,
          options: [AR.thisM, AR.thisF, AR.these],
          answer: AR.thisF,
          hint: `${AR.myMother} - mening onam. Ayol jinsidagi birlik uchun ${AR.thisF}.`
        },
        {
          type: "choice",
          title: "Erkak jinsini toping",
          text: "Erkak jinsidagi birlik so'zlar uchun mos olmoshni tanlang.",
          sentence: `________ ${AR.myFather}.`,
          options: [AR.thisF, AR.these, AR.thisM],
          answer: AR.thisM,
          hint: `${AR.myFather} - mening otam. Erkak jinsidagi birlik uchun ${AR.thisM}.`
        },
        {
          type: "match",
          title: "Juftlik arenasi",
          text: "Arabcha so'zlarni o'zbekcha ma'nolari bilan juftlang.",
          pairs: [
            { ar: AR.grandfather, uz: "buva" },
            { ar: AR.grandmother, uz: "buvi" },
            { ar: AR.sister, uz: "opa / singil" },
            { ar: AR.uncle, uz: "amaki" },
            { ar: AR.maternalAunt, uz: "xola" }
          ]
        },
        {
          type: "sort",
          title: "Gap quruvchi",
          text: "So'zlarni tartib bilan bosib, gapni yig'ing.",
          uz: "Bu mening akam.",
          tokens: [AR.myBrother + ".", AR.thisM],
          answer: `${AR.thisM} ${AR.myBrother}.`
        },
        {
          type: "sort",
          title: "Yana bir gap",
          text: "Endi ayol jinsidagi gapni yig'ing.",
          uz: "Bu mening buvim.",
          tokens: [AR.myGrandmother + ".", AR.thisF],
          answer: `${AR.thisF} ${AR.myGrandmother}.`
        },
        {
          type: "build",
          title: "Tarjimani tanlang",
          text: "Berilgan o'zbekcha gapga mos arabcha gapni tanlang.",
          uz: "Bu mening xolam.",
          options: [
            `${AR.thisF} ${AR.myMaternalAunt}.`,
            `${AR.thisM} ${AR.myUncle}.`,
            `${AR.these} ${AR.mySisters}.`
          ],
          answer: `${AR.thisF} ${AR.myMaternalAunt}.`
        },
        {
          type: "truefalse",
          title: "To'g'ri yoki noto'g'ri",
          text: "Gap va tarjima mos keladimi?",
          arabic: `${AR.thisM} ${AR.myFather}.`,
          uz: "Bu mening otam.",
          answer: true
        },
        {
          type: "truefalse",
          title: "Diqqat sinovi",
          text: "Ayol jinsidagi gapga erkak olmoshi qo'yilganmi?",
          arabic: `${AR.thisM} ${AR.myMother}.`,
          uz: "Bu mening onam.",
          answer: false,
          hint: `Onam uchun ${AR.thisF} ishlatiladi.`
        },
        {
          type: "dialog",
          title: "Mini dialog",
          text: "Savolga mos javobni tanlang.",
          prompt: AR.whoThisF,
          options: [
            `${AR.thisF} ${AR.myMother}.`,
            `${AR.thisM} ${AR.myFather}.`,
            `${AR.these} ${AR.mySisters}.`
          ],
          answer: `${AR.thisF} ${AR.myMother}.`
        },
        {
          type: "choice",
          title: "Ko'plik eshigi",
          text: "Insonlar ko'pligida qaysi olmosh ishlatiladi?",
          sentence: `________ ${AR.myBrothers}.`,
          options: [AR.thisM, AR.thisF, AR.these],
          answer: AR.these,
          hint: `Ko'plik insonlar uchun ${AR.these} ishlatiladi.`
        },
        {
          type: "boss",
          title: "Final challenge",
          text: "1-level yakuniy sinovi: har bir gapga mos olmoshni tanlang.",
          questions: [
            { sentence: `________ ${AR.myGrandfather}.`, answer: AR.thisM },
            { sentence: `________ ${AR.mySister}.`, answer: AR.thisF },
            { sentence: `________ ${AR.mySisters}.`, answer: AR.these }
          ],
          options: [AR.thisM, AR.thisF, AR.these]
        }
      ]
    }
  ]
};
