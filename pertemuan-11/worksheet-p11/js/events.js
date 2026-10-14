import { state, pilihKategori, aturUlang } from "./state.js";
import { render } from "./dom.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  const btnReset = document.querySelector("#btn-reset");

  if (barisFilter) {
    barisFilter.addEventListener("click", (e) => {
      const tombol = e.target.closest("button");
      if (!tombol || tombol.id === "btn-reset") return;

      const kategori = tombol.dataset.kategori;
      pilihKategori(kategori);
      render(state);
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      aturUlang();
      render(state);
    });
  }
}
