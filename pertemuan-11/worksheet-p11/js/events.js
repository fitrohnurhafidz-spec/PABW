import { state, pilihKategori } from "./state.js";
import { render, tandaiTombolAktif } from "./dom.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");

  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      const kategori = tombol.dataset.kategori;

      pilihKategori(kategori);
      tandaiTombolAktif(tombol);
      render(state);
    });
  }

  const form = document.querySelector("form");

  if (!form) return;

  const inputNama = document.querySelector("#nama");
  const inputEmail = document.querySelector("#email");
  const inputNim = document.querySelector("#nim");
  const inputPesan = document.querySelector("#pesan");

  const tombolKirim = form.querySelector('button[type="submit"]');

  document.querySelectorAll(".pesan-galat").forEach((el) => {
    el.style.display = "none";
  });

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

  function periksaForm() {
    const namaSah = inputNama.value.trim() !== "";
    const emailSah = inputEmail.value.trim().includes("@");
    const nimSah = /^[0-9]{8}$/.test(inputNim.value.trim());
    const pesanSah = inputPesan.value.trim() !== "";

    const semuaSah = namaSah && emailSah && nimSah && pesanSah;

    if (tombolKirim) tombolKirim.disabled = !semuaSah;

    return {
      namaSah,
      emailSah,
      nimSah,
      pesanSah,
      semuaSah,
    };
  }

  form.addEventListener("input", (event) => {
    const t = event.target;

    if (t === inputNama) {
      setGalat(inputNama, inputNama.value.trim() !== "");
    }

    if (t === inputEmail) {
      setGalat(inputEmail, inputEmail.value.trim().includes("@"));
    }

    if (t === inputNim) {
      setGalat(inputNim, /^[0-9]{8}$/.test(inputNim.value.trim()));
    }

    if (t === inputPesan) {
      setGalat(inputPesan, inputPesan.value.trim() !== "");
    }

    periksaForm();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

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
