# Profil Mahasiswa PABW — Pertemuan 8 (JavaScript Modern ES6+, Struktur Data, dan Array Methods)

Praktikum Pertemuan 8 berfokus pada penerapan sintaks JavaScript Modern ES6+, pengorganisasian data menggunakan variabel dan _array of objects_, penggunaan fungsi murni (_pure functions_), serta manipulasi array menggunakan _array methods_.

## Identitas Pemilik

- **Nama:** Fitroh Nur Hafidz
- **Peran:** Mahasiswa Informatika
- **Keahlian:** HTML, CSS, JavaScript

---

## Ringkasan Implementasi Kode (`js/app.js`)

### 1. Lembar B: Variabel & Tipe Data Modern

- Menggunakan `const` untuk objek `profil` dan `let` untuk variabel `kategoriAktif` yang dinamis.
- Menggunakan _Template Literals_ (`` `${}` ``) untuk menyusun string perkenalan secara fleksibel.
- Menerapkan _Optional Chaining_ (`?.`) dan _Nullish Coalescing Operator_ (`??`) untuk mencegah error saat mengakses properti opsional (misal: `profil.kontak?.kota ?? "Belum ditentukan"`).

### 2. Lembar C: Dua Fungsi Murni (Pure Functions)

- **`buatPerkenalan({ nama, peran })`**: Fungsi deklarasi dengan _object destructuring_ untuk menyusun kalimat identitas tanpa mengubah variabel di luar fungsi.
- **`formatKeahlian(daftar)`**: _Arrow function_ yang merapikan daftar array keahlian menjadi satu baris string dengan pemisah titik (`·`).

### 3. Lembar D: Struktur Data & Array Methods

- Menyusun data proyek ke dalam _array of objects_ `daftarProyek`.
- Menggunakan `console.table()` untuk menampilkan struktur array secara visual di Console peramban.
- Menerapkan _array methods_:
  - `filter()`: Menyaring proyek yang sudah selesai (`selesai: true`).
  - `find()`: Mencari proyek spesifik berdasarkan judul.
  - `map()`: Mengambil daftar judul proyek menjadi array baru.
  - `sort()` dengan _spread operator_ (`[...daftarProyek]`): Mengurutkan proyek berdasarkan tahun tanpa mengubah array aslinya.

---

## Pernyataan Pengungkapan AI & Keaslian (F.3)

### 1. Pengungkapan AI (AI Disclosure)

- **Dibantu oleh AI:**
  - Membantu memberikan contoh penerapan sintaks ES6+ (`?.`, `??`, _destructuring_).
  - Memberikan panduan langkah-langkah _debugging_ galat pada Lembar E.
  - Membantu menyusun struktur dokumen `README.md` dan tabel evaluasi praktikum.
- **Dikerjakan Mandiri:**
  - Penyesuaian isi data profil, peran, serta daftar proyek milik Fitroh Nur Hafidz.
  - Uji coba kode langsung pada VS Code dan peramban web (Console/Live Server).
  - Penilaian mandiri, refleksi diri, serta eksekusi _Git commit_ dan _push_ ke repositori GitHub.

### 2. Pernyataan Keaslian

> **Keaslian:** Topik dan isi halaman ini milik saya sendiri (**Fitroh Nur Hafidz**), dibuat secara mandiri berdasarkan petunjuk praktikum dan tidak menyalin pekerjaan dari mahasiswa lain.
