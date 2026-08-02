/**
 * Generates src/data/surahs.ts from the three source text files:
 *   quran-simple.txt  — Arabic text (surahNum|ayahNum|text)
 *   en.ahmedali.txt   — English translation (Ahmed Ali)
 *   ur.maududi.txt    — Urdu translation (Maududi)
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

// ── Surah metadata ──────────────────────────────────────────────────────────
// [id, englishName, arabicName, englishMeaning, ayahCount, revelation]
const SURAH_META = [
  [1, "Al-Faatiha", "ٱلْفَاتِحَةِ", "The Opening", 7, "Meccan"],
  [2, "Al-Baqara", "الْبَقَرَة", "The Cow", 286, "Medinan"],
  [3, "Aal-i-Imraan", "آلِ عِمۡرَانَ", "The Family of Imraan", 200, "Medinan"],
  [4, "An-Nisaa", "النِّسَاءِ", "The Women", 176, "Medinan"],
  [5, "Al-Maaida", "الْمَائِدَة", "The Table", 120, "Medinan"],
  [6, "Al-An'aam", "الأَنۡعَامِ", "The Cattle", 165, "Meccan"],
  [7, "Al-A'raaf", "الأَعۡرَافِ", "The Heights", 206, "Meccan"],
  [8, "Al-Anfaal", "الأَنفَالِ", "The Spoils of War", 75, "Medinan"],
  [9, "At-Tawba", "التَّوۡبَةِ", "The Repentance", 129, "Medinan"],
  [10, "Yunus", "يُونُسَ", "Jonas", 109, "Meccan"],
  [11, "Hud", "هُودٍ", "Hud", 123, "Meccan"],
  [12, "Yusuf", "يُوسُفَ", "Joseph", 111, "Meccan"],
  [13, "Ar-Ra'd", "الرَّعۡدِ", "The Thunder", 43, "Medinan"],
  [14, "Ibrahim", "إِبۡرَاهِيمَ", "Abraham", 52, "Meccan"],
  [15, "Al-Hijr", "الحِجۡرِ", "The Rock", 99, "Meccan"],
  [16, "An-Nahl", "النَّحۡلِ", "The Bee", 128, "Meccan"],
  [17, "Al-Israa", "الإِسۡرَاءِ", "The Night Journey", 111, "Meccan"],
  [18, "Al-Kahf", "الكَهۡفِ", "The Cave", 110, "Meccan"],
  [19, "Maryam", "مَرۡيَمَ", "Mary", 98, "Meccan"],
  [20, "Taa-Haa", "طه", "Taa-Haa", 135, "Meccan"],
  [21, "Al-Anbiyaa", "الأَنبِيَاءِ", "The Prophets", 112, "Meccan"],
  [22, "Al-Hajj", "الحَجِّ", "The Pilgrimage", 78, "Medinan"],
  [23, "Al-Muminoon", "المُؤۡمِنُونَ", "The Believers", 118, "Meccan"],
  [24, "An-Noor", "النُّورِ", "The Light", 64, "Medinan"],
  [25, "Al-Furqaan", "الفُرۡقَانِ", "The Criterion", 77, "Meccan"],
  [26, "Ash-Shu'araa", "الشُّعَرَاءِ", "The Poets", 227, "Meccan"],
  [27, "An-Naml", "النَّمۡلِ", "The Ant", 93, "Meccan"],
  [28, "Al-Qasas", "القَصَصِ", "The Story", 88, "Meccan"],
  [29, "Al-Ankaboot", "العَنكَبُوتِ", "The Spider", 69, "Meccan"],
  [30, "Ar-Room", "الرُّومِ", "The Romans", 60, "Meccan"],
  [31, "Luqman", "لُقۡمَانَ", "Luqman", 34, "Meccan"],
  [32, "As-Sajda", "السَّجۡدَةِ", "The Prostration", 30, "Meccan"],
  [33, "Al-Ahzaab", "الأَحزَابِ", "The Clans", 73, "Medinan"],
  [34, "Saba", "سَبَإٍ", "Sheba", 54, "Meccan"],
  [35, "Faatir", "فَاطِرٍ", "The Originator", 45, "Meccan"],
  [36, "Yaseen", "يسٓ", "Yaseen", 83, "Meccan"],
  [37, "As-Saaffaat", "الصَّافَّاتِ", "Those Ranged in Ranks", 182, "Meccan"],
  [38, "Saad", "صٓ", "Saad", 88, "Meccan"],
  [39, "Az-Zumar", "الزُّمَرِ", "The Groups", 75, "Meccan"],
  [40, "Al-Ghaafir", "غَافِرٍ", "The Forgiver", 85, "Meccan"],
  [41, "Fussilat", "فُصِّلَتۡ", "Explained in Detail", 54, "Meccan"],
  [42, "Ash-Shura", "الشُّورَىٰ", "The Consultation", 53, "Meccan"],
  [43, "Az-Zukhruf", "الزُّخۡرُفِ", "The Gold Adornments", 89, "Meccan"],
  [44, "Ad-Dukhaan", "الدُّخَانِ", "The Smoke", 59, "Meccan"],
  [45, "Al-Jaathiya", "الجَاثِيَةِ", "The Crouching", 37, "Meccan"],
  [46, "Al-Ahqaf", "الأَحقَافِ", "The Wind-Curved Sandhills", 35, "Meccan"],
  [47, "Muhammad", "مُحَمَّدٍ", "Muhammad", 38, "Medinan"],
  [48, "Al-Fath", "الفَتۡحِ", "The Victory", 29, "Medinan"],
  [49, "Al-Hujuraat", "الحُجُرَاتِ", "The Rooms", 18, "Medinan"],
  [50, "Qaaf", "قٓ", "Qaaf", 45, "Meccan"],
  [51, "Adh-Dhaariyat", "الذَّارِيَاتِ", "The Winnowing Winds", 60, "Meccan"],
  [52, "At-Tur", "الطُّورِ", "The Mount", 49, "Meccan"],
  [53, "An-Najm", "النَّجۡمِ", "The Star", 62, "Meccan"],
  [54, "Al-Qamar", "القَمَرِ", "The Moon", 55, "Meccan"],
  [55, "Ar-Rahmaan", "الرَّحۡمَٰنِ", "The Beneficent", 78, "Medinan"],
  [56, "Al-Waaqia", "الوَاقِعَةِ", "The Inevitable", 96, "Meccan"],
  [57, "Al-Hadid", "الحَدِيدِ", "The Iron", 29, "Medinan"],
  [58, "Al-Mujaadila", "المُجَادَلَةِ", "The Pleading Woman", 22, "Medinan"],
  [59, "Al-Hashr", "الحَشۡرِ", "The Exile", 24, "Medinan"],
  [60, "Al-Mumtahana", "المُمۡتَحَنَةِ", "She That is to be Examined", 13, "Medinan"],
  [61, "As-Saff", "الصَّفِّ", "The Ranks", 14, "Medinan"],
  [62, "Al-Jumu'a", "الجُمُعَةِ", "Friday", 11, "Medinan"],
  [63, "Al-Munaafiqoon", "المُنَافِقُونَ", "The Hypocrites", 11, "Medinan"],
  [64, "At-Taghaabun", "التَّغَابُنِ", "Mutual Disillusion", 18, "Medinan"],
  [65, "At-Talaaq", "الطَّلَاقِ", "Divorce", 12, "Medinan"],
  [66, "At-Tahrim", "التَّحۡرِيمِ", "The Prohibition", 12, "Medinan"],
  [67, "Al-Mulk", "المُلۡكِ", "The Sovereignty", 30, "Meccan"],
  [68, "Al-Qalam", "القَلَمِ", "The Pen", 52, "Meccan"],
  [69, "Al-Haaqqa", "الحَاقَّةِ", "The Reality", 52, "Meccan"],
  [70, "Al-Ma'aarij", "المَعَارِجِ", "The Ascending Stairways", 44, "Meccan"],
  [71, "Nooh", "نُوحٍ", "Noah", 28, "Meccan"],
  [72, "Al-Jinn", "الجِنِّ", "The Jinn", 28, "Meccan"],
  [73, "Al-Muzzammil", "المُزَّمِّلِ", "The Enshrouded One", 20, "Meccan"],
  [74, "Al-Muddaththir", "المُدَّثِّرِ", "The Cloaked One", 56, "Meccan"],
  [75, "Al-Qiyaama", "القِيَامَةِ", "The Resurrection", 40, "Meccan"],
  [76, "Al-Insaan", "الإِنسَانِ", "The Man", 31, "Medinan"],
  [77, "Al-Mursalaat", "المُرۡسَلَاتِ", "The Emissaries", 50, "Meccan"],
  [78, "An-Naba", "النَّبَإِ", "The Tidings", 40, "Meccan"],
  [79, "An-Naazi'aat", "النَّازِعَاتِ", "Those who drag forth", 46, "Meccan"],
  [80, "Abasa", "عَبَسَ", "He Frowned", 42, "Meccan"],
  [81, "At-Takwir", "التَّكۡوِيرِ", "The Overthrowing", 29, "Meccan"],
  [82, "Al-Infitaar", "الانفِطَارِ", "The Cleaving", 19, "Meccan"],
  [83, "Al-Mutaffifin", "المُطَفِّفِينَ", "Defrauding", 36, "Meccan"],
  [84, "Al-Inshiqaaq", "الانشِقَاقِ", "The Sundering", 25, "Meccan"],
  [85, "Al-Burooj", "البُرُوجِ", "The Mansions of the Stars", 22, "Meccan"],
  [86, "At-Taariq", "الطَّارِقِ", "The Nightcomer", 17, "Meccan"],
  [87, "Al-A'laa", "الأَعۡلَىٰ", "The Most High", 19, "Meccan"],
  [88, "Al-Ghaashiya", "الغَاشِيَةِ", "The Overwhelming", 26, "Meccan"],
  [89, "Al-Fajr", "الفَجۡرِ", "The Dawn", 30, "Meccan"],
  [90, "Al-Balad", "البَلَدِ", "The City", 20, "Meccan"],
  [91, "Ash-Shams", "الشَّمۡسِ", "The Sun", 15, "Meccan"],
  [92, "Al-Layl", "اللَّيۡلِ", "The Night", 21, "Meccan"],
  [93, "Ad-Dhuhaa", "الضُّحَىٰ", "The Morning Hours", 11, "Meccan"],
  [94, "Ash-Sharh", "الشَّرۡحِ", "The Relief", 8, "Meccan"],
  [95, "At-Tin", "التِّينِ", "The Fig", 8, "Meccan"],
  [96, "Al-Alaq", "العَلَقِ", "The Clot", 19, "Meccan"],
  [97, "Al-Qadr", "القَدۡرِ", "The Power", 5, "Meccan"],
  [98, "Al-Bayyina", "البَيِّنَةِ", "The Clear Proof", 8, "Medinan"],
  [99, "Az-Zalzala", "الزَّلۡزَلَةِ", "The Earthquake", 8, "Medinan"],
  [100, "Al-Aadiyaat", "العَادِيَاتِ", "The Courser", 11, "Meccan"],
  [101, "Al-Qaari'a", "القَارِعَةِ", "The Calamity", 11, "Meccan"],
  [102, "At-Takaathur", "التَّكَاثُرِ", "The Rivalry in World Increase", 8, "Meccan"],
  [103, "Al-Asr", "العَصۡرِ", "The Declining Day", 3, "Meccan"],
  [104, "Al-Humaza", "الهُمَزَةِ", "The Traducer", 9, "Meccan"],
  [105, "Al-Fil", "الفِيلِ", "The Elephant", 5, "Meccan"],
  [106, "Quraysh", "قُرَيۡشٍ", "Quraysh", 4, "Meccan"],
  [107, "Al-Maa'un", "المَاعُونِ", "The Small Kindnesses", 7, "Meccan"],
  [108, "Al-Kawthar", "الكَوۡثَرِ", "The Abundance", 3, "Meccan"],
  [109, "Al-Kaafiroon", "الكَافِرُونَ", "The Disbelievers", 6, "Meccan"],
  [110, "An-Nasr", "النَّصۡرِ", "The Divine Support", 3, "Medinan"],
  [111, "Al-Masad", "المَسَدِ", "The Palm Fibre", 5, "Meccan"],
  [112, "Al-Ikhlaas", "الإِخۡلَاصِ", "The Sincerity", 4, "Meccan"],
  [113, "Al-Falaq", "الفَلَقِ", "The Daybreak", 5, "Meccan"],
  [114, "An-Naas", "النَّاسِ", "Mankind", 6, "Meccan"],
];

// ── Parse a pipe-delimited file into Map<surahNum, Map<ayahNum, text>> ───────
function parseFile(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const map = new Map();
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const firstPipe = trimmed.indexOf("|");
    const secondPipe = trimmed.indexOf("|", firstPipe + 1);
    if (firstPipe === -1 || secondPipe === -1) continue;
    const s = parseInt(trimmed.slice(0, firstPipe), 10);
    const a = parseInt(trimmed.slice(firstPipe + 1, secondPipe), 10);
    const text = trimmed.slice(secondPipe + 1).trim();
    if (!map.has(s)) map.set(s, new Map());
    map.get(s).set(a, text);
  }
  return map;
}

const arabicMap = parseFile(path.join(ROOT, "quran-simple.txt"));
const englishMap = parseFile(path.join(ROOT, "en.ahmedali.txt"));
const urduMap = parseFile(path.join(ROOT, "ur.maududi.txt"));

// ── Build the full data structure ────────────────────────────────────────────
const surahs = SURAH_META.map(([id, name, arabicName, translation, ayahCount, revelation]) => {
  const arabicSurah = arabicMap.get(id) || new Map();
  const englishSurah = englishMap.get(id) || new Map();
  const urduSurah = urduMap.get(id) || new Map();

  const ayahs = [];
  for (let i = 1; i <= ayahCount; i++) {
    ayahs.push({
      number: i,
      arabic: arabicSurah.get(i) || "",
      english: englishSurah.get(i) || "",
      urdu: urduSurah.get(i) || "",
    });
  }

  return { id, name, arabicName, translation, ayahCount, revelation, ayahs };
});

// Verify total ayah count
const totalAyahs = surahs.reduce((sum, s) => sum + s.ayahs.length, 0);
console.log(`Total surahs: ${surahs.length}`);
console.log(`Total ayahs: ${totalAyahs}`);

// Count populated vs missing
let missingArabic = 0, missingEnglish = 0, missingUrdu = 0;
for (const s of surahs) {
  for (const a of s.ayahs) {
    if (!a.arabic) missingArabic++;
    if (!a.english) missingEnglish++;
    if (!a.urdu) missingUrdu++;
  }
}
console.log(`Missing Arabic: ${missingArabic}, English: ${missingEnglish}, Urdu: ${missingUrdu}`);

// ── Emit TypeScript file ─────────────────────────────────────────────────────
function esc(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const lines = [
  "// AUTO-GENERATED — do not edit by hand.",
  "// Source: quran-simple.txt (Arabic) · en.ahmedali.txt (English) · ur.maududi.txt (Urdu)",
  "",
  "export type Ayah = {",
  "  number: number;",
  "  arabic: string;",
  "  english: string;",
  "  urdu: string;",
  "};",
  "",
  "export type Surah = {",
  "  id: number;",
  "  name: string;",
  "  arabicName: string;",
  "  translation: string;",
  "  ayahCount: number;",
  "  revelation: string;",
  "  ayahs: Ayah[];",
  "};",
  "",
  "export const surahData: Surah[] = [",
];

for (const s of surahs) {
  lines.push("  {");
  lines.push(`    id: ${s.id},`);
  lines.push(`    name: ${JSON.stringify(s.name)},`);
  lines.push(`    arabicName: ${JSON.stringify(s.arabicName)},`);
  lines.push(`    translation: ${JSON.stringify(s.translation)},`);
  lines.push(`    ayahCount: ${s.ayahCount},`);
  lines.push(`    revelation: ${JSON.stringify(s.revelation)},`);
  lines.push("    ayahs: [");
  for (const a of s.ayahs) {
    lines.push("      {");
    lines.push(`        number: ${a.number},`);
    lines.push(`        arabic: ${JSON.stringify(a.arabic)},`);
    lines.push(`        english: ${JSON.stringify(a.english)},`);
    lines.push(`        urdu: ${JSON.stringify(a.urdu)},`);
    lines.push("      },");
  }
  lines.push("    ],");
  lines.push("  },");
}

lines.push("];");
lines.push("");

const outPath = path.join(ROOT, "src", "data", "surahs.ts");
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`\nWritten to ${outPath}`);
