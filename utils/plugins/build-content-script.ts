import colorLog from "../log";
import { PluginOption, build } from "vite";
import { resolve } from "path";
import fs from "fs-extra";
import { outputFolderName } from "../constants";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const packages = [
  {
    content: resolve(__dirname, "../../", "src/pages/content/index.tsx"),
  },
];

const outDir = resolve(__dirname, "../../", outputFolderName);

// Excalidraw assets
try {
  const excalidrawAssets = resolve(
    __dirname,
    "../../",
    "node_modules/@excalidraw/excalidraw/dist/excalidraw-assets"
  );
  //fs mkdir if not exist
  if (!fs.existsSync(resolve(outDir, "assets")))
    fs.mkdirSync(resolve(outDir, "assets"));
  // fs.copySync("src/assets/sketchbook.svg", resolve(outDir, "assets"));
  fs.copySync(excalidrawAssets, resolve(outDir, "assets", "excalidraw-assets"));
  fs.copySync(
    resolve(__dirname, "../../", "src/assets/img"),
    resolve(outDir, "assets", "img")
  );
} catch (error) {
  colorLog("Excalidraw assets not found", "error");
  // console.log(error);
  process.exit(1);
}

export default function buildContentScript(): PluginOption {
  return {
    name: "build-content",
    async buildEnd() {
      for (const _package of packages) {
        await build({
          esbuild: {
            charset: "ascii",
          },
          publicDir: false,
          plugins: [cssInjectedByJsPlugin()],
          build: {
            outDir,
            sourcemap: process.env.__DEV__ === "true",
            emptyOutDir: false,
            rollupOptions: {
              input: _package,
              output: {
                entryFileNames: (chunk) => {
                  return `src/pages/${chunk.name}/index.js`;
                },
              },
            },
          },
          configFile: false,
        });
      }
      colorLog("Content code build sucessfully", "success");
    },
  };
}
