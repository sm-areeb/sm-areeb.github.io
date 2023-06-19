import "preact/debug";
import { render } from "preact";
import html from "html";
import App from "./src/App.js";

render(html`<${App} />`, document.getElementById("root"));
