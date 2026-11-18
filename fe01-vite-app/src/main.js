import "./style.css";
import dayjs from "dayjs";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>My FE01 Vite App</h1>
    <p>Today is ${dayjs().format("dddd, MMMM D, YYYY")}</p>
    <p>Mode: ${import.meta.env.MODE}</p>
    <p>App name: ${import.meta.env.VITE_APP_NAME}</p>
    <button id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector("#counter"));