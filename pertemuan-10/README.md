# Laporan Praktikum Pemrograman Aplikasi Berbasis Web (PABW)

**Nama:** Fitroh Nur Hafidz  
**Mata Kuliah:** Pemrograman Aplikasi Berbasis Web

---

## Pertemuan 10 — Pemisahan Modul CSS dan Komponen Tampilan

### Ringkasan Pengerjaan

Pada pertemuan ini, dilakukan restrukturisasi berkas CSS agar tampilan antarmuka web profil menjadi lebih terorganisir dan modular.

### Struktur Berkas CSS

- `css/tokens.css`: Menampung variabel CSS (warna, tata letak, ukuran huruf).
- `css/base.css`: Styling dasar untuk elemen HTML (_reset_ dan tipografi dasar).
- `css/layout.css`: Tata letak utama halaman web (_grid_, _flexbox_, kontainer).
- `css/komponen.css`: Desain komponen khusus seperti kartu (_cards_), tombol, dan navigasi.
- `css/tema.css`: Mengatur skema warna tema (mode terang dan mode gelap).
- `css/responsif.css`: Aturan _media query_ untuk tampilan seluler dan tablet.

### Deklarasi Penggunaan AI

- **Bagian yang dibantu AI:** Penyusunan struktur variabel token CSS dan saran pembagian file CSS modular.
- **Bagian yang dikerjakan sendiri:** Penyusunan kode HTML `profil.html`, penyesuaian gaya visual kartu proyek, serta pengujian tampilan responsif.
