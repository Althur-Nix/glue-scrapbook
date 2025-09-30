const pages = [
  // Halaman 1: Ucapan Selamat & Masa Kecil

  // Halaman 2: Momen Lucu & VN
  `
  <div class="photo-frame top-left" style="top: 70px; left: 140px; width: 230px; --rotation: -6deg">
    <img src="foto_lucu1.jpg" alt="Momen lucu" />
    <span class="tooltip">Ekspresi paling gokil</span>
  </div>
  <div class="text-note torn-edge" style="top: 120px; left: 420px; width: 280px; --rotation: 4deg">
    <h2>Momen Lucu Bareng</h2>
    <p>Hari-hari penuh tawa dan cerita konyol. Semoga selalu ada kebahagiaan seperti ini di hidupmu!</p>
  </div>
  <div class="photo-frame bottom-right" style="top: 340px; left: 200px; width: 210px; --rotation: 8deg">
    <img src="foto_lucu2.jpg" alt="Momen lucu 2" />
    <span class="tooltip">Candid terbaik</span>
  </div>
  <div class="vn-player" style="top: 420px; left: 450px;">
    <audio id="vn1" src="voice_note1.mp3" controls></audio>
    <span class="vn-label">Voice Note: Cerita Lucu</span>
  </div>
  <div class="icon-coffee" style="top: 180px; left: 350px"></div>
  `,

  // Halaman 3: Ucapan Masa Depan & Foto Bebas
  `
  <div class="photo-frame top-left" style="top: 80px; left: 160px; width: 210px; --rotation: -2deg">
    <img src="foto_bebas1.jpg" alt="Foto bebas" />
    <span class="tooltip">Momen santai</span>
  </div>
  <div class="text-note torn-edge" style="top: 140px; left: 460px; width: 260px; --rotation: 5deg">
    <h2>Untuk Masa Depanmu</h2>
    <p>Semoga langkahmu selalu diberkahi. Jangan takut bermimpi, dan teruslah berjuang untuk masa depan yang kamu inginkan!</p>
    <blockquote>"The best is yet to come."</blockquote>
  </div>
  <div class="photo-frame bottom-right" style="top: 360px; left: 220px; width: 180px; --rotation: 7deg">
    <img src="foto_bebas2.jpg" alt="Foto bebas 2" />
    <span class="tooltip">Bersama teman-teman</span>
  </div>
  <div class="icon-books" style="bottom: 10px; right: 10px"></div>
  `,

  // Halaman 4: Momen Paling Berkesan & VN Penutup
  `
  <div class="photo-frame top-left" style="top: 90px; left: 180px; width: 220px; --rotation: -4deg">
    <img src="foto_berkesan.jpg" alt="Momen paling berkesan" />
    <span class="tooltip">Momen tak terlupakan</span>
  </div>
  <div class="text-note torn-edge" style="top: 160px; left: 480px; width: 240px; --rotation: 6deg">
    <h2>Terima Kasih Untuk Segalanya</h2>
    <p>Semua kenangan ini akan selalu aku simpan. Terima kasih sudah menjadi bagian penting dalam hidupku. Semoga kamu selalu bahagia!</p>
  </div>
  <div class="vn-player" style="top: 420px; left: 450px;">
    <audio id="vn2" src="voice_note2.mp3" controls></audio>
    <span class="vn-label">Voice Note: Pesan Penutup</span>
  </div>
  <div class="icon-coffee" style="top: 180px; left: 350px"></div>
  <div class="icon-books" style="bottom: 10px; right: 10px"></div>
  `,
];

// Fungsi navigasi halaman scrapbook tetap seperti sebelumnya
const mainDisplay = document.getElementById("mainDisplay");
const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    if (idx === 0) {
      // Kembali ke halaman utama (reload atau tampilkan konten awal)
      location.reload(); // cara paling mudah
      // Atau, jika ingin tanpa reload, simpan konten awal di variabel lalu set innerHTML
      // mainDisplay.innerHTML = initialContent;
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
