import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

pasangPendengar();
render(state);
