import { reactive } from "vue";
import { daftarProyek } from "./data.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

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

// Bungkus dengan reactive agar perubahan di Vue menjadi responsif
export const state = reactive({
  daftarProyek: daftarProyek,
  kategoriAktif: simpananAwal?.kategoriAktif || "semua",
});

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
}
