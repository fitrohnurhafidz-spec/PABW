<script setup>
import { ref } from "vue";

const pesan = ref("");

function kirimPesan() {
  if (pesan.value.trim() !== "") {
    pesan.value = "";
  }
}
</script>

<template>
  <form @submit.prevent="kirimPesan" class="contact-form">
    <h2>Kontak</h2>
    <textarea
      v-model="pesan"
      placeholder="Tulis pesan Anda..."
      rows="4"
    ></textarea>
    <br />
    <button type="submit">Kirim Pesan</button>
  </form>
</template>
