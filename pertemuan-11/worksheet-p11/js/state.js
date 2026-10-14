import { daftarProyek } from "./data.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

// Memuat data dari localStorage saat aplikasi pertama kali dibuka
export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

const simpananAwal = muat();

// Objek state tunggal aplikasi
export const state = {
  daftarProyek: daftarProyek,
  kategoriAktif: simpananAwal?.kategoriAktif || "semua",
};

// Fungsi menyimpan keadaan ke localStorage
export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Fungsi mengubah kategori dan langsung menyimpan perubahan
export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
}

// Fungsi menghapus simpanan (reset ke bawaan)
export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
}
