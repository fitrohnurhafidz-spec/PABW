import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const form = document.querySelector("form");

// B.1 - Fungsi membuat 1 kartu proyek
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

// D.1 - Fungsi Render Terpusat (3 langkah wajib)
function render(daftar) {
  wadah.textContent = ""; // 1. Kosongkan wadah lebih dulu

  if (daftar.length === 0) {
    // 2. Periksa keadaan kosong
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  daftar.forEach((proyek) => {
    // 3. Isi ulang wadah dengan data baru
    wadah.append(buatKartu(proyek));
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Event Delegation untuk Filter
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori,
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

// D.2 - Validasi Form Kontak
if (form) {
  const inputNama = document.querySelector("#nama");
  const inputEmail = document.querySelector("#email");
  const inputNim = document.querySelector("#nim");
  const inputPesan = document.querySelector("#pesan");
  const tombolKirim = form.querySelector('button[type="submit"]');

  // Sembunyikan pesan galat bawaan di awal
  document.querySelectorAll(".pesan-galat").forEach((el) => {
    el.style.display = "none";
  });

  // Fungsi pembantu untuk menampilkan/menyembunyikan galat per kolom
  function setGalat(input, sah) {
    const pKolom = input.closest(".form-kolom");
    const pesanGalat = pKolom ? pKolom.querySelector(".pesan-galat") : null;

    if (sah) {
      input.removeAttribute("aria-invalid");
      if (pesanGalat) pesanGalat.style.display = "none";
    } else {
      input.setAttribute("aria-invalid", "true");
      if (pesanGalat) pesanGalat.style.display = "block";
    }
  }

  // Fungsi untuk memeriksa seluruh isi form
  function periksaForm() {
    const namaSah = inputNama.value.trim() !== "";
    const emailSah = inputEmail.value.trim().includes("@");
    const nimSah = /^[0-9]{8}$/.test(inputNim.value.trim());
    const pesanSah = inputPesan.value.trim() !== "";

    const semuaSah = namaSah && emailSah && nimSah && pesanSah;
    if (tombolKirim) tombolKirim.disabled = !semuaSah;

    return { namaSah, emailSah, nimSah, pesanSah, semuaSah };
  }

  // Validasi saat pengguna ngetik (live validation)
  form.addEventListener("input", (event) => {
    const t = event.target;
    if (t === inputNama) setGalat(inputNama, inputNama.value.trim() !== "");
    if (t === inputEmail)
      setGalat(inputEmail, inputEmail.value.trim().includes("@"));
    if (t === inputNim)
      setGalat(inputNim, /^[0-9]{8}$/.test(inputNim.value.trim()));
    if (t === inputPesan) setGalat(inputPesan, inputPesan.value.trim() !== "");

    periksaForm();
  });

  // Menangani event kirim form
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah halaman reload/memuat ulang

    const hasil = periksaForm();

    if (!hasil.semuaSah) {
      if (!hasil.namaSah) inputNama.focus();
      else if (!hasil.emailSah) inputEmail.focus();
      else if (!hasil.nimSah) inputNim.focus();
      else if (!hasil.pesanSah) inputPesan.focus();
      return;
    }

    alert("Pesan berhasil dikirim!");
    form.reset();
    periksaForm();
  });

  periksaForm();
}

// Render awal daftar proyek
render(daftarProyek);
