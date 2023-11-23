import { resolve } from "path";
import fs from "fs-extra";

const assetsDir = resolve(
  __dirname,
  "..",
  "node_modules",
  "@excalidraw",
  "excalidraw",
  "dist",
  "excalidraw-assets"
);
const distDir = resolve(__dirname, "..", "dist");

export default function resolveExcalidrawAssets() {
  return {
    name: "Excalidraw Assets Resolution",
    writeBundle() {
      console.log("Resolving assets...");
      try {
        if (!fs.existsSync(resolve(distDir, "assets"))) {
          fs.mkdirSync(resolve(distDir, "assets"));
        }
        fs.copySync(assetsDir, resolve(distDir, "assets", "excalidraw-assets"));
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    },
  };
}
