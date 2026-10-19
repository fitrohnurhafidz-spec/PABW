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
    id: 1,
    judul: "Halaman Profil",
    kategori: "web",
    tahun: 2026,
    selesai: true,
  },
  {
    id: 2,
    judul: "Katalog Produk",
    kategori: "web",
    tahun: 2026,
    selesai: false,
  },
  {
    id: 3,
    judul: "Aplikasi Kasir",
    kategori: "data",
    tahun: 2025,
    selesai: true,
  },
  {
    id: 4,
    judul: "Portofolio Interaktif",
    kategori: "web",
    tahun: 2026,
    selesai: false,
  },
];
