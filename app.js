/* =========================================================
   NOOR. — app.js
   ========================================================= */

const SURAH_LIST = [
  [1, "Al-Fatihah"], [2, "Al-Baqarah"], [3, "Ali 'Imran"],
  [4, "An-Nisa"], [5, "Al-Ma'idah"], [6, "Al-An'am"],
  [7, "Al-A'raf"], [8, "Al-Anfal"], [9, "At-Tawbah"],
  [10, "Yunus"], [11, "Hud"], [12, "Yusuf"],
  [13, "Ar-Ra'd"], [14, "Ibrahim"], [15, "Al-Hijr"],
  [16, "An-Nahl"], [17, "Al-Isra"], [18, "Al-Kahf"],
  [19, "Maryam"], [20, "Ta-Ha"], [21, "Al-Anbya"],
  [22, "Al-Hajj"], [23, "Al-Mu'minun"], [24, "An-Nur"],
  [25, "Al-Furqan"], [26, "Ash-Shu'ara"], [27, "An-Naml"],
  [28, "Al-Qasas"], [29, "Al-Ankabut"], [30, "Ar-Rum"],
  [31, "Luqman"], [32, "As-Sajdah"], [33, "Al-Ahzab"],
  [34, "Saba"], [35, "Fatir"], [36, "Ya-Sin"],
  [37, "As-Saffat"], [38, "Sad"], [39, "Az-Zumar"],
  [40, "Ghafir"], [41, "Fussilat"], [42, "Ash-Shura"],
  [43, "Az-Zukhruf"], [44, "Ad-Dukhan"], [45, "Al-Jathiyah"],
  [46, "Al-Ahqaf"], [47, "Muhammad"], [48, "Al-Fath"],
  [49, "Al-Hujurat"], [50, "Qaf"], [51, "Adh-Dhariyat"],
  [52, "At-Tur"], [53, "An-Najm"], [54, "Al-Qamar"],
  [55, "Ar-Rahman"], [56, "Al-Waqi'ah"], [57, "Al-Hadid"],
  [58, "Al-Mujadilah"], [59, "Al-Hashr"], [60, "Al-Mumtahanah"],
  [61, "As-Saff"], [62, "Al-Jumu'ah"], [63, "Al-Munafiqun"],
  [64, "At-Taghabun"], [65, "At-Talaq"], [66, "At-Tahrim"],
  [67, "Al-Mulk"], [68, "Al-Qalam"], [69, "Al-Haqqah"],
  [70, "Al-Ma'arij"], [71, "Nuh"], [72, "Al-Jinn"],
  [73, "Al-Muzzammil"], [74, "Al-Muddaththir"], [75, "Al-Qiyamah"],
  [76, "Al-Insan"], [77, "Al-Mursalat"], [78, "An-Naba"],
  [79, "An-Nazi'at"], [80, "Abasa"], [81, "At-Takwir"],
  [82, "Al-Infitar"], [83, "Al-Mutaffifin"], [84, "Al-Inshiqaq"],
  [85, "Al-Buruj"], [86, "At-Tariq"], [87, "Al-A'la"],
  [88, "Al-Ghashiyah"], [89, "Al-Fajr"], [90, "Al-Balad"],
  [91, "Ash-Shams"], [92, "Al-Layl"], [93, "Ad-Duha"],
  [94, "Ash-Sharh"], [95, "At-Tin"], [96, "Al-Alaq"],
  [97, "Al-Qadr"], [98, "Al-Bayyinah"], [99, "Az-Zalzalah"],
  [100, "Al-Adiyat"], [101, "Al-Qari'ah"], [102, "At-Takathur"],
  [103, "Al-Asr"], [104, "Al-Humazah"], [105, "Al-Fil"],
  [106, "Quraysh"], [107, "Al-Ma'un"], [108, "Al-Kawthar"],
  [109, "Al-Kafirun"], [110, "An-Nasr"], [111, "Al-Masad"],
  [112, "Al-Ikhlas"], [113, "Al-Falaq"], [114, "An-Nas"]
];

const I18N = {
  en: {
    home: "Home",
    quran: "Quran",
    qibla: "Qibla",
    prayer: "Prayer",
    settings: "Settings",
    nextPrayer: "Next Prayer",
    today: "Today",
    translation: "Translation",
    language: "Language",
    calculation: "Calculation Method",
    search: "Search",
    noResults: "No results found"
  },

  ms: {
    home: "Utama",
    quran: "Al-Quran",
    qibla: "Kiblat",
    prayer: "Solat",
    settings: "Tetapan",
    nextPrayer: "Solat Seterusnya",
    today: "Hari Ini",
    translation: "Terjemahan",
    language: "Bahasa",
    calculation: "Kaedah Pengiraan",
    search: "Cari",
    noResults: "Tiada hasil ditemui"
  }
};


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let lang = localStorage.getItem("noor_lang") || "en";
let calcMethod = localStorage.getItem("noor_method") || "MWL";

let userLat = null;
let userLng = null;

let qiblaAngle = 0;
let currentHeading = 0;

let showTranslation = true;
let prayerTimer = null;


/* =========================================================
   STARTUP
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Noor.: DOM loaded");

  try {
    setupNavigation();
    setupSettings();

    if (localStorage.getItem("noor_onboarded")) {
      showApp();
    } else {
      startOnboarding();
    }

  } catch (error) {
    console.error("Noor startup error:", error);

    // Prevent permanent loading screen
    const splash = document.getElementById("splash");
    const onboarding = document.getElementById("onboarding");

    if (splash) splash.classList.remove("active");

    if (onboarding) {
      onboarding.classList.remove("active");
    }

    showApp();
  }
});


/* =========================================================
   ONBOARDING
   ========================================================= */

function startOnboarding() {
  const onboarding = document.getElementById("onboarding");
  const splash = document.getElementById("splash");
  const terms = document.getElementById("terms");
  const progressFill = document.getElementById("progressFill");

  if (!onboarding) {
    showApp();
    return;
  }

  onboarding.classList.add("active");

  if (splash) splash.classList.add("active");

  let progress = 0;

  const progressTimer = setInterval(() => {
    progress += 5;

    if (progressFill) {
      progressFill.style.width = progress + "%";
    }

    if (progress >= 100) {
      clearInterval(progressTimer);

      setTimeout(() => {
        if (splash) splash.classList.remove("active");
        if (terms) terms.classList.add("active");
      }, 300);
    }
  }, 30);

  const acceptTerms = document.getElementById("acceptTerms");

  if (acceptTerms) {
    acceptTerms.onclick = () => {
      if (terms) terms.classList.remove("active");

      const languageStep = document.getElementById("language");

      if (languageStep) {
        languageStep.classList.add("active");
      } else {
        finishOnboarding();
      }
    };
  }

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.onclick = () => {
      document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");

      if (button.dataset.lang) {
        lang = button.dataset.lang;
      }
    };
  });

  const confirmLang = document.getElementById("confirmLang");

  if (confirmLang) {
    confirmLang.onclick = () => {
      finishOnboarding();
    };
  }

  // Safety fallback
  setTimeout(() => {
    if (document.getElementById("onboarding")?.classList.contains("active")) {
      console.warn("Noor.: onboarding safety timeout");

      localStorage.setItem("noor_onboarded", "1");
      showApp();
    }
  }, 5000);
}


function finishOnboarding() {
  localStorage.setItem("noor_onboarded", "1");
  localStorage.setItem("noor_lang", lang);

  showApp();
}


/* =========================================================
   SHOW APP
   ========================================================= */

function showApp() {
  const onboarding = document.getElementById("onboarding");
  const app = document.getElementById("app");

  if (onboarding) {
    onboarding.classList.remove("active");
  }

  if (app) {
    app.classList.add("active");
  }

  try {
    applyLanguage();
    updateDates();
    loadDailyAyah();
    requestLocation();
    renderSurahList();
    renderJuzList();
  } catch (error) {
    console.error("Noor app initialization error:", error);
  }
}


/* =========================================================
   LANGUAGE
   ========================================================= */

function applyLanguage() {
  const strings = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (strings[key]) {
      element.textContent = strings[key];
    }
  });

  const settingsLang = document.getElementById("settingsLang");

  if (settingsLang) {
    settingsLang.value = lang;
  }

  const method = document.getElementById("calcMethod");

  if (method) {
    method.value = calcMethod;
  }
}


/* =========================================================
   DATES
   ========================================================= */

function updateDates() {
  const now = new Date();

  const dateElements = document.querySelectorAll("[data-date]");

  dateElements.forEach(element => {
    element.textContent = now.toLocaleDateString(
      lang === "ms" ? "ms-MY" : "en-SG",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );
  });

  const gregorian = document.getElementById("gregorianDate");

  if (gregorian) {
    gregorian.textContent = now.toLocaleDateString(
      lang === "ms" ? "ms-MY" : "en-SG",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );
  }
}


/* =========================================================
   DAILY AYAH
   ========================================================= */

async function loadDailyAyah() {
  const container = document.getElementById("dailyAyah");

  if (!container) return;

  try {
    const response = await fetch(
      "https://api.alquran.cloud/v1/ayah/1:1/en.asad"
    );

    if (!response.ok) {
      throw new Error("Ayah API request failed");
    }

    const data = await response.json();

    if (data?.data) {
      const text = data.data.text;

      container.innerHTML = `
        <div class="ayah-text">"${text}"</div>
        <div class="ayah-reference">
          — Quran ${data.data.surah.number}:${data.data.numberInSurah}
        </div>
      `;
    }

  } catch (error) {
    console.warn("Daily ayah unavailable:", error);

    container.innerHTML = `
      <div class="ayah-text">
        "Indeed, in the remembrance of Allah do hearts find rest."
      </div>
      <div class="ayah-reference">
        — Quran 13:28
      </div>
    `;
  }
}


/* =========================================================
   LOCATION
   ========================================================= */

function requestLocation() {
  if (!navigator.geolocation) {
    console.warn("Geolocation is not supported.");
    useFallbackLocation();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      userLat = position.coords.latitude;
      userLng = position.coords.longitude;

      console.log(
        "Noor location:",
        userLat,
        userLng
      );

      calculatePrayerTimes();
      calculateQibla();
    },

    error => {
      console.warn("Location unavailable:", error);
      useFallbackLocation();
    },

    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000
    }
  );
}


function useFallbackLocation() {
  // Singapore fallback
  userLat = 1.3521;
  userLng = 103.8198;

  console.log("Using Singapore fallback location.");

  calculatePrayerTimes();
  calculateQibla();
}


/* =========================================================
   PRAYER TIMES
   ========================================================= */

function calculatePrayerTimes() {
  if (userLat === null || userLng === null) {
    return;
  }

  if (typeof adhan === "undefined") {
    console.error("Adhan library is not loaded.");
    return;
  }

  try {
    const coordinates = new adhan.Coordinates(
      userLat,
      userLng
    );

    let params;

    switch (calcMethod) {
      case "ISNA":
        params = adhan.CalculationMethod.NorthAmerica();
        break;

      case "EGYPT":
        params = adhan.CalculationMethod.Egyptian();
        break;

      case "KARACHI":
        params = adhan.CalculationMethod.Karachi();
        break;

      case "MWL":
      default:
        params = adhan.CalculationMethod.MuslimWorldLeague();
        break;
    }

    params.madhab = adhan.Madhab.Shafi;

    const date = new Date();

    const prayerTimes = new adhan.PrayerTimes(
      coordinates,
      date,
      params
    );

    const prayers = {
      Fajr: prayerTimes.fajr,
      Sunrise: prayerTimes.sunrise,
      Dhuhr: prayerTimes.dhuhr,
      Asr: prayerTimes.asr,
      Maghrib: prayerTimes.maghrib,
      Isha: prayerTimes.isha
    };

    renderPrayerTimes(prayers);
    updateNextPrayer(prayers);

  } catch (error) {
    console.error("Prayer calculation error:", error);
  }
}


function renderPrayerTimes(prayers) {
  const prayerList = document.getElementById("prayerList");

  if (!prayerList) return;

  prayerList.innerHTML = "";

  Object.entries(prayers).forEach(([name, time]) => {
    if (!time) return;

    const row = document.createElement("div");

    row.className = "prayer-row";

    row.innerHTML = `
      <span>${name}</span>
      <strong>${formatTime(time)}</strong>
    `;

    prayerList.appendChild(row);
  });
}


/* =========================================================
   NEXT PRAYER
   ========================================================= */

function updateNextPrayer(prayers) {
  const now = new Date();

  const prayerEntries = Object.entries(prayers)
    .filter(([_, time]) => time instanceof Date)
    .sort((a, b) => a[1] - b[1]);

  let next = prayerEntries.find(
    ([_, time]) => time > now
  );

  if (!next) {
    next = prayerEntries[0];
  }

  if (!next) return;

  const [name, time] = next;

  const nameElement =
    document.getElementById("nextPrayerName");

  const timeElement =
    document.getElementById("nextPrayerTime");

  if (nameElement) {
    nameElement.textContent = name;
  }

  if (timeElement) {
    timeElement.textContent = formatTime(time);
  }

  startCountdown(time);
}


function startCountdown(target) {
  if (prayerTimer) {
    clearInterval(prayerTimer);
  }

  const countdown = document.getElementById("countdown");

  function update() {
    const diff = target - new Date();

    if (diff <= 0) {
      if (countdown) {
        countdown.textContent = "00:00:00";
      }

      clearInterval(prayerTimer);

      calculatePrayerTimes();
      return;
    }

    const hours = Math.floor(diff / 3600000);

    const minutes = Math.floor(
      (diff % 3600000) / 60000
    );

    const seconds = Math.floor(
      (diff % 60000) / 1000
    );

    if (countdown) {
      countdown.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
    }
  }

  update();

  prayerTimer = setInterval(update, 1000);
}


/* =========================================================
   TIME FORMAT
   ========================================================= */

function formatTime(date) {
  if (!(date instanceof Date)) {
    return "--:--";
  }

  return date.toLocaleTimeString(
    lang === "ms" ? "ms-MY" : "en-SG",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }
  );
}


/* =========================================================
   QIBLA
   ========================================================= */

function calculateQibla() {
  if (userLat === null || userLng === null) {
    return;
  }

  if (typeof adhan === "undefined") {
    return;
  }

  try {
    const coordinates = new adhan.Coordinates(
      userLat,
      userLng
    );

    qiblaAngle = adhan.Qibla(coordinates);

    updateCompass();

  } catch (error) {
    console.error("Qibla calculation error:", error);
  }
}


function computeQibla() {
  calculateQibla();
}


/* =========================================================
   DEVICE COMPASS
   ========================================================= */

window.addEventListener(
  "deviceorientationabsolute",
  handleOrientation
);

window.addEventListener(
  "deviceorientation",
  handleOrientation
);


function handleOrientation(event) {
  if (typeof event.alpha !== "number") {
    return;
  }

  currentHeading = event.alpha;

  updateCompass();
}


function updateCompass() {
  const needle = document.getElementById("needle");

  if (!needle) return;

  const rotation =
    qiblaAngle - currentHeading;

  needle.style.transform =
    `translate(-50%, -50%) rotate(${rotation}deg)`;
}


/* =========================================================
   QURAN — SURAH LIST
   ========================================================= */

function renderSurahList() {
  const list = document.getElementById("surahList");

  if (!list) return;

  list.innerHTML = "";

  SURAH_LIST.forEach(([number, name]) => {
    const item = document.createElement("button");

    item.className = "surah-item";

    item.innerHTML = `
      <span class="surah-number">${number}</span>
      <span class="surah-name">${name}</span>
    `;

    item.onclick = () => {
      openSurah(number, name);
    };

    list.appendChild(item);
  });
}


/* =========================================================
   JUZ LIST
   ========================================================= */

function renderJuzList() {
  const list = document.getElementById("juzList");

  if (!list) return;

  list.innerHTML = "";

  for (let i = 1; i <= 30; i++) {
    const item = document.createElement("button");

    item.className = "juz-item";

    item.innerHTML = `
      <span>Juz ${i}</span>
      <span>›</span>
    `;

    item.onclick = () => {
      console.log("Juz selected:", i);
    };

    list.appendChild(item);
  }
}


/* =========================================================
   OPEN SURAH
   ========================================================= */

async function openSurah(number, name) {
  const reader = document.getElementById("reader");

  if (!reader) return;

  reader.classList.add("active");

  const title =
    document.getElementById("readerTitle");

  const content =
    document.getElementById("readerContent");

  if (title) {
    title.textContent =
      `${number}. ${name}`;
  }

  if (!content) return;

  content.innerHTML = `
    <div class="reader-loading">
      Loading...
    </div>
  `;

  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${number}/editions/quran-uthmani,en.asad`
    );

    if (!response.ok) {
      throw new Error("Quran request failed");
    }

    const data = await response.json();

    const editions = data.data || [];

    const arabic = editions.find(
      edition => edition.edition?.identifier === "quran-uthmani"
    );

    const english = editions.find(
      edition => edition.edition?.identifier === "en.asad"
    );

    const arabicAyahs = arabic?.ayahs || [];
    const englishAyahs = english?.ayahs || [];

    content.innerHTML = "";

    arabicAyahs.forEach((ayah, index) => {
      const englishText =
        englishAyahs[index]?.text || "";

      const verse = document.createElement("div");

      verse.className = "verse";

      verse.innerHTML = `
        <div class="verse-number">
          ${ayah.numberInSurah}
        </div>

        <div class="arabic">
          ${ayah.text}
        </div>

        <div class="translation"
             style="display:${showTranslation ? "block" : "none"}">
          ${englishText}
        </div>
      `;

      content.appendChild(verse);
    });

  } catch (error) {
    console.error("Surah loading error:", error);

    content.innerHTML = `
      <div class="reader-error">
        Unable to load this surah right now.
      </div>
    `;
  }
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

  document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {

      const page =
        button.dataset.page;

      if (page) {
        showPage(page);
      }

    });
  });


  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {

      document.querySelectorAll(".tab").forEach(t => {
        t.classList.remove("active");
      });

      tab.classList.add("active");

      const target =
        tab.dataset.tab;

      document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
      });

      if (target) {
        const element =
          document.getElementById(target);

        if (element) {
          element.classList.add("active");
        }
      }

    });
  });


  const backReader =
    document.getElementById("backFromReader");

  if (backReader) {
    backReader.onclick = () => {

      const reader =
        document.getElementById("reader");

      if (reader) {
        reader.classList.remove("active");
      }

    };
  }


  const transToggle =
    document.getElementById("transToggle");

  if (transToggle) {
    transToggle.onclick = () => {

      showTranslation =
        !showTranslation;

      document.querySelectorAll(".translation")
        .forEach(element => {
          element.style.display =
            showTranslation ? "block" : "none";
        });

      transToggle.classList.toggle(
        "active",
        showTranslation
      );
    };
  }


  /* Quran search */

  const searchInput =
    document.getElementById("quranSearch");

  const searchBtn =
    document.getElementById("searchBtn");

  if (searchBtn) {

    searchBtn.onclick = () => {

      const query =
        searchInput?.value
          ?.trim()
          .toLowerCase();

      if (!query) {
        renderSurahList();
        return;
      }

      const results =
        SURAH_LIST.filter(([number, name]) =>
          name.toLowerCase().includes(query) ||
          String(number) === query
        );

      renderSearchResults(results);
    };

  }

} // IMPORTANT: closes setupNavigation()


/* =========================================================
   SEARCH RESULTS
   ========================================================= */

function renderSearchResults(results) {
  const list =
    document.getElementById("surahList");

  if (!list) return;

  list.innerHTML = "";

  if (!results.length) {

    list.innerHTML = `
      <div class="no-results">
        ${I18N[lang]?.noResults || "No results found"}
      </div>
    `;

    return;
  }

  results.forEach(([number, name]) => {

    const item =
      document.createElement("button");

    item.className = "surah-item";

    item.innerHTML = `
      <span class="surah-number">
        ${number}
      </span>

      <span class="surah-name">
        ${name}
      </span>
    `;

    item.onclick = () => {
      openSurah(number, name);
    };

    list.appendChild(item);
  });
}


/* =========================================================
   SHOW PAGE
   ========================================================= */

function showPage(id) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target =
    document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".nav-btn").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === id
    );

  });


  if (id === "qibla") {
    calculateQibla();
    updateCompass();
  }


  if (id === "prayer") {
    calculatePrayerTimes();
  }
}


/* =========================================================
   SETTINGS
   ========================================================= */

function setupSettings() {

  const settingsLang =
    document.getElementById("settingsLang");

  if (settingsLang) {

    settingsLang.value = lang;

    settingsLang.addEventListener(
      "change",
      event => {

        lang = event.target.value;

        localStorage.setItem(
          "noor_lang",
          lang
        );

        applyLanguage();
        updateDates();
        calculatePrayerTimes();

      }
    );
  }


  const method =
    document.getElementById("calcMethod");

  if (method) {

    method.value = calcMethod;

    method.addEventListener(
      "change",
      event => {

        calcMethod =
          event.target.value;

        localStorage.setItem(
          "noor_method",
          calcMethod
        );

        calculatePrayerTimes();

      }
    );
  }
}


/* =========================================================
   GLOBAL ERROR LOGGING
   ========================================================= */

window.addEventListener("error", event => {
  console.error(
    "NOOR ERROR:",
    event.error || event.message
  );
});


window.addEventListener(
  "unhandledrejection",
  event => {
    console.error(
      "NOOR PROMISE ERROR:",
      event.reason
    );
  }
);


console.log("Noor. app.js loaded successfully.");
