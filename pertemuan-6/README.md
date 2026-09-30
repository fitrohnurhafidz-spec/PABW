# Profil Mahasiswa PABW — Pertemuan 6 (Responsif Mobile-First)

## Perancangan Tata Letak Responsif Mobile-First

Pembaruan tata letak halaman ini menerapkan pendekatan _Mobile-First_, di mana gaya dasar dibuat khusus untuk layar sempit (ponsel) terlebih dahulu tanpa _media query_, lalu disesuaikan secara bertahap untuk layar tablet dan desktop menggunakan titik henti (_breakpoints_).

### 1. Gaya Dasar Layar Sempit (Base Styles — Mobile)

Pada gaya dasar, seluruh elemen disusun secara berderet ke bawah dalam 1 kolom penuh agar pas dan tidak meluber saat diakses melalui ponsel (360 px):

- **Sumbu Utama (`body`):** Menggunakan Grid `grid-template-rows: auto 1fr auto;` dengan tinggi minimal `100dvh`.
- **Area Isi Utama (`main`):** Diubah menjadi 1 kolom penuh `grid-template-columns: 1fr;` (menghapus alokasi kaku `16rem 1fr` dari P5 agar tidak memaksa gulir mendatar di HP).
- **Galeri Kartu (`.katalog`):** Disusun dalam 1 kolom penuh `grid-template-columns: 1fr;`.

### 2. Titik Henti Layar (_Breakpoints_)

Perubahan tata letak untuk layar yang lebih lebar dikendalikan di dalam berkas `responsif.css` menggunakan _media query_ berbasis `min-width` dan satuan `rem`:

- **Tablet (`@media (min-width: 48rem)` / ~768 px):** Galeri kartu berubah dari 1 kolom menjadi 2 kolom (`repeat(2, 1fr)`) karena ruang horizontal sudah mencukupi.
- **Desktop (`@media (min-width: 60rem)` / ~960 px):**
  - Area utama (`main`) kembali ke susunan 2 kolom (`16rem 1fr`), menempatkan _sidebar_ bersanding di samping konten utama.
  - Galeri kartu bertambah menjadi 3 kolom (`repeat(3, 1fr)`).

### 3. Penanganan Elemen & Pencegahan Overflow

- **Meta Viewport:** Memasang `<meta name="viewport" content="width=device-width, initial-scale=1.0">` pada bagian `<head>` agar peramban ponsel menyesuaikan skala halaman secara 1:1.
- **Gambar Fleksibel:** Menerapkan `max-width: 100%; height: auto;` pada elemen gambar agar ukurannya tidak pernah melebihi wadah induknya.
- **Tabel Bergulir:** Membungkus tabel lebar di dalam wadah `.table-wrap` dengan aturan `overflow-x: auto;` agar tabel dapat digulir secara mandiri tanpa merusak _layout_ utama.
- **Satuan Relatif:** Menggunakan satuan `rem` untuk ukuran teks dan variabel token (`var(--space-*)`) untuk _gap_ dan _padding_ agar tampilan tetap proposional saat pengguna mengubah ukuran font peramban.
