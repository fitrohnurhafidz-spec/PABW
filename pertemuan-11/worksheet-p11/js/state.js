import { daftarProyek } from "./data.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

// Memuat keadaan dari localStorage saat modul pertama kali diisi
const simpananAwal = muat();

// Objek state tunggal aplikasi
export const state = {
  daftarProyek: daftarProyek,
  kategoriAktif: simpananAwal?.kategoriAktif || "semua",
};

// Fungsi pengubah: mengubah kategori aktif dan menyimpan ke localStorage
export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
}

// Menyimpan keadaan saat ini ke localStorage
export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Memuat keadaan dari localStorage dengan pemeriksaan try/catch dan versi
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

// Menghapus simpanan dan mengembalikan state ke kondisi bawaan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
}
