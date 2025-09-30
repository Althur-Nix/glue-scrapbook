const pages = [
  // Halaman 2: Momen Lucu & VN
  `
  <div class="photo-frame top-left" style="top: 60px; left: 120px; width: 200px; --rotation: -7deg">
    <img src="foto_lucu1.jpg" alt="Momen lucu 1" />
    <span class="tooltip">Ekspresi gokil</span>
  </div>
  <div class="photo-frame top-right" style="top: 80px; left: 600px; width: 180px; --rotation: 8deg">
    <img src="foto_lucu2.jpg" alt="Momen lucu 2" />
    <span class="tooltip">Candid seru</span>
  </div>
  <div class="photo-frame bottom-left" style="top: 350px; left: 140px; width: 170px; --rotation: 5deg">
    <img src="foto_lucu3.jpg" alt="Momen lucu 3" />
    <span class="tooltip">Tertawa bareng</span>
  </div>
  <div class="photo-frame bottom-right" style="top: 320px; left: 600px; width: 200px; --rotation: -6deg">
    <img src="foto_lucu4.jpg" alt="Momen lucu 4" />
    <span class="tooltip">Momen random</span>
  </div>
  <div class="vn-player decorated-vn" style="top: 220px; left: 370px;">
    <div class="vn-decor">
      <span class="vn-icon"></span>
      <span class="vn-label">Voice Note: Cerita Lucu</span>
    </div>
    <audio controls src="voice_note1.mp3" class="vn-audio"></audio>
  </div>
  <div class="icon-coffee" style="top: 180px; left: 350px"></div>
  `,

  // Halaman 3: Ucapan Masa Depan & Foto Bebas
  `
  <div class="photo-frame top-left" style="top: 70px; left: 110px; width: 190px; --rotation: -5deg">
    <img src="foto_bebas1.jpg" alt="Momen santai" />
    <span class="tooltip">Santai sore</span>
  </div>
  <div class="photo-frame top-right" style="top: 60px; left: 620px; width: 210px; --rotation: 7deg">
    <img src="foto_bebas2.jpg" alt="Bersama teman" />
    <span class="tooltip">Bersama teman</span>
  </div>
  <div class="photo-frame bottom-left" style="top: 340px; left: 180px; width: 180px; --rotation: 4deg">
    <img src="foto_bebas3.jpg" alt="Petualangan" />
    <span class="tooltip">Petualangan</span>
  </div>
  <div class="photo-frame bottom-right" style="top: 330px; left: 590px; width: 190px; --rotation: -8deg">
    <img src="foto_bebas4.jpg" alt="Momen random" />
    <span class="tooltip">Momen random</span>
  </div>
  <div class="text-note torn-edge" style="top: 200px; left: 400px; width: 270px; --rotation: 2deg">
    <h2>Untuk Masa Depanmu</h2>
    <p>Semoga langkahmu selalu diberkahi. Jangan takut bermimpi, dan teruslah berjuang untuk masa depan yang kamu inginkan!</p>
    <blockquote>"The best is yet to come."</blockquote>
  </div>
  <div class="icon-books" style="bottom: 10px; right: 10px"></div>
  `,

  // Halaman 4: Momen Paling Berkesan & VN Penutup
  `
  <div class="photo-frame top-left" style="top: 90px; left: 160px; width: 200px; --rotation: -6deg">
    <img src="foto_berkesan1.jpg" alt="Momen berkesan 1" />
    <span class="tooltip">Momen spesial</span>
  </div>
  <div class="photo-frame top-right" style="top: 100px; left: 630px; width: 190px; --rotation: 6deg">
    <img src="foto_berkesan2.jpg" alt="Momen berkesan 2" />
    <span class="tooltip">Kenangan indah</span>
  </div>
  <div class="photo-frame bottom-left" style="top: 350px; left: 170px; width: 180px; --rotation: 7deg">
    <img src="foto_berkesan3.jpg" alt="Momen berkesan 3" />
    <span class="tooltip">Tak terlupakan</span>
  </div>
  <div class="photo-frame bottom-right" style="top: 340px; left: 610px; width: 200px; --rotation: -7deg">
    <img src="foto_berkesan4.jpg" alt="Momen berkesan 4" />
    <span class="tooltip">Bahagia selalu</span>
  </div>
  <div class="vn-player decorated-vn" style="top: 220px; left: 390px;">
    <div class="vn-decor">
      <span class="vn-icon"></span>
      <span class="vn-label">Voice Note: Pesan Penutup</span>
    </div>
    <audio controls src="voice_note2.mp3" class="vn-audio"></audio>
  </div>
  <div class="text-note torn-edge" style="top: 420px; left: 450px; width: 300px; --rotation: -4deg">
    <h2>Terima Kasih Untuk Segalanya</h2>
    <p>Semua kenangan ini akan selalu aku simpan. Terima kasih sudah menjadi bagian penting dalam hidupku. Semoga kamu selalu bahagia!</p>
  </div>
  <div class="icon-coffee" style="top: 180px; left: 350px"></div>
  <div class="icon-books" style="bottom: 10px; right: 10px"></div>
  `,
];

// Fungsi navigasi halaman scrapbook tetap seperti sebelumnya
const mainDisplay = document.getElementById("mainDisplay");
const navBtns = document.querySelectorAll(".nav-btn");
const initialContent = mainDisplay.innerHTML; // simpan isi awal halaman 1

navBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    if (idx === 0) {
      // Tampilkan ulang halaman 1 tanpa reload (lagu tetap jalan)
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
