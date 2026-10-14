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

export function tandaiTombolAktif(kategoriAktif) {
  if (!barisFilter) return;

  barisFilter.querySelectorAll("button").forEach((tombol) => {
    if (tombol.id === "btn-reset") return;

    // Membandingkan data-kategori tombol dengan kategoriAktif dari state
    const KategoriTombol = tombol.dataset.kategori || "semua";
    tombol.classList.toggle("aktif", KategoriTombol === kategoriAktif);
  });
}

// Menggambar tampilan berdasarkan state
export function render(state) {
  if (!wadah || !pesanKosong) return;

  // 1. Tandai tombol aktif sesuai kategori di state (penting untuk localStorage)
  tandaiTombolAktif(state.kategoriAktif);

  // 2. Kosongkan tampilan sebelumnya
  wadah.textContent = "";

  // 3. Pilih proyek sesuai kategori aktif
  const daftarTampil = state.daftarProyek.filter((proyek) => {
    return (
      state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
    );
  });

  // 4. Tangani kondisi jika tidak ada proyek
  if (daftarTampil.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  // 5. Gambar kartu proyek
  daftarTampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}
