import { daftarProyek } from "./app.js";

// Mengambil wadah dari HTML
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");

// B.1 - Fungsi untuk bikin 1 elemen kartu proyek dari data
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul; // Mengisi teks secara aman (bukan innerHTML)
  return li;
}

// B.2 - Fungsi render (menampilkan daftar ke halaman)
function render(daftar) {
  // Wajib dikosongkan dulu supaya pas digambar ulang kodenya gak numpuk/double
  wadah.textContent = "";

  // Bikin kartu untuk tiap data proyek lalu tempel ke wadah
  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

// Jalankan fungsi render pertama kali saat web dibuka
render(daftarProyek);
