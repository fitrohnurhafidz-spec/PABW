// js/app.js
import { ambilNotisia } from "./api.js";

// Ambil elemen wadah kartu di HTML
const wadah =
  document.querySelector("#karya") || document.querySelector("#daftar");

// Fungsi penggambar kartu (menggunakan parameter data sesuai Lembar C.2)
function gambar(data) {
  if (!wadah) return;
  wadah.textContent = ""; // Dikosongkan sebelum digambar ulang

  // Menelusuri array data (data.slice untuk mengambil 6 data pertama)
  data.slice(0, 6).forEach((item) => {
    const kartu = document.createElement("article");
    kartu.className = "kartu";

    const judul = document.createElement("h3");
    judul.textContent = item.title; // Kunci 'title' dari item

    const isi = document.createElement("p");
    isi.textContent = item.body; // Kunci 'body' dari item

    kartu.appendChild(judul);
    kartu.appendChild(isi);
    wadah.appendChild(kartu);
  });
}

// Fungsi utama penampil data dengan 4 Keadaan UI
async function tampilkan() {
  if (!wadah) return;

  // 1. Keadaan Memuat (Loading)
  wadah.textContent = "Memuat data dari server...";

  try {
    const data = await ambilNotisia();

    // Lembar C.3: Periksa bentuk data di Console
    console.log("Data dari API:", data);
    console.log("Akses item pertama (data[0]):", data[0]);

    // 2. Keadaan Kosong (Empty)
    if (!data || data.length === 0) {
      wadah.textContent = "Belum ada notisia";
      return;
    }

    // 3. Keadaan Berhasil (Success)
    gambar(data);
  } catch (galat) {
    // 4. Keadaan Gagal (Error)
    wadah.textContent = "Gagal memuat data: " + galat.message;
  }
}

// Jalankan fungsi tampilkan
tampilkan();
// B.1 & B.4
const profil = {
  nama: "fitroh nur hafidz",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 4,
  kontak: {
    email: "mahasiswa@uii.ac.id",
  },
};

let kategoriAktif = "semua";

// B.2
const kalimat = `Nama saya ${profil.nama}, seorang ${profil.peran} yang mempelajari ${profil.keahlian.length} hal dasar.`;
const kota = profil.kontak?.kota ?? "Belum ditentukan";

console.log(kalimat);
console.log(`Kota Tempat Tinggal: ${kota}`);
console.log("Tipe data nama:", typeof profil.nama);
console.log("Tipe data jumlahProyek:", typeof profil.jumlahProyek);

// C.1 & C.2
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar = []) => {
  return daftar.join(" · ");
};

console.log("--- Hasil Lembar C ---");
console.log(buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));

// D.1
// D.1 - Tambahkan export di depan const
export const daftarProyek = [
  { judul: "Halaman Profil", kategori: "web", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", kategori: "web", tahun: 2026, selesai: false },
  { judul: "Aplikasi Kasir", kategori: "data", tahun: 2025, selesai: true },
  {
    judul: "Portofolio Interaktif",
    kategori: "web",
    tahun: 2026,
    selesai: false,
  },
];

// D.3
console.log("--- Hasil Lembar D ---");

console.log("Tabel Keahlian:");
console.table(profil.keahlian);

console.log("Tabel Seluruh Proyek:");
console.table(daftarProyek);

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);
console.log("Tabel Proyek Selesai (filter):");
console.table(proyekSelesai);

const proyekDicari = daftarProyek.find(
  (proyek) => proyek.judul === "Halaman Profil",
);
console.log("Hasil Pencarian Proyek (find):", proyekDicari);

const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log("Daftar Judul Proyek (map):", daftarJudul);

const proyekDiurutkan = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);
console.log("Proyek Terurut Tahun (salinan):");
console.table(proyekDiurutkan);
