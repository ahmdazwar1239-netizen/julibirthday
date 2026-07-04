/* =========================================================
   ISI PESAN & FOTO DI SINI
   - Cari tulisan "EDIT DI SINI" untuk ganti teks pesan.
   - Ganti src gambar dari null jadi "nama-file.jpg" (taruh
     file fotonya di folder yang sama dengan index.html).
   - Musik: taruh file mp3 dengan nama persis "2on.mp3"
     di folder yang sama (atau ganti nama file di index.html
     pada tag <audio src="...">).
========================================================= */

const slidesData = [

  // 0. COVER
  {
    type: "cover",
    badge: "Julita Wrapped",
    headline: `20 <span class="accent">Tahun</span><br>Julita Kirana Zega`,
    subtext: "Sebelum masuk isinya, tarik napas dulu. Ini bakal jadi rangkuman singkat soal seseorang yang cukup keren buat dibikinin beginian.",
    hint: "Ketuk kanan layar untuk lanjut →"
  },

  // 1. BIG NUMBER
  {
    type: "stat-big",
    eyebrow: "Level baru, unlocked",
    number: "20",
    subtext: "Selamat ulang tahun ke-20, Julita! Semoga umur yang baru ini bawa lebih banyak progress, lebih banyak PR baru, dan lebih banyak alasan buat bangga sama diri sendiri."
  },

  // 2. ABOUT HER (gym / sporty)
  {
    type: "stat-list",
    eyebrow: "Kartu Statistik",
    headline: `Yang Bikin Dia<br><span class="accent">Beda</span>`,
    stats: [
      { num: "01", label: "Rajin ke gym, konsisten latihan" },
      { num: "02", label: "Aktif olahraga, energinya gak abis-abis" },
      { num: "03", label: "Badas dari dalam, gak alay-alay amat" },
      { num: "04", label: "Tetap down to earth walau keren" }
    ]
  },

  // 3. PHOTO 1
  {
    type: "photo",
    eyebrow: "Snapshot",
    caption: "Salah satu versi terbaiknya",
    image: null // ganti jadi "photo1.jpg"
  },

  // 4. MESSAGE 1 (EDIT DI SINI)
  {
    type: "message",
    eyebrow: "Pesan 1 / 4",
    headline: "Buat Julita,",
    body: "EDIT DI SINI — tulis pesan pertama kamu di sini."
  },

  // 5. MESSAGE 2 (EDIT DI SINI)
  {
    type: "message",
    eyebrow: "Pesan 2 / 4",
    headline: "Tentang Kamu,",
    body: "EDIT DI SINI — tulis pesan kedua kamu di sini."
  },

  // 6. PHOTO 2
  {
    type: "photo",
    eyebrow: "Snapshot",
    caption: "Momen favorit lainnya",
    image: null // ganti jadi "photo2.jpg"
  },

  // 7. MESSAGE 3 (EDIT DI SINI)
  {
    type: "message",
    eyebrow: "Pesan 3 / 4",
    headline: "Harapan Gw,",
    body: "EDIT DI SINI — tulis pesan ketiga kamu di sini."
  },

  // 8. MESSAGE 4 (EDIT DI SINI)
  {
    type: "message",
    eyebrow: "Pesan 4 / 4",
    headline: "Terakhir,",
    body: "EDIT DI SINI — tulis pesan penutup kamu di sini."
  },

  // 9. SONG FEATURE
  {
    type: "song",
    eyebrow: "Soundtrack Ultah Ini",
    headline: `Lagu Buat<br><span class="accent-2">Momen Ini</span>`,
    subtext: "Ketuk tombol play buat dengerin sambil baca ulang halaman-halaman sebelumnya.",
    songTitle: "2 On",
    songArtist: "Tinashe"
  },

  // 10. OUTRO
  {
    type: "outro",
    eyebrow: "Selesai",
    subtext: "Happy birthday, Julita. Semoga tahun ke-20 ini seru terus.",
    name: "Julita Kirana Zega"
  },
];

// ---------- RENDER ----------

const slidesContainer = document.getElementById("slides");
const progressBar = document.getElementById("progressBar");
let current = 0;

function iconBarbell(){
  return `<div class="barbell"><div class="plate small"></div><div class="plate"></div><div class="bar"></div><div class="plate"></div><div class="plate small"></div></div>`;
}

function renderPhotoFrame(image, cornerTag){
  if(image){
    return `<div class="photo-frame"><img src="${image}" alt=""><span class="corner-tag">${cornerTag || ""}</span></div>`;
  }
  return `<div class="photo-frame"><div class="placeholder-label">taruh foto di sini<br>(edit "image" di script.js)</div></div>`;
}

function buildSlideHTML(slide, index){
  switch(slide.type){

    case "cover":
      return `
        <div class="cover-badge">${slide.badge}</div>
        ${iconBarbell()}
        <h1 class="headline">${slide.headline}</h1>
        <p class="subtext">${slide.subtext}</p>
        <div class="tap-hint">${slide.hint}</div>
      `;

    case "stat-big":
      return `
        <div class="eyebrow">${slide.eyebrow}</div>
        <div class="big-number">${slide.number}</div>
        <p class="subtext">${slide.subtext}</p>
      `;

    case "stat-list":
      return `
        <div class="eyebrow">${slide.eyebrow}</div>
        <h2 class="headline">${slide.headline}</h2>
        <div class="stat-block">
          ${slide.stats.map(s => `
            <div class="stat-row">
              <span class="num">${s.num}</span>
              <span class="label">${s.label}</span>
            </div>
          `).join("")}
        </div>
      `;

    case "photo":
      return `
        <div class="eyebrow">${slide.eyebrow}</div>
        ${renderPhotoFrame(slide.image, slide.caption)}
        <p class="subtext">${slide.caption}</p>
      `;

    case "message":
      return `
        <div class="eyebrow">${slide.eyebrow}</div>
        ${iconBarbell()}
        <h2 class="headline">${slide.headline}</h2>
        <p class="body-text editable">${slide.body}</p>
      `;

    case "song":
      return `
        <div class="eyebrow">${slide.eyebrow}</div>
        <h2 class="headline">${slide.headline}</h2>
        <p class="subtext">${slide.subtext}</p>
        <div class="song-card">
          <div class="song-art">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
          </div>
          <div class="song-meta">
            <div class="song-title">${slide.songTitle}</div>
            <div class="song-artist">${slide.songArtist}</div>
          </div>
          <button class="play-btn" id="inlinePlayBtn" aria-label="Play">
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      `;

    case "outro":
      return `
        <div class="eyebrow">${slide.eyebrow}</div>
        <div class="outro-name">${slide.name}</div>
        <p class="subtext" style="margin-top:16px;">${slide.subtext}</p>
      `;

    default:
      return "";
  }
}

function renderAll(){
  slidesContainer.innerHTML = slidesData.map((slide, i) => `
    <div class="slide" data-index="${i}">${buildSlideHTML(slide, i)}</div>
  `).join("");

  progressBar.innerHTML = slidesData.map(() => `
    <div class="progress-seg"><div class="fill"></div></div>
  `).join("");

  updateView();
}

function updateView(){
  const slideEls = document.querySelectorAll(".slide");
  slideEls.forEach((el, i) => {
    el.classList.toggle("active", i === current);
  });

  const segs = document.querySelectorAll(".progress-seg .fill");
  segs.forEach((fill, i) => {
    fill.style.width = i <= current ? "100%" : "0%";
  });

  // wire up inline play button if this slide has one
  const inlineBtn = document.getElementById("inlinePlayBtn");
  if(inlineBtn){
    inlineBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAudio(true);
    });
  }
}

function goTo(index){
  if(index < 0) index = 0;
  if(index > slidesData.length - 1) index = slidesData.length - 1;
  current = index;
  updateView();
}

document.getElementById("tapLeft").addEventListener("click", () => goTo(current - 1));
document.getElementById("tapRight").addEventListener("click", () => goTo(current + 1));

// keyboard support (desktop convenience)
window.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") goTo(current + 1);
  if(e.key === "ArrowLeft") goTo(current - 1);
});

// ---------- AUDIO ----------

const bgAudio = document.getElementById("bgAudio");
const soundBtn = document.getElementById("soundBtn");
const iconSoundOn = document.getElementById("iconSoundOn");
const iconSoundOff = document.getElementById("iconSoundOff");
let isPlaying = false;

function toggleAudio(forcePlay){
  if(!isPlaying || forcePlay){
    bgAudio.play().then(() => {
      isPlaying = true;
      iconSoundOn.style.display = "block";
      iconSoundOff.style.display = "none";
    }).catch(() => {
      // file mp3 belum ada / diblokir browser, tidak apa-apa
    });
  } else {
    bgAudio.pause();
    isPlaying = false;
    iconSoundOn.style.display = "none";
    iconSoundOff.style.display = "block";
  }
}

soundBtn.addEventListener("click", () => toggleAudio(false));

renderAll();