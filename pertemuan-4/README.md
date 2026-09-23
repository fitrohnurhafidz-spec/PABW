## Pertemuan 4 — Halaman profil saya

- Judul halaman: Profil Fitroh Nur Hafidz
- Deskripsi: Halaman portofolio dan profil pribadi saya
- Tautan navigasi: Tentang, Karya, Kontak, Tanya Jawab, Lini Masa, Keterampilan
- Gambar: media/foto-profil.jpg

### Arah Visual Halaman Profil

- **Arah Visual**: Tenang dan akademik
- **Warna Utama**: Biru langit (#0284C7), dipilih karena memberikan kesan tenang, rapi, dan terinspirasi dari warna langit yang segar.
- **Warna Netral**: Terang (#F0F9FF) dan Gelap (#0F172A)
- **Ukuran Huruf**: Teks isi (1rem), Judul bagian (1.5rem)
- **Jarak Dasar & Sudut**: Jarak standar 1rem, dengan radius sudut 0.5rem untuk memberi kesan modern dan tidak kaku.

## Catatan penggunaan AI

Pemilihan palet warna dan penyusunan struktur README dibantu oleh AI untuk mencocokkan tema "Tenang dan akademik" dengan nuansa "Biru langit", lalu saya sesuaikan dengan preferensi pribadi saya.

## Design token halaman profil

- Berkas gaya yang dibuat: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css`.
- Warna utama: `#0284C7` (Biru Sky / Ocean Blue), dipilih karena memberikan tampilan yang bersih, profesional, serta relevan dengan identitas mahasiswa Informatika. Warna ini memiliki kontras yang tinggi sehingga nyaman dibaca dan lolos standar aksesibilitas WCAG.

### Token yang saya tetapkan

| Token             | Nilai     | Untuk apa                            |
| ----------------- | --------- | ------------------------------------ |
| `--color-primary` | `#0284C7` | Warna utama: tombol, tautan, penanda |
| `--color-fg`      | `#0F172A` | Warna teks utama                     |
| `--color-bg`      | `#F8FAFC` | Latar halaman                        |
| `--color-surface` | `#FFFFFF` | Latar kartu dan panel                |
| `--color-border`  | `#E2E8F0` | Garis pemisah dan tepi kotak         |
| `--color-focus`   | `#2563EB` | Garis fokus navigasi papan ketik     |
| `--radius-md`     | `0.5rem`  | Sudut membulat pada tombol dan kartu |
| `--space-4`       | `1rem`    | Jarak standar antar elemen           |

Kriteria selesai saya: mengubah `--color-primary` di satu baris pada berkas `tokens.css` harus mengubah warna tombol, tautan, judul, dan garis fokus secara otomatis pada seluruh halaman.
