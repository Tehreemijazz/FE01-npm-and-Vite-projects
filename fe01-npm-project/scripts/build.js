import { cpSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
cpSync("index.html", "dist/index.html");
cpSync("src/browser.js", "dist/src/browser.js", { recursive: true });
console.log("Build complete: see dist/");
