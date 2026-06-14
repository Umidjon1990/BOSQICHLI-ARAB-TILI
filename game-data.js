const AR = {
  father: "أَبٌ",
  mother: "أُمٌّ",
  brother: "أَخٌ",
  sister: "أُخْتٌ",
  grandfather: "جَدٌّ",
  grandmother: "جَدَّةٌ",
  uncle: "عَمٌّ",
  aunt: "عَمَّةٌ",
  maternalUncle: "خَالٌ",
  maternalAunt: "خَالَةٌ",
  son: "اِبْنٌ",
  daughter: "بِنْتٌ",
  husband: "زَوْجٌ",
  wife: "زَوْجَةٌ",
  grandson: "حَفِيدٌ",
  granddaughter: "حَفِيدَةٌ",
  fatherInLaw: "حَمٌ",
  motherInLaw: "حَمَاةٌ",
  inLaw: "صِهْرٌ",
  daughterInLaw: "كَنَّةٌ",
  thisM: "هَذَا",
  thisF: "هَذِهِ",
  these: "هَؤُلَاءِ",
  whoThisM: "مَنْ هَذَا؟",
  whoThisF: "مَنْ هَذِهِ؟",
  whoThese: "مَنْ هَؤُلَاءِ؟",
  myFather: "أَبِي",
  myMother: "أُمِّي",
  myBrother: "أَخِي",
  mySister: "أُخْتِي",
  mySon: "اِبْنِي",
  myDaughter: "اِبْنَتِي",
  myHusband: "زَوْجِي",
  myWife: "زَوْجَتِي",
  myGrandfather: "جَدِّي",
  myGrandmother: "جَدَّتِي",
  myUncle: "عَمِّي",
  myAunt: "عَمَّتِي",
  myMaternalAunt: "خَالَتِي",
  myFathers: "آبَائِي",
  myMothers: "أُمَّهَاتِي",
  myPaternalUncles: "أَعْمَامِي",
  myMaternalUncles: "أَخْوَالِي",
  myMaternalAunts: "خَالَاتِي",
  mySons: "أَبْنَائِي",
  myGrandmothers: "جَدَّاتِي",
  mySisters: "أَخَوَاتِي",
  myBrothers: "إِخْوَتِي",
  salam: "السَّلامُ عَلَيْكُمْ",
  waSalam: "وَعَلَيْكُمُ السَّلَامُ",
  kayfaHaluka: "كَيْفَ حَالُكَ؟",
  anaBikhayr: "أَنَا بِخَيْرٍ",
  waAnta: "وَأَنْتَ؟",
  maIsmuka: "مَا اِسْمُكَ؟",
  ismiUmar: "اِسْمِي عُمَرُ",
  ismiSalim: "اِسْمِي سَلِيمٌ",
  tasharrafna: "تَشَرَّفْنَا",
  ilaAlliqaa: "إِلَى اللِّقَاءِ",
  myFamily: "عَائِلَتِي",
  small: "صَغِيرَةٌ",
  beautiful: "جَمِيلَةٌ",
  li: "لِي",
  works: "يَعْمَلُ",
  office: "الْمَكْتَبِ",
  teacherF: "مُعَلِّمَةٌ",
  studies: "يَدْرُسُ",
  school: "الْمَدْرَسَةِ",
  kindergarten: "رَوْضَةُ الأَطْفَالِ",
  liveDual: "يَعِيشَانِ",
  village: "الْقَرْيَةِ",
  dog: "كَلْبٌ",
  cat: "قِطَّةٌ",
  hisName: "اِسْمُهُ",
  herName: "اِسْمُهَا",
  we: "نَحْنُ",
  love: "نُحِبُّ",
  holidays: "الْعُطْلَاتِ",
  iLove: "أُحِبُّ",
  much: "كَثِيرًا"
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
  { ar: AR.maternalAunt, uz: "xola", gender: "f" },
  { ar: AR.son, uz: "o'g'il", gender: "m" },
  { ar: AR.daughter, uz: "qiz", gender: "f" },
  { ar: AR.husband, uz: "er", gender: "m" },
  { ar: AR.wife, uz: "xotin", gender: "f" },
  { ar: AR.grandson, uz: "nabira (o'g'il)", gender: "m" },
  { ar: AR.granddaughter, uz: "nabira (qiz)", gender: "f" },
  { ar: AR.fatherInLaw, uz: "qaynota", gender: "m" },
  { ar: AR.motherInLaw, uz: "qaynona", gender: "f" },
  { ar: AR.inLaw, uz: "quda", gender: "m" },
  { ar: AR.daughterInLaw, uz: "kelin", gender: "f" }
];

const textWords = [
  { ar: AR.myFamily, uz: "mening oilam" },
  { ar: AR.small, uz: "kichik" },
  { ar: AR.beautiful, uz: "chiroyli" },
  { ar: AR.works, uz: "ishlaydi" },
  { ar: AR.office, uz: "ofis" },
  { ar: AR.teacherF, uz: "o'qituvchi ayol" },
  { ar: AR.studies, uz: "o'qiydi" },
  { ar: AR.school, uz: "maktab" },
  { ar: AR.kindergarten, uz: "bolalar bog'chasi" },
  { ar: AR.liveDual, uz: "ikkisi yashaydi" },
  { ar: AR.village, uz: "qishloq" },
  { ar: AR.dog, uz: "it" },
  { ar: AR.cat, uz: "mushuk" },
  { ar: AR.love, uz: "yaxshi ko'ramiz" },
  { ar: AR.holidays, uz: "dam olish kunlari" }
];

const AR2 = {
  book: "كِتَابٌ",
  pen: "قَلَمٌ",
  notebook: "دَفْتَرٌ",
  ruler: "مِسْطَرَةٌ",
  bag: "حَقِيبَةٌ",
  board: "سَبُّورَةٌ",
  eraser: "مِمْحَاةٌ",
  scissors: "مِقَصٌّ",
  computer: "حَاسُوبٌ",
  chair: "كُرْسِيٌّ",
  desk: "مَكْتَبٌ",
  coloredPencil: "قَلَمٌ لَوْنِيٌّ",
  schoolBook: "كِتَابٌ مَدْرَسِيٌّ",
  classroom: "قَاعَةٌ دِرَاسِيَّةٌ",
  bus: "حَافِلَةٌ",
  school: "مَدْرَسَةٌ",
  teacher: "مُعَلِّمٌ",
  student: "طَالِبٌ",
  library: "مَكْتَبَةٌ",
  class: "صَفٌّ",
  whatIsThisM: "مَا هَذَا؟",
  whatIsThisF: "مَا هَذِهِ؟",
  isThisM: "أ هَذَا",
  isThisF: "أ هَذِهِ",
  yes: "نَعَمْ",
  no: "لا",
  aboutMyself: "عَنْ نَفْسِي",
  myNameUthman: "اِسْمِي عُثْمَانُ",
  fromUzbekistan: "أَنَا مِنْ أُوزْبَكِسْتَانَ",
  nationalityUzbek: "جِنْسِيَّتِي أُوزْبَكِيٌّ",
  iAmPupil: "أَنَا تِلْمِيذٌ",
  myAddress: "عُنْوَانِي حَيُّ جَامِعَةٍ",
  fatherName: "أَبِي اِسْمُهُ عُمَرُ",
  motherName: "أُمِّي اِسْمُهَا مَرْيَمُ",
  mySchool: "مَدْرَسَتِي",
  big: "كَبِيرَةٌ",
  clean: "نَظِيفَةٌ",
  there: "هُنَاكَ",
  many: "كَثِيرٌ مِنَ",
  classes: "الْفُصُولِ",
  teachers: "الْمُعَلِّمِينَ",
  weStudy: "نَدْرُسُ",
  everyClass: "فِي كُلِّ صَفٍّ",
  chairs: "كَرَاسِيُّ",
  desks: "مَكَاتِبُ",
  weRead: "نَقْرَأُ",
  books: "الْكُتُبَ",
  weWrite: "نَكْتُبُ",
  notebooks: "الدَّفَاتِرِ",
  friends: "أَصْدِقَائِي"
};

const lesson2Words = [
  { ar: AR2.book, uz: "kitob", gender: "m" },
  { ar: AR2.pen, uz: "qalam", gender: "m" },
  { ar: AR2.notebook, uz: "daftar", gender: "m" },
  { ar: AR2.ruler, uz: "chizg'ich", gender: "f" },
  { ar: AR2.bag, uz: "sumka", gender: "f" },
  { ar: AR2.board, uz: "doska", gender: "f" },
  { ar: AR2.eraser, uz: "o'chirg'ich", gender: "f" },
  { ar: AR2.scissors, uz: "qaychi", gender: "m" },
  { ar: AR2.computer, uz: "kompyuter", gender: "m" },
  { ar: AR2.chair, uz: "kursi", gender: "m" },
  { ar: AR2.desk, uz: "stol", gender: "m" },
  { ar: AR2.coloredPencil, uz: "rangli qalam", gender: "m" },
  { ar: AR2.schoolBook, uz: "maktab kitobi", gender: "m" },
  { ar: AR2.classroom, uz: "o'quv xonasi", gender: "f" },
  { ar: AR2.bus, uz: "avtobus", gender: "f" },
  { ar: AR2.school, uz: "maktab", gender: "f" },
  { ar: AR2.teacher, uz: "o'qituvchi", gender: "m" },
  { ar: AR2.student, uz: "talaba", gender: "m" },
  { ar: AR2.library, uz: "kutubxona", gender: "f" },
  { ar: AR2.class, uz: "sinf", gender: "m" }
];

const lesson2TextWords = [
  { ar: AR2.mySchool, uz: "mening maktabim" },
  { ar: AR2.big, uz: "katta" },
  { ar: AR2.clean, uz: "toza" },
  { ar: AR2.there, uz: "u yerda" },
  { ar: AR2.many, uz: "ko'pgina" },
  { ar: AR2.classes, uz: "sinflar" },
  { ar: AR2.teachers, uz: "o'qituvchilar" },
  { ar: AR2.weStudy, uz: "o'qiymiz" },
  { ar: AR2.everyClass, uz: "har bir sinfda" },
  { ar: AR2.weRead, uz: "o'qiymiz" },
  { ar: AR2.weWrite, uz: "yozamiz" },
  { ar: AR2.notebooks, uz: "daftarlar" }
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
          text: "Bu levelda 1-darsdagi barcha oila so'zlari, dialog, matn va ko'rsatish olmoshlarini mashq qilasiz.",
          focus: `${AR.thisM} / ${AR.thisF} / ${AR.these}`
        },
        {
          type: "learn",
          title: "1-dars lug'ati: oila",
          text: "Qo'llanmadagi 1-dars lug'atining hammasi shu yerda: 20 ta asosiy so'z.",
          words: familyWords
        },
        {
          type: "match",
          title: "Lug'at: birinchi guruh",
          text: "Arabcha so'zlarni o'zbekcha ma'nolari bilan juftlang.",
          pairs: [
            { ar: AR.father, uz: "ota" },
            { ar: AR.mother, uz: "ona" },
            { ar: AR.brother, uz: "aka / uka" },
            { ar: AR.sister, uz: "opa / singil" },
            { ar: AR.grandfather, uz: "buva" }
          ]
        },
        {
          type: "match",
          title: "Lug'at: ikkinchi guruh",
          text: "Endi qo'llanmadagi qolgan oilaviy so'zlarni mustahkamlaymiz.",
          pairs: [
            { ar: AR.grandmother, uz: "buvi" },
            { ar: AR.uncle, uz: "amaki" },
            { ar: AR.aunt, uz: "amma" },
            { ar: AR.maternalUncle, uz: "tog'a" },
            { ar: AR.maternalAunt, uz: "xola" }
          ]
        },
        {
          type: "match",
          title: "Lug'at: qarindoshlik",
          text: "1-darsdagi er-xotin, farzand va quda so'zlarini juftlang.",
          pairs: [
            { ar: AR.son, uz: "o'g'il" },
            { ar: AR.daughter, uz: "qiz" },
            { ar: AR.husband, uz: "er" },
            { ar: AR.wife, uz: "xotin" },
            { ar: AR.daughterInLaw, uz: "kelin" }
          ]
        },
        {
          type: "quiz",
          title: "Tezkor lug'at",
          text: "Arabcha so'zning o'zbekcha ma'nosini tanlang.",
          prompt: AR.granddaughter,
          options: ["nabira (qiz)", "qaynona", "kelin", "xola"],
          answer: "nabira (qiz)"
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
          type: "choice",
          title: "Mashq: qo'llanmadagi namuna",
          text: "Bo'sh joyga mos olmoshni qo'ying.",
          sentence: `________ ${AR.myWife}.`,
          options: [AR.thisM, AR.thisF, AR.these],
          answer: AR.thisF,
          hint: `${AR.myWife} ayol jinsidagi birlik.`
        },
        {
          type: "choice",
          title: "Ko'plik mashqi",
          text: "Insonlar ko'pligi uchun qaysi olmosh ishlatiladi?",
          sentence: `________ ${AR.myMaternalUncles}.`,
          options: [AR.thisM, AR.thisF, AR.these],
          answer: AR.these,
          hint: `Ko'plik insonlar uchun ${AR.these} ishlatiladi.`
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
          title: "Tarjima mashqi",
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
          type: "build",
          title: "Tarjima mashqi",
          text: "Qo'llanmadagi tarjima mashqlari asosida mos gapni tanlang.",
          uz: "Bular mening tog'alarim.",
          options: [
            `${AR.these} ${AR.myMaternalUncles}.`,
            `${AR.thisM} ${AR.myMaternalUncle}.`,
            `${AR.thisF} ${AR.myMaternalAunt}.`
          ],
          answer: `${AR.these} ${AR.myMaternalUncles}.`
        },
        {
          type: "dialog",
          title: "Dialog: salomlashish",
          text: "Dialogdan savol: salomga mos javobni tanlang.",
          prompt: AR.salam,
          options: [AR.waSalam, AR.anaBikhayr, AR.ilaAlliqaa],
          answer: AR.waSalam
        },
        {
          type: "dialog",
          title: "Dialog: ahvol so'rash",
          text: "Dialogdagi savolga mos javobni tanlang.",
          prompt: AR.kayfaHaluka,
          options: [AR.anaBikhayr, AR.ismiUmar, AR.tasharrafna],
          answer: AR.anaBikhayr
        },
        {
          type: "dialog",
          title: "Dialog: ism",
          text: "Tanishuv dialogidagi savolga mos javobni tanlang.",
          prompt: AR.maIsmuka,
          options: [AR.ismiSalim, AR.waSalam, AR.ilaAlliqaa],
          answer: AR.ismiSalim
        },
        {
          type: "learn",
          title: "Matn so'zlari",
          text: "1-dars matnidan olingan so'zlar. Keyingi bosqichlarda bo'sh joy to'ldirasiz.",
          words: textWords
        },
        {
          type: "fill",
          title: "Matndan bo'sh joy",
          text: "1-dars matni asosida mos so'zni tanlang.",
          sentence: `أَبِي ______ فِي ${AR.office}.`,
          options: [AR.works, AR.studies, AR.love],
          answer: AR.works,
          hint: "Otam ofisda ishlaydi."
        },
        {
          type: "fill",
          title: "Matndan bo'sh joy",
          text: "Matndagi gapni to'ldiring.",
          sentence: `أَخِي ______ فِي ${AR.school}.`,
          options: [AR.works, AR.studies, AR.liveDual],
          answer: AR.studies,
          hint: "Akam maktabda o'qiydi."
        },
        {
          type: "fill",
          title: "Matndan bo'sh joy",
          text: "Uy hayvoni haqida gapni to'ldiring.",
          sentence: `عِنْدَنَا ______ اِسْمُهُ بُوبِيك.`,
          options: [AR.cat, AR.dog, AR.holidays],
          answer: AR.dog,
          hint: "بوبِيك - itning ismi."
        },
        {
          type: "fill",
          title: "Matndan bo'sh joy",
          text: "Matn oxiridagi fikrni to'ldiring.",
          sentence: `${AR.we} ______ ${AR.holidays}.`,
          options: [AR.love, AR.works, AR.studies],
          answer: AR.love,
          hint: "Biz dam olish kunlarini yaxshi ko'ramiz."
        },
        {
          type: "truefalse",
          title: "Matnni tushunish",
          text: "Gap va tarjima mos keladimi?",
          arabic: `أُمِّي ${AR.teacherF}.`,
          uz: "Onam o'qituvchi.",
          answer: true
        },
        {
          type: "boss",
          title: "Final challenge",
          text: "1-level yakuniy sinovi: har bir gapga mos olmoshni tanlang.",
          questions: [
            { sentence: `________ ${AR.myGrandfather}.`, answer: AR.thisM },
            { sentence: `________ ${AR.mySister}.`, answer: AR.thisF },
            { sentence: `________ ${AR.mySons}.`, answer: AR.these },
            { sentence: `________ ${AR.myMothers}.`, answer: AR.these }
          ],
          options: [AR.thisM, AR.thisF, AR.these]
        }
      ]
    },
    {
      id: 2,
      title: "Maktab buyumlari va so'roq gaplar",
      shortTitle: "Maktab",
      unlocked: true,
      steps: [
        {
          type: "intro",
          title: "2-level: Maktab xazinasi",
          text: "Bu levelda 2-darsdagi maktab buyumlari, 'Bu nima?' savollari, tasdiq/rad javoblari, dialog va matn mashqlari bor.",
          focus: `${AR2.whatIsThisM} / ${AR2.whatIsThisF}`
        },
        {
          type: "learn",
          title: "2-dars lug'ati: maktab",
          text: "Qo'llanmadagi 2-dars lug'atining hammasi: 20 ta maktab buyumi va maktabga oid so'zlar.",
          words: lesson2Words
        },
        {
          type: "match",
          title: "Lug'at: o'quv qurollari",
          text: "Arabcha so'zlarni o'zbekcha ma'nolari bilan juftlang.",
          pairs: [
            { ar: AR2.book, uz: "kitob" },
            { ar: AR2.pen, uz: "qalam" },
            { ar: AR2.notebook, uz: "daftar" },
            { ar: AR2.ruler, uz: "chizg'ich" },
            { ar: AR2.eraser, uz: "o'chirg'ich" }
          ]
        },
        {
          type: "match",
          title: "Lug'at: sinfdagi narsalar",
          text: "Sinfda uchraydigan narsalarni moslang.",
          pairs: [
            { ar: AR2.board, uz: "doska" },
            { ar: AR2.computer, uz: "kompyuter" },
            { ar: AR2.chair, uz: "kursi" },
            { ar: AR2.desk, uz: "stol" },
            { ar: AR2.classroom, uz: "o'quv xonasi" }
          ]
        },
        {
          type: "match",
          title: "Lug'at: maktab joylari",
          text: "Maktabga oid so'zlarni mustahkamlaymiz.",
          pairs: [
            { ar: AR2.bus, uz: "avtobus" },
            { ar: AR2.school, uz: "maktab" },
            { ar: AR2.teacher, uz: "o'qituvchi" },
            { ar: AR2.student, uz: "talaba" },
            { ar: AR2.library, uz: "kutubxona" }
          ]
        },
        {
          type: "quiz",
          title: "Multiple choice",
          text: "Arabcha so'zning ma'nosini tanlang.",
          prompt: AR2.schoolBook,
          options: ["maktab kitobi", "rangli qalam", "o'quv xonasi", "kutubxona"],
          answer: "maktab kitobi"
        },
        {
          type: "quiz",
          title: "Tezkor lug'at",
          text: "2-dars lug'atidan olingan so'zni toping.",
          prompt: AR2.scissors,
          options: ["qaychi", "kursi", "sumka", "daftar"],
          answer: "qaychi"
        },
        {
          type: "choice",
          title: "So'roq gap: erkak jins",
          text: "Erkak jinsidagi birlik so'zga mos savolni tanlang.",
          sentence: `________ ${AR2.book}؟`,
          options: ["أ هَذَا", "أ هَذِهِ", AR2.whatIsThisF],
          answer: "أ هَذَا",
          hint: `${AR2.book} erkak jinsidagi so'z.`
        },
        {
          type: "choice",
          title: "So'roq gap: ayol jins",
          text: "Ayol jinsidagi birlik so'zga mos savolni tanlang.",
          sentence: `________ ${AR2.bag}؟`,
          options: ["أ هَذَا", "أ هَذِهِ", AR2.whatIsThisM],
          answer: "أ هَذِهِ",
          hint: `${AR2.bag} ayol jinsidagi so'z.`
        },
        {
          type: "fill",
          title: "Bo'sh o'ringa so'z qo'ying",
          text: "Qo'llanmadagi mashq asosida gapni to'ldiring.",
          sentence: `مَا هَذَا؟ هَذَا ________.`,
          options: [AR2.pen, AR2.ruler, AR2.board],
          answer: AR2.pen,
          hint: "هَذَا erkak jinsdagi birlik so'z bilan ishlatiladi."
        },
        {
          type: "fill",
          title: "Bo'sh o'ringa so'z qo'ying",
          text: "Ayol jinsidagi javobni tanlang.",
          sentence: `مَا هَذِهِ؟ هَذِهِ ________.`,
          options: [AR2.notebook, AR2.bag, AR2.pen],
          answer: AR2.bag,
          hint: "هَذِهِ ayol jinsdagi birlik so'z bilan ishlatiladi."
        },
        {
          type: "fill",
          title: "Tasdiq javobi",
          text: "Tasdiq javobidagi bo'sh joyni to'ldiring.",
          sentence: `أ هَذَا صَفٌّ؟ نَعَمْ، هَذَا ________.`,
          options: [AR2.class, AR2.school, AR2.computer],
          answer: AR2.class,
          hint: "Savolda صَفٌّ so'ralgan."
        },
        {
          type: "fill",
          title: "Rad javobi",
          text: "Rad javobida to'g'ri so'zni tanlang.",
          sentence: `أ هَذِهِ مِسْطَرَةٌ؟ لا، هَذِهِ ________.`,
          options: [AR2.eraser, AR2.class, AR2.schoolBook],
          answer: AR2.eraser,
          hint: "لا javobidan keyin boshqa ayol jinsidagi narsa keladi."
        },
        {
          type: "sort",
          title: "So'zlardan gap tuzish",
          text: "So'zlarni tartib bilan bosib, qo'llanmadagi namunaviy gapni yig'ing.",
          uz: "Bu kitob.",
          tokens: [AR2.book + ".", AR.thisM],
          answer: `${AR.thisM} ${AR2.book}.`
        },
        {
          type: "sort",
          title: "So'zlardan savol tuzish",
          text: "Savol va javobni tartib bilan yig'ing.",
          uz: "Bu nimadir? Bu daftar.",
          tokens: [AR2.notebook + ".", AR.thisM, AR2.whatIsThisM],
          answer: `${AR2.whatIsThisM} ${AR.thisM} ${AR2.notebook}.`
        },
        {
          type: "build",
          title: "Tarjima mashqi",
          text: "O'zbekcha gapga mos arabcha gapni tanlang.",
          uz: "Bu kitobmi?",
          options: [
            `أ هَذَا ${AR2.book}؟`,
            `أ هَذِهِ ${AR2.book}؟`,
            `${AR2.whatIsThisM} ${AR.thisM} ${AR2.book}.`
          ],
          answer: `أ هَذَا ${AR2.book}؟`
        },
        {
          type: "build",
          title: "Tarjima mashqi",
          text: "Rad javobini to'g'ri tanlang.",
          uz: "Yo'q, bu kompyuter.",
          options: [
            `لا، هَذَا ${AR2.computer}.`,
            `نَعَمْ، هَذَا ${AR2.computer}.`,
            `لا، هَذِهِ ${AR2.computer}.`
          ],
          answer: `لا، هَذَا ${AR2.computer}.`
        },
        {
          type: "truefalse",
          title: "To'g'ri yoki noto'g'ri",
          text: "Gap grammatik jihatdan to'g'rimi?",
          arabic: `مَا هَذَا؟ هَذَا ${AR2.notebook}.`,
          uz: "Bu nima? Bu daftar.",
          answer: true
        },
        {
          type: "truefalse",
          title: "Xatoni toping",
          text: "Gapda jins mosligi to'g'rimi?",
          arabic: `مَا هَذَا؟ هَذَا ${AR2.ruler}.`,
          uz: "Bu nima? Bu chizg'ich.",
          answer: false,
          hint: `${AR2.ruler} ayol jinsdagi so'z, ${AR.thisF} ishlatiladi.`
        },
        {
          type: "dialog",
          title: "Dialog: o'zim haqimda",
          text: "Javob bo'luvchi iborani tanlang.",
          prompt: "اِسْمُكَ؟",
          options: [AR2.myNameUthman, AR2.fromUzbekistan, AR2.myAddress],
          answer: AR2.myNameUthman
        },
        {
          type: "dialog",
          title: "Dialog: qayerdansan?",
          text: "Manbadagi 'O'zim haqimda' qismiga mos javobni toping.",
          prompt: "مِنْ أَيْنَ أَنْتَ؟",
          options: [AR2.fromUzbekistan, AR2.iAmPupil, AR2.fatherName],
          answer: AR2.fromUzbekistan
        },
        {
          type: "dialog",
          title: "Dialog: otaning ismi",
          text: "Savolga javob bo'luvchi iborani toping.",
          prompt: "مَا اسْمُ أَبِيكَ؟",
          options: [AR2.fatherName, AR2.motherName, AR2.nationalityUzbek],
          answer: AR2.fatherName
        },
        {
          type: "learn",
          title: "Matn so'zlari: Maktabim",
          text: "2-dars matnidan olingan so'zlar. Keyingi mashqlarda matn asosida testlar bor.",
          words: lesson2TextWords
        },
        {
          type: "fill",
          title: "Matndan bo'sh joy",
          text: "Maktabim matni asosida to'g'ri so'zni qo'ying.",
          sentence: `مَدْرَسَتِي ______ وَنَظِيفَةٌ.`,
          options: [AR2.big, AR2.weRead, AR2.many],
          answer: AR2.big,
          hint: "Maktabim katta va toza."
        },
        {
          type: "fill",
          title: "Matndan bo'sh joy",
          text: "Matndagi gapni to'ldiring.",
          sentence: `نَحْنُ ______ هُنَاكَ.`,
          options: [AR2.weStudy, AR2.weWrite, AR2.big],
          answer: AR2.weStudy,
          hint: "Biz u yerda o'qiymiz."
        },
        {
          type: "fill",
          title: "Matndan bo'sh joy",
          text: "O'qish va yozish haqidagi gapni to'ldiring.",
          sentence: `${AR2.weRead} ${AR2.books} وَ ______ عَلَى ${AR2.notebooks}.`,
          options: [AR2.weWrite, AR2.weStudy, AR2.there],
          answer: AR2.weWrite,
          hint: "Biz kitoblarni o'qiymiz va daftarlarga yozamiz."
        },
        {
          type: "quiz",
          title: "Matn asosida test",
          text: "Matnga ko'ra maktab qanday?",
          prompt: "مَدْرَسَتِي ...",
          options: ["katta va toza", "kichik va eski", "sovuq va qorong'i", "bo'sh"],
          answer: "katta va toza"
        },
        {
          type: "truefalse",
          title: "Matnni tushunish",
          text: "Gap va tarjima mos keladimi?",
          arabic: `فِي كُلِّ صَفٍّ، ${AR2.board} وَ ${AR2.chairs} وَ ${AR2.desks}.`,
          uz: "Har bir sinfda doska, kursilar va stollar bor.",
          answer: true
        },
        {
          type: "boss",
          title: "Final challenge",
          text: "2-level yakuniy sinovi: savollarga mos javoblarni tanlang.",
          questions: [
            { sentence: `مَا هَذَا؟ هَذَا ________.`, answer: AR2.book },
            { sentence: `مَا هَذِهِ؟ هَذِهِ ________.`, answer: AR2.board },
            { sentence: `أ هَذَا ${AR2.student}؟ نَعَمْ، هَذَا ________.`, answer: AR2.student },
            { sentence: `أ هَذِهِ ${AR2.ruler}؟ لا، هَذِهِ ________.`, answer: AR2.eraser }
          ],
          options: [AR2.book, AR2.board, AR2.student, AR2.eraser]
        }
      ]
    }
  ]
};
