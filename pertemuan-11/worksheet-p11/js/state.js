import { daftarProyek } from "./data.js";

// Satu objek untuk menyimpan keadaan aplikasi
export const state = {
  daftarProyek: daftarProyek,
  kategoriAktif: "semua",
};

// Fungsi untuk mengubah kategori aktif
export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
}
