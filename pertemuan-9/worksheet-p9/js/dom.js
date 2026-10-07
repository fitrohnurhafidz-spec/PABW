import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

// B.1 - Fungsi membuat 1 elemen kartu proyek
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

// B.2 - Fungsi render (menampilkan daftar ke halaman)
function render(daftar) {
  wadah.textContent = "";

  // Tampilkan pesan kosong jika data tidak ditemukan
  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

// C.2 - Fungsi untuk menandai tombol mana yang lagi aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// C.1 - EVENT DELEGATION: 1 pendengar klik di induk (#filter)
barisFilter.addEventListener("click", (event) => {
  // Cari tombol terdekat yang diklik
  const tombol = event.target.closest("button");
  if (!tombol) return; // Jika yang diklik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;

  // Menyaring data proyek sesuai data-kategori tombol
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori,
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

// Jalankan render awal
render(daftarProyek);
