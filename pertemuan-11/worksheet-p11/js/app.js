import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

// Pasang seluruh pendengar peristiwa
pasangPendengar();

// Gambar tampilan awal berdasarkan state
render(state);
