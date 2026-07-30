export type Ayah = { number: number; arabic: string; english: string };
export type Surah = { id: number; name: string; arabicName: string; translation: string; ayahCount: number; revelation: string; ayahs: Ayah[] };

export const surahData: Surah[] = [
  {
    "id": 1,
    "name": "Al-Faatiha",
    "arabicName": "ٱلْفَاتِحَةِ",
    "translation": "The Opening",
    "ayahCount": 7,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "﻿بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
        "english": "In the name of Allah, the Entirely Merciful, the Especially Merciful."
      },
      {
        "number": 2,
        "arabic": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
        "english": "[All] praise is [due] to Allah, Lord of the worlds -"
      },
      {
        "number": 3,
        "arabic": "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
        "english": "The Entirely Merciful, the Especially Merciful,"
      },
      {
        "number": 4,
        "arabic": "مَٰلِكِ يَوْمِ ٱلدِّينِ",
        "english": "Sovereign of the Day of Recompense."
      },
      {
        "number": 5,
        "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "english": "It is You we worship and You we ask for help."
      },
      {
        "number": 6,
        "arabic": "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
        "english": "Guide us to the straight path -"
      },
      {
        "number": 7,
        "arabic": "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
        "english": "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray."
      }
    ]
  },
  {
    "id": 2,
    "name": "Al-Baqara",
    "arabicName": "البَقَرَةِ",
    "translation": "The Cow",
    "ayahCount": 286,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 3,
    "name": "Aal-i-Imraan",
    "arabicName": "آلِ عِمۡرَانَ",
    "translation": "The Family of Imraan",
    "ayahCount": 200,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 4,
    "name": "An-Nisaa",
    "arabicName": "النِّسَاءِ",
    "translation": "The Women",
    "ayahCount": 176,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 5,
    "name": "Al-Maaida",
    "arabicName": "المَائـِدَةِ",
    "translation": "The Table",
    "ayahCount": 120,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 6,
    "name": "Al-An'aam",
    "arabicName": "الأَنۡعَامِ",
    "translation": "The Cattle",
    "ayahCount": 165,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 7,
    "name": "Al-A'raaf",
    "arabicName": "الأَعۡرَافِ",
    "translation": "The Heights",
    "ayahCount": 206,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 8,
    "name": "Al-Anfaal",
    "arabicName": "الأَنفَالِ",
    "translation": "The Spoils of War",
    "ayahCount": 75,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 9,
    "name": "At-Tawba",
    "arabicName": "التَّوۡبَةِ",
    "translation": "The Repentance",
    "ayahCount": 129,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 10,
    "name": "Yunus",
    "arabicName": "يُونُسَ",
    "translation": "Jonas",
    "ayahCount": 109,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 11,
    "name": "Hud",
    "arabicName": "هُودٍ",
    "translation": "Hud",
    "ayahCount": 123,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 12,
    "name": "Yusuf",
    "arabicName": "يُوسُفَ",
    "translation": "Joseph",
    "ayahCount": 111,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 13,
    "name": "Ar-Ra'd",
    "arabicName": "الرَّعۡدِ",
    "translation": "The Thunder",
    "ayahCount": 43,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 14,
    "name": "Ibrahim",
    "arabicName": "إِبۡرَاهِيمَ",
    "translation": "Abraham",
    "ayahCount": 52,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 15,
    "name": "Al-Hijr",
    "arabicName": "الحِجۡرِ",
    "translation": "The Rock",
    "ayahCount": 99,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 16,
    "name": "An-Nahl",
    "arabicName": "النَّحۡلِ",
    "translation": "The Bee",
    "ayahCount": 128,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 17,
    "name": "Al-Israa",
    "arabicName": "الإِسۡرَاءِ",
    "translation": "The Night Journey",
    "ayahCount": 111,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 18,
    "name": "Al-Kahf",
    "arabicName": "الكَهۡفِ",
    "translation": "The Cave",
    "ayahCount": 110,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 19,
    "name": "Maryam",
    "arabicName": "مَرۡيَمَ",
    "translation": "Mary",
    "ayahCount": 98,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 20,
    "name": "Taa-Haa",
    "arabicName": "طه",
    "translation": "Taa-Haa",
    "ayahCount": 135,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 21,
    "name": "Al-Anbiyaa",
    "arabicName": "الأَنبِيَاءِ",
    "translation": "The Prophets",
    "ayahCount": 112,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 22,
    "name": "Al-Hajj",
    "arabicName": "الحَجِّ",
    "translation": "The Pilgrimage",
    "ayahCount": 78,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 23,
    "name": "Al-Muminoon",
    "arabicName": "المُؤۡمِنُونَ",
    "translation": "The Believers",
    "ayahCount": 118,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 24,
    "name": "An-Noor",
    "arabicName": "النُّورِ",
    "translation": "The Light",
    "ayahCount": 64,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 25,
    "name": "Al-Furqaan",
    "arabicName": "الفُرۡقَانِ",
    "translation": "The Criterion",
    "ayahCount": 77,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 26,
    "name": "Ash-Shu'araa",
    "arabicName": "الشُّعَرَاءِ",
    "translation": "The Poets",
    "ayahCount": 227,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 27,
    "name": "An-Naml",
    "arabicName": "النَّمۡلِ",
    "translation": "The Ant",
    "ayahCount": 93,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 28,
    "name": "Al-Qasas",
    "arabicName": "القَصَصِ",
    "translation": "The Stories",
    "ayahCount": 88,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 29,
    "name": "Al-Ankaboot",
    "arabicName": "العَنكَبُوتِ",
    "translation": "The Spider",
    "ayahCount": 69,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 30,
    "name": "Ar-Room",
    "arabicName": "الرُّومِ",
    "translation": "The Romans",
    "ayahCount": 60,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 31,
    "name": "Luqman",
    "arabicName": "لُقۡمَانَ",
    "translation": "Luqman",
    "ayahCount": 34,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 32,
    "name": "As-Sajda",
    "arabicName": "السَّجۡدَةِ",
    "translation": "The Prostration",
    "ayahCount": 30,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 33,
    "name": "Al-Ahzaab",
    "arabicName": "الأَحۡزَابِ",
    "translation": "The Clans",
    "ayahCount": 73,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 34,
    "name": "Saba",
    "arabicName": "سَبَإٍ",
    "translation": "Sheba",
    "ayahCount": 54,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 35,
    "name": "Faatir",
    "arabicName": "فَاطِرٍ",
    "translation": "The Originator",
    "ayahCount": 45,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 36,
    "name": "Yaseen",
    "arabicName": "يسٓ",
    "translation": "Yaseen",
    "ayahCount": 83,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 37,
    "name": "As-Saaffaat",
    "arabicName": "الصَّافَّاتِ",
    "translation": "Those drawn up in Ranks",
    "ayahCount": 182,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 38,
    "name": "Saad",
    "arabicName": "صٓ",
    "translation": "The letter Saad",
    "ayahCount": 88,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 39,
    "name": "Az-Zumar",
    "arabicName": "الزُّمَرِ",
    "translation": "The Groups",
    "ayahCount": 75,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 40,
    "name": "Ghafir",
    "arabicName": "غَافِرٍ",
    "translation": "The Forgiver",
    "ayahCount": 85,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 41,
    "name": "Fussilat",
    "arabicName": "فُصِّلَتۡ",
    "translation": "Explained in detail",
    "ayahCount": 54,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 42,
    "name": "Ash-Shura",
    "arabicName": "الشُّورَىٰ",
    "translation": "Consultation",
    "ayahCount": 53,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 43,
    "name": "Az-Zukhruf",
    "arabicName": "الزُّخۡرُفِ",
    "translation": "Ornaments of gold",
    "ayahCount": 89,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 44,
    "name": "Ad-Dukhaan",
    "arabicName": "الدُّخَانِ",
    "translation": "The Smoke",
    "ayahCount": 59,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 45,
    "name": "Al-Jaathiya",
    "arabicName": "الجَاثِيَةِ",
    "translation": "Crouching",
    "ayahCount": 37,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 46,
    "name": "Al-Ahqaf",
    "arabicName": "الأَحۡقَافِ",
    "translation": "The Dunes",
    "ayahCount": 35,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 47,
    "name": "Muhammad",
    "arabicName": "مُحَمَّدٍ",
    "translation": "Muhammad",
    "ayahCount": 38,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 48,
    "name": "Al-Fath",
    "arabicName": "الفَتۡحِ",
    "translation": "The Victory",
    "ayahCount": 29,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 49,
    "name": "Al-Hujuraat",
    "arabicName": "الحُجُرَاتِ",
    "translation": "The Inner Apartments",
    "ayahCount": 18,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 50,
    "name": "Qaaf",
    "arabicName": "قٓ",
    "translation": "The letter Qaaf",
    "ayahCount": 45,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 51,
    "name": "Adh-Dhaariyat",
    "arabicName": "الذَّارِيَاتِ",
    "translation": "The Winnowing Winds",
    "ayahCount": 60,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 52,
    "name": "At-Tur",
    "arabicName": "الطُّورِ",
    "translation": "The Mount",
    "ayahCount": 49,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 53,
    "name": "An-Najm",
    "arabicName": "النَّجۡمِ",
    "translation": "The Star",
    "ayahCount": 62,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 54,
    "name": "Al-Qamar",
    "arabicName": "القَمَرِ",
    "translation": "The Moon",
    "ayahCount": 55,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 55,
    "name": "Ar-Rahmaan",
    "arabicName": "الرَّحۡمَٰن",
    "translation": "The Beneficent",
    "ayahCount": 78,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 56,
    "name": "Al-Waaqia",
    "arabicName": "الوَاقِعَةِ",
    "translation": "The Inevitable",
    "ayahCount": 96,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 57,
    "name": "Al-Hadid",
    "arabicName": "الحَدِيدِ",
    "translation": "The Iron",
    "ayahCount": 29,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 58,
    "name": "Al-Mujaadila",
    "arabicName": "المُجَادلَةِ",
    "translation": "The Pleading Woman",
    "ayahCount": 22,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 59,
    "name": "Al-Hashr",
    "arabicName": "الحَشۡرِ",
    "translation": "The Exile",
    "ayahCount": 24,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 60,
    "name": "Al-Mumtahana",
    "arabicName": "المُمۡتَحنَةِ",
    "translation": "She that is to be examined",
    "ayahCount": 13,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 61,
    "name": "As-Saff",
    "arabicName": "الصَّفِّ",
    "translation": "The Ranks",
    "ayahCount": 14,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 62,
    "name": "Al-Jumu'a",
    "arabicName": "الجُمُعَةِ",
    "translation": "Friday",
    "ayahCount": 11,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 63,
    "name": "Al-Munaafiqoon",
    "arabicName": "المُنَافِقُونَ",
    "translation": "The Hypocrites",
    "ayahCount": 11,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 64,
    "name": "At-Taghaabun",
    "arabicName": "التَّغَابُنِ",
    "translation": "Mutual Disillusion",
    "ayahCount": 18,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 65,
    "name": "At-Talaaq",
    "arabicName": "الطَّلَاقِ",
    "translation": "Divorce",
    "ayahCount": 12,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 66,
    "name": "At-Tahrim",
    "arabicName": "التَّحۡرِيمِ",
    "translation": "The Prohibition",
    "ayahCount": 12,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 67,
    "name": "Al-Mulk",
    "arabicName": "المُلۡكِ",
    "translation": "The Sovereignty",
    "ayahCount": 30,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 68,
    "name": "Al-Qalam",
    "arabicName": "القَلَمِ",
    "translation": "The Pen",
    "ayahCount": 52,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 69,
    "name": "Al-Haaqqa",
    "arabicName": "الحَاقَّةِ",
    "translation": "The Reality",
    "ayahCount": 52,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 70,
    "name": "Al-Ma'aarij",
    "arabicName": "المَعَارِجِ",
    "translation": "The Ascending Stairways",
    "ayahCount": 44,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 71,
    "name": "Nooh",
    "arabicName": "نُوحٍ",
    "translation": "Noah",
    "ayahCount": 28,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 72,
    "name": "Al-Jinn",
    "arabicName": "الجِنِّ",
    "translation": "The Jinn",
    "ayahCount": 28,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 73,
    "name": "Al-Muzzammil",
    "arabicName": "المُزَّمِّلِ",
    "translation": "The Enshrouded One",
    "ayahCount": 20,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 74,
    "name": "Al-Muddaththir",
    "arabicName": "المُدَّثِّرِ",
    "translation": "The Cloaked One",
    "ayahCount": 56,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 75,
    "name": "Al-Qiyaama",
    "arabicName": "القِيَامَةِ",
    "translation": "The Resurrection",
    "ayahCount": 40,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 76,
    "name": "Al-Insaan",
    "arabicName": "الإِنسَانِ",
    "translation": "Man",
    "ayahCount": 31,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 77,
    "name": "Al-Mursalaat",
    "arabicName": "المُرۡسَلَاتِ",
    "translation": "The Emissaries",
    "ayahCount": 50,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 78,
    "name": "An-Naba",
    "arabicName": "النَّبَإِ",
    "translation": "The Announcement",
    "ayahCount": 40,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 79,
    "name": "An-Naazi'aat",
    "arabicName": "النَّازِعَاتِ",
    "translation": "Those who drag forth",
    "ayahCount": 46,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 80,
    "name": "Abasa",
    "arabicName": "عَبَسَ",
    "translation": "He frowned",
    "ayahCount": 42,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 81,
    "name": "At-Takwir",
    "arabicName": "التَّكۡوِيرِ",
    "translation": "The Overthrowing",
    "ayahCount": 29,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 82,
    "name": "Al-Infitaar",
    "arabicName": "الانفِطَارِ",
    "translation": "The Cleaving",
    "ayahCount": 19,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 83,
    "name": "Al-Mutaffifin",
    "arabicName": "المُطَفِّفِينَ",
    "translation": "Defrauding",
    "ayahCount": 36,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 84,
    "name": "Al-Inshiqaaq",
    "arabicName": "الانشِقَاقِ",
    "translation": "The Splitting Open",
    "ayahCount": 25,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 85,
    "name": "Al-Burooj",
    "arabicName": "البُرُوجِ",
    "translation": "The Constellations",
    "ayahCount": 22,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 86,
    "name": "At-Taariq",
    "arabicName": "الطَّارِقِ",
    "translation": "The Morning Star",
    "ayahCount": 17,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 87,
    "name": "Al-A'laa",
    "arabicName": "الأَعۡلَىٰ",
    "translation": "The Most High",
    "ayahCount": 19,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 88,
    "name": "Al-Ghaashiya",
    "arabicName": "الغَاشِيَةِ",
    "translation": "The Overwhelming",
    "ayahCount": 26,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 89,
    "name": "Al-Fajr",
    "arabicName": "الفَجۡرِ",
    "translation": "The Dawn",
    "ayahCount": 30,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 90,
    "name": "Al-Balad",
    "arabicName": "البَلَدِ",
    "translation": "The City",
    "ayahCount": 20,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 91,
    "name": "Ash-Shams",
    "arabicName": "الشَّمۡسِ",
    "translation": "The Sun",
    "ayahCount": 15,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 92,
    "name": "Al-Lail",
    "arabicName": "اللَّيۡلِ",
    "translation": "The Night",
    "ayahCount": 21,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 93,
    "name": "Ad-Dhuhaa",
    "arabicName": "الضُّحَىٰ",
    "translation": "The Morning Hours",
    "ayahCount": 11,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 94,
    "name": "Ash-Sharh",
    "arabicName": "الشَّرۡحِ",
    "translation": "The Consolation",
    "ayahCount": 8,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      }
    ]
  },
  {
    "id": 95,
    "name": "At-Tin",
    "arabicName": "التِّينِ",
    "translation": "The Fig",
    "ayahCount": 8,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      }
    ]
  },
  {
    "id": 96,
    "name": "Al-Alaq",
    "arabicName": "العَلَقِ",
    "translation": "The Clot",
    "ayahCount": 19,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 97,
    "name": "Al-Qadr",
    "arabicName": "القَدۡرِ",
    "translation": "The Power, Fate",
    "ayahCount": 5,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      }
    ]
  },
  {
    "id": 98,
    "name": "Al-Bayyina",
    "arabicName": "البَيِّنَةِ",
    "translation": "The Evidence",
    "ayahCount": 8,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      }
    ]
  },
  {
    "id": 99,
    "name": "Az-Zalzala",
    "arabicName": "الزَّلۡزَلَةِ",
    "translation": "The Earthquake",
    "ayahCount": 8,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      }
    ]
  },
  {
    "id": 100,
    "name": "Al-Aadiyaat",
    "arabicName": "العَادِيَاتِ",
    "translation": "The Chargers",
    "ayahCount": 11,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 101,
    "name": "Al-Qaari'a",
    "arabicName": "القَارِعَةِ",
    "translation": "The Calamity",
    "ayahCount": 11,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      },
      {
        "number": 10,
        "arabic": "آية 10",
        "english": "Ayah 10"
      }
    ]
  },
  {
    "id": 102,
    "name": "At-Takaathur",
    "arabicName": "التَّكَاثُرِ",
    "translation": "Competition",
    "ayahCount": 8,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      }
    ]
  },
  {
    "id": 103,
    "name": "Al-Asr",
    "arabicName": "العَصۡرِ",
    "translation": "The Declining Day, Epoch",
    "ayahCount": 3,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      }
    ]
  },
  {
    "id": 104,
    "name": "Al-Humaza",
    "arabicName": "الهُمَزَةِ",
    "translation": "The Traducer",
    "ayahCount": 9,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      },
      {
        "number": 8,
        "arabic": "آية 8",
        "english": "Ayah 8"
      },
      {
        "number": 9,
        "arabic": "آية 9",
        "english": "Ayah 9"
      }
    ]
  },
  {
    "id": 105,
    "name": "Al-Fil",
    "arabicName": "الفِيلِ",
    "translation": "The Elephant",
    "ayahCount": 5,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      }
    ]
  },
  {
    "id": 106,
    "name": "Quraish",
    "arabicName": "قُرَيۡشٍ",
    "translation": "Quraysh",
    "ayahCount": 4,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      }
    ]
  },
  {
    "id": 107,
    "name": "Al-Maa'un",
    "arabicName": "المَاعُونِ",
    "translation": "Almsgiving",
    "ayahCount": 7,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      },
      {
        "number": 7,
        "arabic": "آية 7",
        "english": "Ayah 7"
      }
    ]
  },
  {
    "id": 108,
    "name": "Al-Kawthar",
    "arabicName": "الكَوۡثَرِ",
    "translation": "Abundance",
    "ayahCount": 3,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      }
    ]
  },
  {
    "id": 109,
    "name": "Al-Kaafiroon",
    "arabicName": "الكَافِرُونَ",
    "translation": "The Disbelievers",
    "ayahCount": 6,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      }
    ]
  },
  {
    "id": 110,
    "name": "An-Nasr",
    "arabicName": "النَّصۡرِ",
    "translation": "Divine Support",
    "ayahCount": 3,
    "revelation": "Medinan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      }
    ]
  },
  {
    "id": 111,
    "name": "Al-Masad",
    "arabicName": "المَسَدِ",
    "translation": "The Palm Fibre",
    "ayahCount": 5,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      }
    ]
  },
  {
    "id": 112,
    "name": "Al-Ikhlaas",
    "arabicName": "الإِخۡلَاصِ",
    "translation": "Sincerity",
    "ayahCount": 4,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      }
    ]
  },
  {
    "id": 113,
    "name": "Al-Falaq",
    "arabicName": "الفَلَقِ",
    "translation": "The Dawn",
    "ayahCount": 5,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      }
    ]
  },
  {
    "id": 114,
    "name": "An-Naas",
    "arabicName": "النَّاسِ",
    "translation": "Mankind",
    "ayahCount": 6,
    "revelation": "Meccan",
    "ayahs": [
      {
        "number": 1,
        "arabic": "آية 1",
        "english": "Ayah 1"
      },
      {
        "number": 2,
        "arabic": "آية 2",
        "english": "Ayah 2"
      },
      {
        "number": 3,
        "arabic": "آية 3",
        "english": "Ayah 3"
      },
      {
        "number": 4,
        "arabic": "آية 4",
        "english": "Ayah 4"
      },
      {
        "number": 5,
        "arabic": "آية 5",
        "english": "Ayah 5"
      },
      {
        "number": 6,
        "arabic": "آية 6",
        "english": "Ayah 6"
      }
    ]
  }
];
