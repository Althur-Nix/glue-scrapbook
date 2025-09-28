const pages = [
  // Halaman 1
  `<div class="photo-frame top-left" style="top: 50px; left: 100px; width: 250px; --rotation: -5deg">
      <img src="foto2.jpg" alt="Shared memory photo 1" />
      <span class="tooltip">hmhmmhmhm</span>
    </div>
    <div class="text-note torn-edge" style="top: 80px; left: 400px; width: 300px; --rotation: 3deg">
      <h2>To Gloria, On Your Special Day!</h2>
      <p>Though paths diverge, the memories we made are treasures I hold dear. Wishing you a year filled with joy, success, and all the happiness you deserve. Thank you for everything.</p>
    </div>
    <div class="photo-frame bottom-right" style="top: 300px; left: 150px; width: 220px; --rotation: 8deg">
      <img src="foto1.jpg" alt="Shared memory photo 2" />
      <span class="tooltip">yeyeyeyeyey</span>
    </div>
    <div class="photo-frame top-right" style="top: 250px; left: 750px; width: 180px; --rotation: -10deg">
      <img src="foto3.jpg" alt="Shared memory photo 3" />
      <span class="tooltip">Dora kecil yeay</span>
    </div>
    <div class="text-note torn-edge" style="top: 400px; left: 450px; width: 300px; --rotation: -4deg">
      <p>"Some journeys are meant to shape us, even if they don't last forever." Remembering the good times always.</p>
    </div>
    <div class="icon-coffee" style="top: 180px; left: 350px"></div>
    <div class="icon-books" style="bottom: 10px; right: 10px"></div>`,
  // Halaman 2
  `<div class="photo-frame top-left" style="top: 60px; left: 120px; width: 220px; --rotation: -3deg">
      <img src="foto4.jpg" alt="Memory 4" />
      <span class="tooltip">Liburan bareng</span>
    </div>
    <div class="text-note torn-edge" style="top: 100px; left: 380px; width: 320px; --rotation: 2deg">
      <h2>Another Memory</h2>
      <p>Kenangan indah di tahun kedua. Semoga selalu bahagia!</p>
    </div>
    <div class="photo-frame bottom-right" style="top: 320px; left: 180px; width: 200px; --rotation: 6deg">
      <img src="foto5.jpg" alt="Memory 5" />
      <span class="tooltip">Makan es krim</span>
    </div>`,
  // Halaman 3
  `<div class="photo-frame top-left" style="top: 70px; left: 140px; width: 230px; --rotation: -6deg">
      <img src="foto6.jpg" alt="Memory 6" />
      <span class="tooltip">Main di taman</span>
    </div>
    <div class="text-note torn-edge" style="top: 120px; left: 420px; width: 280px; --rotation: 4deg">
      <h2>Special Day</h2>
      <p>Hari spesial yang tak terlupakan.</p>
    </div>`,
  // Halaman 4
  `<div class="photo-frame top-left" style="top: 80px; left: 160px; width: 210px; --rotation: -2deg">
      <img src="foto7.jpg" alt="Memory 7" />
      <span class="tooltip">Foto terakhir</span>
    </div>
    <div class="text-note torn-edge" style="top: 140px; left: 460px; width: 260px; --rotation: 5deg">
      <h2>Final Memory</h2>
      <p>Terima kasih untuk semua kenangan indah.</p>
    </div>`,
];

const mainDisplay = document.getElementById("mainDisplay");
const navBtns = document.querySelectorAll(".nav-btn");
const audio = document.getElementById("audio");
const playBtn = document.getElementById("customPlayBtn");
const audioLabel = document.querySelector(".audio-label");

navBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // Animasi kertas keluar
    mainDisplay.classList.add("slide-out");
    setTimeout(() => {
      mainDisplay.innerHTML = pages[idx];
      mainDisplay.classList.remove("slide-out");
      mainDisplay.classList.add("slide-in");
      setTimeout(() => mainDisplay.classList.remove("slide-in"), 600);
    }, 400);
  });
});

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
