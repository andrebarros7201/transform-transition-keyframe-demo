import "./style.css";
import { transformAll } from "./demos/transform";

const transform = document.querySelector("#transform");
const transition = document.querySelector("#transition");
const keyframes = document.querySelector("#keyframes");

transform.addEventListener("click", () => {
  transformAll();
});
