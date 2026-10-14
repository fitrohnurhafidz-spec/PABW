# Laporan Praktikum Pemrograman Aplikasi Berbasis Web (PABW)

**Nama:** Fitroh Nur Hafidz  
**Mata Kuliah:** Pemrograman Aplikasi Berbasis Web

---

## Pertemuan 11 — Modul JavaScript, State, dan Penyimpanan Klien

### Ringkasan Pengerjaan

Pada pertemuan ini, dilakukan refaktorisasi JavaScript dengan memisahkan kode menjadi modul-modul (ES Modules) serta mengimplementasikan _state management_ dan _client-side storage_ menggunakan `localStorage`.

### Struktur Modul JavaScript

- `js/data.js`: Menampung data statis awal (`daftarProyek`).
- `js/state.js`: Mengelola objek `state` tunggal aplikasi, menangani pemuatan (`muat`), penyimpanan (`simpan`), perubahan kategori (`pilihKategori`), dan reset (`aturUlang`) ke `localStorage`.
- `js/dom.js`: Menangani perataan tampilan (_rendering_) halaman dan manipulasi DOM berdasarkan objek `state`.
- `js/events.js`: Menangani pendengar acara (_event listener_) untuk filter tombol dan tombol atur ulang (reset).
- `js/app.js`: Berkas utama (_entry point_) yang menginisialisasi pendengar acara dan panggilan `render` pertama.

### Fitur Penyimpanan & Penanganan Simpanan Rusak

- Data preferensi filter kategori disimpan di `localStorage` dengan kunci `pabw-p11` dan nomor versi (`versi: 2`).
- Fitur _error handling_ menggunakan blok `try...catch` dan pengecekan versi otomatis membersihkan simpanan yang rusak/kadaluarsa serta mengembalikan kondisi aplikasi ke status _default_ (`"semua"`).

### Informasi Lingkungan Pengembangan

- **Node.js:** (Isi sesuai hasil node -v di terminal kamu, misal: `v20.11.0`)
- **npm:** (Isi sesuai hasil npm -v di terminal kamu, misal: `10.2.4`)

### Deklarasi Penggunaan AI

- **Bagian yang dibantu AI:** Pembimbingan struktur fungsi `try...catch` untuk _graceful fallback_ saat `localStorage` rusak, serta arahan refaktorisasi modul `state.js` dan `events.js`.
- **Bagian yang dikerjakan sendiri:** Penulisan ulang alur pemanggilan fungsi di `dom.js`, pengujian skenario simpanan rusak via DevTools Application, perbaikan logika pengecualian tombol reset (`#btn-reset`), dan pengisian lembar kerja.
