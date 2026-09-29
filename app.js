// ===================== NOOR. WEB APP =====================

const SURAH_LIST = [
  { n:1, ar:"الفاتحة", en:"Al-Fatihah", ms:"Al-Fatihah", ayahs:7, type:"Meccan" },
  { n:2, ar:"البقرة", en:"Al-Baqarah", ms:"Al-Baqarah", ayahs:286, type:"Medinan" },
  { n:3, ar:"آل عمران", en:"Ali 'Imran", ms:"Ali Imran", ayahs:200, type:"Medinan" },
  { n:4, ar:"النساء", en:"An-Nisa", ms:"An-Nisa", ayahs:176, type:"Medinan" },
  { n:5, ar:"المائدة", en:"Al-Ma'idah", ms:"Al-Maidah", ayahs:120, type:"Medinan" },
  { n:6, ar:"الأنعام", en:"Al-An'am", ms:"Al-An'am", ayahs:165, type:"Meccan" },
  { n:7, ar:"الأعراف", en:"Al-A'raf", ms:"Al-A'raf", ayahs:206, type:"Meccan" },
  { n:8, ar:"الأنفال", en:"Al-Anfal", ms:"Al-Anfal", ayahs:75, type:"Medinan" },
  { n:9, ar:"التوبة", en:"At-Tawbah", ms:"At-Tawbah", ayahs:129, type:"Medinan" },
  { n:10, ar:"يونس", en:"Yunus", ms:"Yunus", ayahs:109, type:"Meccan" },
  { n:11, ar:"هود", en:"Hud", ms:"Hud", ayahs:123, type:"Meccan" },
  { n:12, ar:"يوسف", en:"Yusuf", ms:"Yusuf", ayahs:111, type:"Meccan" },
  { n:13, ar:"الرعد", en:"Ar-Ra'd", ms:"Ar-Ra'd", ayahs:43, type:"Medinan" },
  { n:14, ar:"إبراهيم", en:"Ibrahim", ms:"Ibrahim", ayahs:52, type:"Meccan" },
  { n:15, ar:"الحجر", en:"Al-Hijr", ms:"Al-Hijr", ayahs:99, type:"Meccan" },
  { n:16, ar:"النحل", en:"An-Nahl", ms:"An-Nahl", ayahs:128, type:"Meccan" },
  { n:17, ar:"الإسراء", en:"Al-Isra", ms:"Al-Isra", ayahs:111, type:"Meccan" },
  { n:18, ar:"الكهف", en:"Al-Kahf", ms:"Al-Kahf", ayahs:110, type:"Meccan" },
  { n:19, ar:"مريم", en:"Maryam", ms:"Maryam", ayahs:98, type:"Meccan" },
  { n:20, ar:"طه", en:"Taha", ms:"Taha", ayahs:135, type:"Meccan" },
  { n:21, ar:"الأنبياء", en:"Al-Anbiya", ms:"Al-Anbiya", ayahs:112, type:"Meccan" },
  { n:22, ar:"الحج", en:"Al-Hajj", ms:"Al-Hajj", ayahs:78, type:"Medinan" },
  { n:23, ar:"المؤمنون", en:"Al-Mu'minun", ms:"Al-Mu'minun", ayahs:118, type:"Meccan" },
  { n:24, ar:"النور", en:"An-Nur", ms:"An-Nur", ayahs:64, type:"Medinan" },
  { n:25, ar:"الفرقان", en:"Al-Furqan", ms:"Al-Furqan", ayahs:77, type:"Meccan" },
  { n:26, ar:"الشعراء", en:"Ash-Shu'ara", ms:"Ash-Shu'ara", ayahs:227, type:"Meccan" },
  { n:27, ar:"النمل", en:"An-Naml", ms:"An-Naml", ayahs:93, type:"Meccan" },
  { n:28, ar:"القصص", en:"Al-Qasas", ms:"Al-Qasas", ayahs:88, type:"Meccan" },
  { n:29, ar:"العنكبوت", en:"Al-Ankabut", ms:"Al-Ankabut", ayahs:69, type:"Meccan" },
  { n:30, ar:"الروم", en:"Ar-Rum", ms:"Ar-Rum", ayahs:60, type:"Meccan" },
  { n:31, ar:"لقمان", en:"Luqman", ms:"Luqman", ayahs:34, type:"Meccan" },
  { n:32, ar:"السجدة", en:"As-Sajdah", ms:"As-Sajdah", ayahs:30, type:"Meccan" },
  { n:33, ar:"الأحزاب", en:"Al-Ahzab", ms:"Al-Ahzab", ayahs:73, type:"Medinan" },
  { n:34, ar:"سبإ", en:"Saba", ms:"Saba", ayahs:54, type:"Meccan" },
  { n:35, ar:"فاطر", en:"Fatir", ms:"Fatir", ayahs:45, type:"Meccan" },
  { n:36, ar:"يس", en:"Ya-Sin", ms:"Ya-Sin", ayahs:83, type:"Meccan" },
  { n:37, ar:"الصافات", en:"As-Saffat", ms:"As-Saffat", ayahs:182, type:"Meccan" },
  { n:38, ar:"ص", en:"Sad", ms:"Sad", ayahs:88, type:"Meccan" },
  { n:39, ar:"الزمر", en:"Az-Zumar", ms:"Az-Zumar", ayahs:75, type:"Meccan" },
  { n:40, ar:"غافر", en:"Ghafir", ms:"Ghafir", ayahs:85, type:"Meccan" },
  { n:41, ar:"فصلت", en:"Fussilat", ms:"Fussilat", ayahs:54, type:"Meccan" },
  { n:42, ar:"الشورى", en:"Ash-Shura", ms:"Ash-Shura", ayahs:53, type:"Meccan" },
  { n:43, ar:"الزخرف", en:"Az-Zukhruf", ms:"Az-Zukhruf", ayahs:89, type:"Meccan" },
  { n:44, ar:"الدخان", en:"Ad-Dukhan", ms:"Ad-Dukhan", ayahs:59, type:"Meccan" },
  { n:45, ar:"الجاثية", en:"Al-Jathiyah", ms:"Al-Jathiyah", ayahs:37, type:"Meccan" },
  { n:46, ar:"الأحقاف", en:"Al-Ahqaf", ms:"Al-Ahqaf", ayahs:35, type:"Meccan" },
  { n:47, ar:"محمد", en:"Muhammad", ms:"Muhammad", ayahs:38, type:"Medinan" },
  { n:48, ar:"الفتح", en:"Al-Fath", ms:"Al-Fath", ayahs:29, type:"Medinan" },
  { n:49, ar:"الحجرات", en:"Al-Hujurat", ms:"Al-Hujurat", ayahs:18, type:"Medinan" },
  { n:50, ar:"ق", en:"Qaf", ms:"Qaf", ayahs:45, type:"Meccan" },
  { n:51, ar:"الذاريات", en:"Adh-Dhariyat", ms:"Adh-Dhariyat", ayahs:60, type:"Meccan" },
  { n:52, ar:"الطور", en:"At-Tur", ms:"At-Tur", ayahs:49, type:"Meccan" },
  { n:53, ar:"النجم", en:"An-Najm", ms:"An-Najm", ayahs:62, type:"Meccan" },
  { n:54, ar:"القمر", en:"Al-Qamar", ms:"Al-Qamar", ayahs:55, type:"Meccan" },
  { n:55, ar:"الرحمن", en:"Ar-Rahman", ms:"Ar-Rahman", ayahs:78, type:"Medinan" },
  { n:56, ar:"الواقعة", en:"Al-Waqi'ah", ms:"Al-Waqi'ah", ayahs:96, type:"Meccan" },
  { n:57, ar:"الحديد", en:"Al-Hadid", ms:"Al-Hadid", ayahs:29, type:"Medinan" },
  { n:58, ar:"المجادلة", en:"Al-Mujadila", ms:"Al-Mujadila", ayahs:22, type:"Medinan" },
  { n:59, ar:"الحشر", en:"Al-Hashr", ms:"Al-Hashr", ayahs:24, type:"Medinan" },
  { n:60, ar:"الممتحنة", en:"Al-Mumtahanah", ms:"Al-Mumtahanah", ayahs:13, type:"Medinan" },
  { n:61, ar:"الصف", en:"As-Saff", ms:"As-Saff", ayahs:14, type:"Medinan" },
  { n:62, ar:"الجمعة", en:"Al-Jumu'ah", ms:"Al-Jumu'ah", ayahs:11, type:"Medinan" },
  { n:63, ar:"المنافقون", en:"Al-Munafiqun", ms:"Al-Munafiqun", ayahs:11, type:"Medinan" },
  { n:64, ar:"التغابن", en:"At-Taghabun", ms:"At-Taghabun", ayahs:18, type:"Medinan" },
  { n:65, ar:"الطلاق", en:"At-Talaq", ms:"At-Talaq", ayahs:12, type:"Medinan" },
  { n:66, ar:"التحريم", en:"At-Tahrim", ms:"At-Tahrim", ayahs:12, type:"Medinan" },
  { n:67, ar:"الملك", en:"Al-Mulk", ms:"Al-Mulk", ayahs:30, type:"Meccan" },
  { n:68, ar:"القلم", en:"Al-Qalam", ms:"Al-Qalam", ayahs:52, type:"Meccan" },
  { n:69, ar:"الحاقة", en:"Al-Haqqah", ms:"Al-Haqqah", ayahs:52, type:"Meccan" },
  { n:70, ar:"المعارج", en:"Al-Ma'arij", ms:"Al-Ma'arij", ayahs:44, type:"Meccan" },
  { n:71, ar:"نوح", en:"Nuh", ms:"Nuh", ayahs:28, type:"Meccan" },
  { n:72, ar:"الجن", en:"Al-Jinn", ms:"Al-Jinn", ayahs:28, type:"Meccan" },
  { n:73, ar:"المزمل", en:"Al-Muzzammil", ms:"Al-Muzzammil", ayahs:20, type:"Meccan" },
  { n:74, ar:"المدثر", en:"Al-Muddaththir", ms:"Al-Muddaththir", ayahs:56, type:"Meccan" },
  { n:75, ar:"القيامة", en:"Al-Qiyamah", ms:"Al-Qiyamah", ayahs:40, type:"Meccan" },
  { n:76, ar:"الإنسان", en:"Al-Insan", ms:"Al-Insan", ayahs:31, type:"Medinan" },
  { n:77, ar:"المرسلات", en:"Al-Mursalat", ms:"Al-Mursalat", ayahs:50, type:"Meccan" },
  { n:78, ar:"النبإ", en:"An-Naba", ms:"An-Naba", ayahs:40, type:"Meccan" },
  { n:79, ar:"النازعات", en:"An-Nazi'at", ms:"An-Nazi'at", ayahs:46, type:"Meccan" },
  { n:80, ar:"عبس", en:"Abasa", ms:"Abasa", ayahs:42, type:"Meccan" },
  { n:81, ar:"التكوير", en:"At-Takwir", ms:"At-Takwir", ayahs:29, type:"Meccan" },
  { n:82, ar:"الإنفطار", en:"Al-Infitar", ms:"Al-Infitar", ayahs:19, type:"Meccan" },
  { n:83, ar:"المطففين", en:"Al-Mutaffifin", ms:"Al-Mutaffifin", ayahs:36, type:"Meccan" },
  { n:84, ar:"الإنشقاق", en:"Al-Inshiqaq", ms:"Al-Inshiqaq", ayahs:25, type:"Meccan" },
  { n:85, ar:"البروج", en:"Al-Buruj", ms:"Al-Buruj", ayahs:22, type:"Meccan" },
  { n:86, ar:"الطارق", en:"At-Tariq", ms:"At-Tariq", ayahs:17, type:"Meccan" },
  { n:87, ar:"الأعلى", en:"Al-A'la", ms:"Al-A'la", ayahs:19, type:"Meccan" },
  { n:88, ar:"الغاشية", en:"Al-Ghashiyah", ms:"Al-Ghashiyah", ayahs:26, type:"Meccan" },
  { n:89, ar:"الفجر", en:"Al-Fajr", ms:"Al-Fajr", ayahs:30, type:"Meccan" },
  { n:90, ar:"البلد", en:"Al-Balad", ms:"Al-Balad", ayahs:20, type:"Meccan" },
  { n:91, ar:"الشمس", en:"Ash-Shams", ms:"Ash-Shams", ayahs:15, type:"Meccan" },
  { n:92, ar:"الليل", en:"Al-Layl", ms:"Al-Layl", ayahs:21, type:"Meccan" },
  { n:93, ar:"الضحى", en:"Ad-Duhaa", ms:"Ad-Duhaa", ayahs:11, type:"Meccan" },
  { n:94, ar:"الشرح", en:"Ash-Sharh", ms:"Ash-Sharh", ayahs:8, type:"Meccan" },
  { n:95, ar:"التين", en:"At-Tin", ms:"At-Tin", ayahs:8, type:"Meccan" },
  { n:96, ar:"العلق", en:"Al-Alaq", ms:"Al-Alaq", ayahs:19, type:"Meccan" },
  { n:97, ar:"القدر", en:"Al-Qadr", ms:"Al-Qadr", ayahs:5, type:"Meccan" },
  { n:98, ar:"البينة", en:"Al-Bayyinah", ms:"Al-Bayyinah", ayahs:8, type:"Medinan" },
  { n:99, ar:"الزلزلة", en:"Az-Zalzalah", ms:"Az-Zalzalah", ayahs:8, type:"Medinan" },
  { n:100, ar:"العاديات", en:"Al-Adiyat", ms:"Al-Adiyat", ayahs:11, type:"Meccan" },
  { n:101, ar:"القارعة", en:"Al-Qari'ah", ms:"Al-Qari'ah", ayahs:11, type:"Meccan" },
  { n:102, ar:"التكاثر", en:"At-Takathur", ms:"At-Takathur", ayahs:8, type:"Meccan" },
  { n:103, ar:"العصر", en:"Al-Asr", ms:"Al-Asr", ayahs:3, type:"Meccan" },
  { n:104, ar:"الهمزة", en:"Al-Humazah", ms:"Al-Humazah", ayahs:9, type:"Meccan" },
  { n:105, ar:"الفيل", en:"Al-Fil", ms:"Al-Fil", ayahs:5, type:"Meccan" },
  { n:106, ar:"قريش", en:"Quraysh", ms:"Quraysh", ayahs:4, type:"Meccan" },
  { n:107, ar:"الماعون", en:"Al-Ma'un", ms:"Al-Ma'un", ayahs:7, type:"Meccan" },
  { n:108, ar:"الكوثر", en:"Al-Kawthar", ms:"Al-Kawthar", ayahs:3, type:"Meccan" },
  { n:109, ar:"الكافرون", en:"Al-Kafirun", ms:"Al-Kafirun", ayahs:6, type:"Meccan" },
  { n:110, ar:"النصر", en:"An-Nasr", ms:"An-Nasr", ayahs:3, type:"Medinan" },
  { n:111, ar:"المسد", en:"Al-Masad", ms:"Al-Masad", ayahs:5, type:"Meccan" },
  { n:112, ar:"الإخلاص", en:"Al-Ikhlas", ms:"Al-Ikhlas", ayahs:4, type:"Meccan" },
  { n:113, ar:"الفلق", en:"Al-Falaq", ms:"Al-Falaq", ayahs:5, type:"Meccan" },
  { n:114, ar:"الناس", en:"An-Nas", ms:"An-Nas", ayahs:6, type:"Meccan" }
];

const I18N = {
  en: {
    quran: "Quran", qibla: "Qiblah", prayer: "Prayer Times", home: "Home", settings: "Settings",
    language: "Language", calcMethod: "Calculation Method"
  },
  ms: {
    quran: "Al-Quran", qibla: "Kiblat", prayer: "Waktu Solat", home: "Laman Utama", settings: "Tetapan",
    language: "Bahasa", calcMethod: "Kaedah Pengiraan"
  }
};

let lang = localStorage.getItem('noor_lang') || 'en';
let calcMethod = localStorage.getItem('noor_method') || 'MWL';
let userLat = null;
let userLng = null;
let qiblaAngle = 0;
let currentHeading = 0;
let showTranslation = true;

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('noor_onboarded')) {
    showApp();
  } else {
    startOnboarding();
  }
  setupNavigation();
  setupSettings();
});

function startOnboarding() {
  const fill = document.getElementById('progressFill');
  let p = 0;

  const interval = setInterval(() => {
    p += 5;
    if (fill) fill.style.width = p + '%';

    if (p >= 100) {
      clearInterval(interval);

      // Safety timeout - force move forward even if something fails
      setTimeout(() => {
        const splash = document.getElementById('splash');
        const terms = document.getElementById('terms');

        if (splash) splash.classList.remove('active');
        if (terms) terms.classList.add('active');
      }, 300);
    }
  }, 30);

  // Extra safety: if still stuck after 4 seconds, force go to main app
  setTimeout(() => {
    if (document.getElementById('onboarding').classList.contains('active')) {
      localStorage.setItem('noor_onboarded', '1');
      showApp();
    }
  }, 4000);

  document.getElementById('acceptTerms').onclick = () => {
    document.getElementById('terms').classList.remove('active');
    document.getElementById('language').classList.add('active');
  };

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      lang = btn.dataset.lang;
      document.getElementById('confirmLang').disabled = false;
    };
  });

  document.getElementById('confirmLang').onclick = () => {
    localStorage.setItem('noor_lang', lang);
    localStorage.setItem('noor_onboarded', '1');
    applyLanguage();
    showApp();
  };
}

function showApp() {
  document.getElementById('onboarding').classList.remove('active');
  document.getElementById('app').classList.add('active');
  applyLanguage();
  updateDates();
  loadDailyAyah();
  requestLocation();
  renderSurahList();
  renderJuzList();
}

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  document.getElementById('settingsLang').value = lang;
  document.getElementById('calcMethod').value = calcMethod;
}

function updateDates() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('gregorianDate').textContent = now.toLocaleDateString(lang === 'ms' ? 'ms-MY' : 'en-US', options);

  const hijri = gregorianToHijri(now);
  document.getElementById('hijriDate').textContent = `${hijri.day} ${hijri.monthName} ${hijri.year} AH`;
  document.getElementById('prayerDate').textContent = document.getElementById('gregorianDate').textContent + ' • ' + document.getElementById('hijriDate').textContent;
}

function gregorianToHijri(date) {
  const gYear = date.getFullYear();
  const gMonth = date.getMonth() + 1;
  const gDay = date.getDate();
  let jd = Math.floor((1461 * (gYear + 4800 + Math.floor((gMonth - 14) / 12))) / 4) +
           Math.floor((367 * (gMonth - 2 - 12 * Math.floor((gMonth - 14) / 12))) / 12) -
           Math.floor((3 * Math.floor((gYear + 4900 + Math.floor((gMonth - 14) / 12)) / 100)) / 4) + gDay - 32075;
  let l = jd - 1948440 + 10632;
  let n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  let j = Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) + Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l = l - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  let m = Math.floor((24 * l) / 709);
  let d = l - Math.floor((709 * m) / 24);
  let y = 30 * n + j - 30;
  const months = lang === 'ms'
    ? ["Muharram","Safar","Rabiulawal","Rabiulakhir","Jamadilawal","Jamadilakhir","Rejab","Syaaban","Ramadan","Syawal","Zulkaedah","Zulhijjah"]
    : ["Muharram","Safar","Rabi' al-Awwal","Rabi' al-Thani","Jumada al-Ula","Jumada al-Akhirah","Rajab","Sha'ban","Ramadan","Shawwal","Dhul Qi'dah","Dhul Hijjah"];
  return { day: d, month: m, year: y, monthName: months[m - 1] || months[0] };
}

async function loadDailyAyah() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const samples = [
    { ar: "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ", en: "And whatever you put forward for yourselves of good, you will find it with Allah.", ref: "Al-Baqarah 2:110" },
    { ar: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", en: "Indeed, with hardship comes ease.", ref: "Ash-Sharh 94:6" },
    { ar: "فَاذْكُرُونِي أَذْكُرْكُمْ", en: "So remember Me; I will remember you.", ref: "Al-Baqarah 2:152" },
    { ar: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", en: "And He is with you wherever you are.", ref: "Al-Hadid 57:4" }
  ];
  const s = samples[dayOfYear % samples.length];
  document.getElementById('dailyAyahArabic').textContent = s.ar;
  document.getElementById('dailyAyahTranslation').textContent = s.en;
  document.getElementById('dailyAyahRef').textContent = "— " + s.ref;
}

function requestLocation() {
  if (!navigator.geolocation) {
    document.getElementById('prayerLocation').textContent = "Location not supported";
    userLat = 3.1390;
    userLng = 101.6869;
    calculatePrayerTimes();
    calculateQibla();
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      document.getElementById('prayerLocation').textContent = `${userLat.toFixed(2)}°, ${userLng.toFixed(2)}°`;
      calculatePrayerTimes();
      calculateQibla();
    },
    err => {
      document.getElementById('prayerLocation').textContent = "Using default location (KL)";
      userLat = 3.1390;
      userLng = 101.6869;
      calculatePrayerTimes();
      calculateQibla();
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function calculatePrayerTimes() {
  const list = document.getElementById('prayerList');

  if (!userLat) {
    list.innerHTML = '<p class="muted" style="padding:20px;text-align:center">Waiting for location...</p>';
    return;
  }

  // Check if adhan library is available
  if (typeof adhan === 'undefined') {
    list.innerHTML = '<p class="muted" style="padding:20px;text-align:center">Prayer library failed to load.<br>Please refresh the page.</p>';
    return;
  }

  try {
    const coordinates = new adhan.Coordinates(userLat, userLng);
    let params = adhan.CalculationMethod.MuslimWorldLeague();

    if (calcMethod === 'ISNA') params = adhan.CalculationMethod.NorthAmerica();
    if (calcMethod === 'Egypt') params = adhan.CalculationMethod.Egyptian();
    if (calcMethod === 'Makkah') params = adhan.CalculationMethod.UmmAlQura();
    if (calcMethod === 'Karachi') params = adhan.CalculationMethod.Karachi();

    const date = new Date();
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

    const names = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    const times = [
      prayerTimes.fajr,
      prayerTimes.sunrise,
      prayerTimes.dhuhr,
      prayerTimes.asr,
      prayerTimes.maghrib,
      prayerTimes.isha
    ];

    const now = new Date();
    let nextIdx = -1;

    for (let i = 0; i < times.length; i++) {
      if (times[i] > now) {
        nextIdx = i;
        break;
      }
    }
    if (nextIdx === -1) nextIdx = 0; // next day Fajr

    // Update Home screen
    document.getElementById('nextPrayerName').textContent = names[nextIdx];
    document.getElementById('nextPrayerTime').textContent = formatTime(times[nextIdx]);

    let diff = times[nextIdx] - now;
    if (diff < 0) diff += 24 * 60 * 60 * 1000;

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    document.getElementById('countdown').textContent = `in ${h}h ${m}m`;

    // Update Prayer Times page
    list.innerHTML = '';
    names.forEach((name, i) => {
      const row = document.createElement('div');
      row.className = 'prayer-row' + (i === nextIdx ? ' next' : '');
      row.innerHTML = `<span class="prayer-name">${name}</span><span>${formatTime(times[i])}</span>`;
      list.appendChild(row);
    });

  } catch (error) {
    console.error("Prayer times error:", error);
    list.innerHTML = '<p class="muted" style="padding:20px;text-align:center">Error calculating prayer times.<br>Please refresh.</p>';
  }
}
  const coordinates = new adhan.Coordinates(userLat, userLng);
  let params = adhan.CalculationMethod.MuslimWorldLeague();

  if (calcMethod === 'ISNA') params = adhan.CalculationMethod.NorthAmerica();
  if (calcMethod === 'Egypt') params = adhan.CalculationMethod.Egyptian();
  if (calcMethod === 'Makkah') params = adhan.CalculationMethod.UmmAlQura();
  if (calcMethod === 'Karachi') params = adhan.CalculationMethod.Karachi();

  const date = new Date();
  const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

  const names = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const times = [
    prayerTimes.fajr,
    prayerTimes.sunrise,
    prayerTimes.dhuhr,
    prayerTimes.asr,
    prayerTimes.maghrib,
    prayerTimes.isha
  ];

  const now = new Date();
  let nextIdx = -1;

  for (let i = 0; i < times.length; i++) {
    if (times[i] > now) {
      nextIdx = i;
      break;
    }
  }
  if (nextIdx === -1) nextIdx = 0;

  document.getElementById('nextPrayerName').textContent = names[nextIdx];
  document.getElementById('nextPrayerTime').textContent = formatTime(times[nextIdx]);

  let diff = times[nextIdx] - now;
  if (diff < 0) diff += 24 * 60 * 60 * 1000;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  document.getElementById('countdown').textContent = `in ${h}h ${m}m`;

  const list = document.getElementById('prayerList');
  list.innerHTML = '';
  names.forEach((name, i) => {
    const row = document.createElement('div');
    row.className = 'prayer-row' + (i === nextIdx ? ' next' : '');
    row.innerHTML = `<span class="prayer-name">${name}</span><span>${formatTime(times[i])}</span>`;
    list.appendChild(row);
  });
}

function formatTime(d) {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function calculateQibla() {
  if (!userLat) return;
  const kaabaLat = 21.4225;
  const kaabaLng = 39.8262;
  qiblaAngle = computeQibla(userLat, userLng, kaabaLat, kaabaLng);
  document.getElementById('qiblaDegree').textContent = Math.round(qiblaAngle) + '°';
  document.getElementById('qiblaSub').textContent = Math.round(qiblaAngle) + '° from North';
}

function computeQibla(lat, lng, kLat, kLng) {
  const φ1 = lat * Math.PI / 180;
  const φ2 = kLat * Math.PI / 180;
  const Δλ = (kLng - lng) * Math.PI / 180;
  const y = Math.sin(Δλ);
  const x = Math.cos(φ1) * Math.tan(φ2) - Math.sin(φ1) * Math.cos(Δλ);
  let θ = Math.atan2(y, x) * 180 / Math.PI;
  return (θ + 360) % 360;
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (e) => {
    let heading = e.alpha;
    if (e.webkitCompassHeading !== undefined) {
      heading = e.webkitCompassHeading;
    } else if (heading !== null) {
      heading = 360 - heading;
    }
    if (heading !== null && !isNaN(heading)) {
      currentHeading = heading;
      updateCompass();
    }
  }, true);
}

function updateCompass() {
  const needle = document.getElementById('needle');
  if (!needle) return;
  const rotation = qiblaAngle - currentHeading;
  needle.style.transform = `translate(-50%, -100%) rotate(${rotation}deg)`;
}

function renderSurahList() {
  const list = document.getElementById('surahList');
  list.innerHTML = '';
  SURAH_LIST.forEach(s => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="surah-num">${s.n}</div>
      <div class="surah-info">
        <div class="surah-ar">${s.ar}</div>
        <div class="surah-en">${lang === 'ms' ? s.ms : s.en}</div>
      </div>
      <div class="surah-meta">${s.type} · ${s.ayahs}</div>
    `;
    item.onclick = () => openSurah(s.n);
    list.appendChild(item);
  });
}

function renderJuzList() {
  const list = document.getElementById('juzList');
  list.innerHTML = '';

  const juzStart = [
    1, 2, 2, 3, 4, 4, 5, 6, 7, 8,
    9, 11, 12, 15, 17, 18, 21, 23, 25, 27,
    29, 33, 36, 39, 41, 46, 51, 58, 67, 78
  ];

  for (let i = 1; i <= 30; i++) {
    const startSurah = juzStart[i - 1];
    const surah = SURAH_LIST.find(s => s.n === startSurah);

    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="surah-num">${i}</div>
      <div class="surah-info">
        <div class="surah-ar">Juz ${i}</div>
        <div class="surah-en">Starts at ${surah ? (lang === 'ms' ? surah.ms : surah.en) : ''}</div>
      </div>
    `;
    item.onclick = () => openSurah(startSurah);
    list.appendChild(item);
  }
}

async function openSurah(num) {
  const currentSurah = SURAH_LIST.find(s => s.n === num);
  document.getElementById('readerSurahName').textContent = `${num}. ${currentSurah.ar}`;
  document.getElementById('readerSurahTrans').textContent = lang === 'ms' ? currentSurah.ms : currentSurah.en;

  const content = document.getElementById('readerContent');
  content.innerHTML = '<p class="muted" style="text-align:center;padding:40px">Loading...</p>';
  showPage('reader');

  try {
    const arRes = await fetch(`https://api.alquran.cloud/v1/surah/${num}`);
    const arData = await arRes.json();
    const enRes = await fetch(`https://api.alquran.cloud/v1/surah/${num}/en.sahih`);
    const enData = await enRes.json();

    let html = '';
    if (num !== 9 && num !== 1) {
      html += `
        <div class="bismillah">
          <div class="bismillah-ar">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
          <div class="bismillah-en">In the name of Allah, the Most Gracious, the Most Merciful.</div>
        </div>`;
    }

    arData.data.ayahs.forEach((ayah, idx) => {
      const translation = enData.data.ayahs[idx]?.text || '';
      html += `
        <div class="ayah-block">
          <div class="ayah-header">
            <div class="ayah-num">${ayah.numberInSurah}</div>
          </div>
          <div class="ayah-ar">${ayah.text}</div>
          <div class="ayah-en" style="${showTranslation ? '' : 'display:none'}">${translation}</div>
        </div>`;
    });

    content.innerHTML = html;
  } catch (e) {
    content.innerHTML = '<p class="muted" style="text-align:center;padding:40px">Could not load. Check connection.</p>';
  }
}

function setupNavigation() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => {
      showPage(el.dataset.page);
    });
  });

  document.getElementById('backFromReader').onclick = () => showPage('quran');

  document.querySelectorAll('.tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isSurah = tab.dataset.tab === 'surah';
      document.getElementById('surahList').classList.toggle('hidden', !isSurah);
      document.getElementById('juzList').classList.toggle('hidden', isSurah);
    };
  });

  document.getElementById('transToggle').onclick = () => {
    showTranslation = !showTranslation;
    document.getElementById('transToggle').textContent = showTranslation ? 'EN' : 'AR';
    document.querySelectorAll('.ayah-en').forEach(el => {
      el.style.display = showTranslation ? '' : 'none';
    });
  };

  // Smart Search
  const searchBtn = document.getElementById('quranSearchBtn');
  if (searchBtn) {
    searchBtn.onclick = () => {
      const query = prompt("Search Surah name or number:");
      if (!query) return;

      const q = query.toLowerCase().trim();

      // 1. Exact match (number or name)
      let found = SURAH_LIST.find(s => 
        s.n.toString() === q ||
        s.en.toLowerCase() === q ||
        s.ms.toLowerCase() === q
      );

      // 2. Partial match
      if (!found) {
        found = SURAH_LIST.find(s => 
          s.en.toLowerCase().includes(q) ||
          s.ms.toLowerCase().includes(q) ||
          s.ar.includes(q)
        );
      }

      if (found) {
        openSurah(found.n);
        return;
      }

      // 3. Smart suggestion (closest match)
      let bestMatch = null;
      let highestScore = 0;

      SURAH_LIST.forEach(s => {
        const name = s.en.toLowerCase();
        let score = 0;

        // Simple similarity scoring
        if (name.startsWith(q)) score += 30;
        if (name.includes(q)) score += 20;

        // Check how many characters match in order
        let qi = 0;
        for (let i = 0; i < name.length && qi < q.length; i++) {
          if (name[i] === q[qi]) {
            score += 5;
            qi++;
          }
        }

        if (score > highestScore) {
          highestScore = score;
          bestMatch = s;
        }
      });

      if (bestMatch && highestScore > 10) {
        const confirmMsg = `Did you mean "${bestMatch.en}"?`;
        if (confirm(confirmMsg)) {
          openSurah(bestMatch.n);
        }
      } else {
        alert("Surah not found. Try typing the name or number more clearly.");
      }
    };
  }

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === id);
  });

  if (id === 'qibla') updateCompass();
  if (id === 'prayer') calculatePrayerTimes();
}

function setupSettings() {
  document.getElementById('settingsLang').onchange = (e) => {
    lang = e.target.value;
    localStorage.setItem('noor_lang', lang);
    applyLanguage();
    renderSurahList();
    renderJuzList();
    updateDates();
  };
  document.getElementById('calcMethod').onchange = (e) => {
    calcMethod = e.target.value;
    localStorage.setItem('noor_method', calcMethod);
    calculatePrayerTimes();
  };
}
