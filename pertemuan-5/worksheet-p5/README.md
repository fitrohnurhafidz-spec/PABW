# Praktikum P04 — Design Token untuk Halaman Profil Saya

Starter: `kerangka-profil.html`. Berkas ini sudah lengkap dan sudah lolos
W3C Nu Html Checker serta Lighthouse Accessibility. Jangan mengubah
strukturnya — tampilan diubah dari berkas CSS.

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas             | Isi                                   | Lembar |
   | ------------------ | ------------------------------------- | ------ |
   | `css/tokens.css`   | dua lapis token: nilai mentah + peran | D      |
   | `css/base.css`     | reset ringan, box-sizing, tipografi   | E      |
   | `css/layout.css`   | navbar flex, katalog kartu, footer    | F      |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah     | G      |
   | `css/tema.css`     | tema gelap dan tombol pengalihnya     | H      |

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

- W3C — Nu Html Checker: jumlah error setelah penambahan (target 0)
- WCAG — kontras AA di tema terang dan gelap
- WCAG — seluruh bagian baru dapat dicapai dengan Tab
- WCAG — tetap dapat dipahami tanpa bantuan warna

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.

# Profil Mahasiswa PABW — Pertemuan 4

## Evaluasi Bagian Tambahan (Lembar B.3 & I.5)

1. **Lini Masa Perjalanan (`<article>`)**  
   Dibuat untuk pengunjung/penilai yang ingin mengetahui rekam jejak akademis dan pengembangan diri saya. Elemen `<article>` dipilih karena konten linimasa ini berdiri sendiri sebagai cerita independen mengenai perkembangan keahlian saya.

2. **Keterampilan Utama (`<aside>`)**  
   Dibuat untuk memberikan gambaran cepat mengenai tingkat penguasaan alat dan teknologi pendukung web. Menggunakan elemen `<aside>` karena posisinya berfungsi sebagai informasi pelengkap yang mendukung profil utama.

3. **Tanya Jawab (`<details>`)**  
   Dibuat untuk calon kolaborator atau pengunjung yang memiliki pertanyaan umum seputar ketersediaan dan waktu respons. Menggunakan elemen `<details>` dan `<summary>` agar informasi interaktif dapat dibuka-tutup secara efisien tanpa memerlukan JavaScript.

---

## Pengungkapan Penggunaan AI (Lembar I.6)

- **Dikerjakan Mandiri:** Menyusun konten teks profil pribadi, menentukan struktur dasar HTML, memilih atribut semantik, serta melakukan pengujian langsung via DevTools (Lighthouse, Zoom 200%, dan navigasi papan ketik Tab).
- **Dibantu AI:** Pembentukan arsitektur CSS 5 lapisan (`tokens`, `base`, `layout`, `komponen`, `tema`), formulasi rumus token semantik, penyusunan selector CSS modern seperti `:user-invalid` dan `:has()`, serta verifikasi tabel uji WCAG.
