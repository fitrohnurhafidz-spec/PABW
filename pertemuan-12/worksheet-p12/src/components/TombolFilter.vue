<script setup>
import { state } from "../state.js";

const daftarKategori = [
  { id: "semua", label: "Semua" },
  { id: "web", label: "Web" },
  { id: "data", label: "Data" },
];

function pilihKategori(kat) {
  state.kategoriAktif = kat;
}
</script>

<template>
  <div class="filter-buttons">
    <button
      v-for="kat in daftarKategori"
      :key="kat.id"
      :class="{ active: state.kategoriAktif === kat.id }"
      @click="pilihKategori(kat.id)"
    >
      {{ kat.label }}
    </button>
  </div>
</template>
