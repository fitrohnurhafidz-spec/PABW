// js/api.js
const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) {
      throw new Error("status " + respons.status);
    }
    // .json() mengubah teks JSON dari server menjadi objek/array JavaScript
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error("gagal memuat", galat.message);
    throw galat;
  }
}
