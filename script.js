const pages = [
  // Halaman 2: 3 foto, notes & VN tidak menumpuk
  `
  <div class="photo-frame top-left" style="top: 60px; left: 120px; width: 210px; --rotation: -7deg">
    <img src="foto_lucu1.jpg" alt="Momen lucu 1" />
    <span class="tooltip">Ekspresi gokil</span>
  </div>
  <div class="photo-frame top-right" style="top: 60px; left: 600px; width: 200px; --rotation: 8deg">
    <img src="foto_lucu2.jpg" alt="Momen lucu 2" />
    <span class="tooltip">Candid seru</span>
  </div>
  <div class="photo-frame bottom-left" style="top: 340px; left: 180px; width: 220px; --rotation: 4deg">
    <img src="foto_lucu3.jpg" alt="Momen lucu 3" />
    <span class="tooltip">Tertawa bareng</span>
  </div>
  <div class="text-note torn-edge" style="top: 180px; left: 400px; width: 320px; --rotation: 1deg; z-index:12;">
    <h2>Momen Lucu Bareng</h2>
    <p>Hari-hari penuh tawa dan cerita konyol. Semoga selalu ada kebahagiaan seperti ini di hidupmu!</p>
  </div>
  <div class="vn-player decorated-vn" style="top: 320px; left: 500px;">
    <div class="vn-decor">
      <span class="vn-icon"></span>
      <button class="vn-play-btn" aria-label="Play VN">
        <svg width="28" height="28" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="15" fill="#b8860b" stroke="#4d2c1e" stroke-width="2"/>
          <polygon points="12,10 24,16 12,22" fill="#fffbe6"/>
        </svg>
      </button>
      <span class="vn-label">Voice Note: Cerita Lucu</span>
    </div>
    <audio class="vn-audio" src="voice_note1.mp3" style="display:none;"></audio>
  </div>
  <div class="icon-coffee" style="top: 120px; left: 350px"></div>
  `,

  // Halaman 3: 4 foto, notes tidak menumpuk dengan foto terakhir
  `
  <div class="photo-frame top-left" style="top: 70px; left: 110px; width: 180px; --rotation: -5deg">
    <img src="foto_bebas1.jpg" alt="Momen santai" />
    <span class="tooltip">Santai sore</span>
  </div>
  <div class="photo-frame top-right" style="top: 60px; left: 650px; width: 180px; --rotation: 7deg">
    <img src="foto_bebas2.jpg" alt="Bersama teman" />
    <span class="tooltip">Bersama teman</span>
  </div>
  <div class="photo-frame bottom-left" style="top: 340px; left: 180px; width: 170px; --rotation: 4deg">
    <img src="foto_bebas3.jpg" alt="Petualangan" />
    <span class="tooltip">Petualangan</span>
  </div>
  <div class="photo-frame bottom-right" style="top: 340px; left: 600px; width: 170px; --rotation: -8deg">
    <img src="foto_bebas4.jpg" alt="Momen random" />
    <span class="tooltip">Momen random</span>
  </div>
  <div class="text-note torn-edge" style="top: 200px; left: 390px; width: 270px; --rotation: 2deg; z-index:12;">
    <h2>Untuk Masa Depanmu</h2>
    <p>Semoga langkahmu selalu diberkahi. Jangan takut bermimpi, dan teruslah berjuang untuk masa depan yang kamu inginkan!</p>
    <blockquote>"The best is yet to come."</blockquote>
  </div>
  <div class="icon-books" style="bottom: 10px; right: 10px"></div>
  `,

  // Halaman 4: 3 foto, notes & VN tidak menumpuk
  `
  <div class="photo-frame top-left" style="top: 90px; left: 180px; width: 200px; --rotation: -6deg">
    <img src="foto_berkesan1.jpg" alt="Momen berkesan 1" />
    <span class="tooltip">Momen spesial</span>
  </div>
  <div class="photo-frame top-right" style="top: 90px; left: 630px; width: 200px; --rotation: 6deg">
    <img src="foto_berkesan2.jpg" alt="Momen berkesan 2" />
    <span class="tooltip">Kenangan indah</span>
  </div>
  <div class="photo-frame bottom-left" style="top: 340px; left: 400px; width: 220px; --rotation: 7deg">
    <img src="foto_berkesan3.jpg" alt="Momen berkesan 3" />
    <span class="tooltip">Tak terlupakan</span>
  </div>
  <div class="text-note torn-edge" style="top: 180px; left: 400px; width: 320px; --rotation: 0deg; z-index:12;">
    <h2>Terima Kasih Untuk Segalanya</h2>
    <p>Semua kenangan ini akan selalu aku simpan. Terima kasih sudah menjadi bagian penting dalam hidupku. Semoga kamu selalu bahagia!</p>
  </div>
  <div class="vn-player decorated-vn" style="top: 320px; left: 520px;">
    <div class="vn-decor">
      <span class="vn-icon"></span>
      <button class="vn-play-btn" aria-label="Play VN">
        <svg width="28" height="28" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="15" fill="#b8860b" stroke="#4d2c1e" stroke-width="2"/>
          <polygon points="12,10 24,16 12,22" fill="#fffbe6"/>
        </svg>
      </button>
      <span class="vn-label">Voice Note: Pesan Penutup</span>
    </div>
    <audio class="vn-audio" src="voice_note2.mp3" style="display:none;"></audio>
  </div>
  <div class="icon-coffee" style="top: 120px; left: 350px"></div>
  <div class="icon-books" style="bottom: 10px; right: 10px"></div>
  `,
];

// Fungsi navigasi halaman scrapbook tetap seperti sebelumnya
const mainDisplay = document.getElementById("mainDisplay");
const navBtns = document.querySelectorAll(".nav-btn");
const initialContent = mainDisplay.innerHTML; // simpan isi awal halaman 1

function setupVNPlayers() {
  document.querySelectorAll(".vn-player").forEach((player) => {
    const btn = player.querySelector(".vn-play-btn");
    const audio = player.querySelector(".vn-audio");
    if (btn && audio) {
      btn.onclick = () => {
        if (audio.paused) {
          // Pause all other VN audios
          document.querySelectorAll(".vn-audio").forEach((a) => {
            if (a !== audio) a.pause();
          });
          audio.play();
          btn.classList.add("playing");
        } else {
          audio.pause();
          btn.classList.remove("playing");
        }
      };
      audio.onplay = () => btn.classList.add("playing");
      audio.onpause = () => btn.classList.remove("playing");
      audio.onended = () => btn.classList.remove("playing");
    }
  });
}

// Panggil setupVNPlayers setiap halaman diganti
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
      setupVNPlayers(); // <-- panggil di sini
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

// Panggil juga saat halaman pertama dimuat jika ada VN di halaman 1
setupVNPlayers();

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
