const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

// Membuat satu kartu proyek
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;

  return li;
}

// Menggambar tampilan berdasarkan state
export function render(state) {
  if (!wadah || !pesanKosong) return;

  // 1. Kosongkan tampilan sebelumnya
  wadah.textContent = "";

  // 2. Pilih proyek sesuai kategori aktif
  const daftarTampil = state.daftarProyek.filter((proyek) => {
    return (
      state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
    );
  });

  // 3. Tangani kondisi jika tidak ada proyek
  if (daftarTampil.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  // 4. Gambar kartu proyek
  daftarTampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

// Menandai tombol filter yang sedang aktif
export function tandaiTombolAktif(tombolAktif) {
  if (!barisFilter) return;

  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}
