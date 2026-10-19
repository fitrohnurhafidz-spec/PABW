<script setup>
import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormKontak from "./components/FormKontak.vue";
import { profil } from "./data.js";
</script>

<template>
  <div id="app-container">
    <KepalaProfil :profil="profil" />
    <TombolFilter />
    <DaftarProyek />
    <FormKontak />
  </div>
</template>
