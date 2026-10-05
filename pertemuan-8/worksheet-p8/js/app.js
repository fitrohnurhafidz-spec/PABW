// B.1 & B.4
const profil = {
  nama: "fitroh nur hafidz",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 4,
  kontak: {
    email: "mahasiswa@alumni.id",
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
const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
  { judul: "Aplikasi Kasir", tahun: 2025, selesai: true },
  { judul: "Portofolio Interaktif", tahun: 2026, selesai: false },
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
