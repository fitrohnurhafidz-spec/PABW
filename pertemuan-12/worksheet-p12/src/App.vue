<script setup>
import { onMounted, watch } from "vue";
import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormKontak from "./components/FormKontak.vue";
import { profil } from "./data.js";
import { state } from "./state.js";
import { muat, simpan, aturUlang } from "./simpanan.js";

// Baca simpanan saat komponen dipasang
onMounted(() => {
  const isi = muat();
  if (isi) {
    state.kategoriAktif = isi.kategoriAktif;
  }
});

// Simpan otomatis setiap kali state berubah
watch(state, (nilai) => simpan(nilai), { deep: true });

// Tombol atur ulang
function aturUlangPilihan() {
  aturUlang();
  state.kategoriAktif = "semua";
  simpan(state);
}
</script>

<template>
  <div id="app-container">
    <KepalaProfil :profil="profil" />
    <TombolFilter />
    <div style="margin: 10px 0">
      <button @click="aturUlangPilihan">Atur Ulang Pilihan</button>
    </div>
    <DaftarProyek />
    <FormKontak />
  </div>
</template>
