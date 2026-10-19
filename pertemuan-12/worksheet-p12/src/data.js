export const profil = {
  nama: "fitroh nur hafidz",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 4,
  kontak: {
    email: "mahasiswa@uii.ac.id",
  },
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar = []) => {
  return daftar.join(" · ");
};

export const daftarProyek = [
  {
    judul: "Halaman Profil",
    kategori: "web",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Katalog Produk",
    kategori: "web",
    tahun: 2026,
    selesai: false,
  },
  {
    judul: "Aplikasi Kasir",
    kategori: "data",
    tahun: 2025,
    selesai: true,
  },
  {
    judul: "Portofolio Interaktif",
    kategori: "web",
    tahun: 2026,
    selesai: false,
  },
];
