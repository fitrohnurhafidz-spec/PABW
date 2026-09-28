# Profil Mahasiswa PABW — Pertemuan 5 (Layout Modern)

## Sketsa Kerangka Halaman

Pembaruan tata letak halaman ini menggunakan pendekatan CSS Grid dan Flexbox agar adaptif tanpa mengandalkan media query. Berikut adalah rancangan struktur halamannya:

### 1. Sumbu Utama (Grid 3 Baris)

Keseluruhan halaman (`body`) dibungkus dalam wadah Grid dengan komposisi `grid-template-rows: auto 1fr auto;`:

- **Baris Pertama (Header/Navbar):** Memakai nilai `auto` agar tingginya menyesuaikan isi.
- **Baris Kedua (Main/Isi Halaman):** Memakai nilai `1fr` agar menyerap seluruh sisa ruang tinggi layar.
- **Baris Ketiga (Footer):** Memakai nilai `auto`.

### 2. Area Isi Utama (Grid 2 Kolom)

Area tengah (`main`) dibagi menjadi 2 kolom menggunakan `grid-template-columns: 16rem 1fr;`:

- **Kolom Kiri (Sidebar/Profil):** Lebar tetap `16rem`.
- **Kolom Kanan (Konten Utama):** Fleksibel menyerap sisa ruang menggunakan `1fr`.

### 3. Pemilihan Grid vs Flexbox

- **Flexbox 1 Dimensi:** Digunakan pada **Navbar** dan **Isi/kaki kartu** karena elemen-elemen tersebut hanya perlu disusun berderet dalam satu baris horisontal.
- **Grid 2 Dimensi:** Digunakan pada **Kerangka Dasar (Body & Main)** serta **Galeri Kartu** (`repeat(auto-fit, minmax(16rem, 1fr))`) karena membutuhkan kontrol penempatan kolom dan baris yang dinamis sesuai ruang.
