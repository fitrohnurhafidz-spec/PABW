import { reactive } from "vue";
import { daftarProyek } from "./data.js";

// Hanya state reaktif dan fungsi ubah kategori
export const state = reactive({
  daftarProyek: daftarProyek,
  kategoriAktif: "semua",
});

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
}
