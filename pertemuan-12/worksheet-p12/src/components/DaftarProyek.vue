<script setup>
import { computed } from "vue";
import { state } from "../state.js";

const proyekTersaring = computed(() => {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }
  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif,
  );
});
</script>

<template>
  <div class="project-grid">
    <div v-for="proyek in proyekTersaring" :key="proyek.id" class="card">
      <h3>{{ proyek.judul }}</h3>
      <p>Kategori: {{ proyek.kategori }} · Tahun: {{ proyek.tahun }}</p>
      <p>Status: {{ proyek.selesai ? "Selesai" : "Proses" }}</p>
    </div>
  </div>
</template>
