const pages = [
  // Halaman 2: Ucapan & Kenangan
  `
  <div class="photo-frame top-left" style="top: 60px; left: 120px; width: 230px; --rotation: -7deg">
    <img src="terbang.jpg" alt="terbangbjir" />
  </div>
  <div class="photo-frame top-right" style="top: 60px; left: 800px; width: 200px; --rotation: 8deg">
    <img src="foto9.jpg" alt="prosesscrap" />
    <span class="tooltip">Bentuk awal scrapnya</span>
  </div>
  <div class="photo-frame bottom-left" style="top: 340px; left: 150px; width: 220px; --rotation: 4deg">
    <img src="miaw.jpg" alt="glo dan miaw" />
    <span class="tooltip">First Date :></span>
  </div>
  <div class="text-note torn-edge" style="top: 80px; left: 400px; width: 340px; --rotation: 1deg; z-index:12;">
    <h2>Moment Pertama Kita</h2>
    <p>Ga kerasa ya udah 2 tahun aja lewat. Tapi sumpah, aku masih inget jelas banget waktu pertama kali kita jalan bareng. yaa walaupun awalnya kerasa akward banget WKWKWKWK, walau gitu hari itu rasanya beda aja, aku bener-bener ngerasa seneng bisa bareng sama kamu. Sampe sekarang pun momen itu masih kebawa terus diingetanku. Kadang kalau lagi keinget, jujur rasanya pengen banget ada kesempatan buat ngalamin hal kayak gitu lagi sama kamu.</p>
  </div>
  <div class="icon-coffee" style="top: 120px; left: 350px"></div>
  `,
];

const mainDisplay = document.getElementById("mainDisplay");
const navBtns = document.querySelectorAll(".nav-btn");
const initialContent = mainDisplay.innerHTML;

function renderPage(idx) {
  if (idx === 0) {
    mainDisplay.innerHTML = initialContent;
  } else {
    mainDisplay.classList.add("slide-out");
    setTimeout(() => {
      mainDisplay.innerHTML = pages[idx - 1];
      mainDisplay.classList.remove("slide-out");
      mainDisplay.classList.add("slide-in");
      setTimeout(() => mainDisplay.classList.remove("slide-in"), 600);
    }, 400);
  }
}

navBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPage(idx);
  });
});

const audio = document.getElementById("audio");
const playBtn = document.getElementById("customPlayBtn");
const audioLabel = document.querySelector(".audio-label");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioLabel.textContent = "Pause Song";
  } else {
    audio.pause();
    audioLabel.textContent = "Play Song";
  }
});
audio.addEventListener("play", () => {
  audioLabel.textContent = "Pause Song";
});
audio.addEventListener("pause", () => {
  audioLabel.textContent = "Play Song";
});
