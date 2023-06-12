// vite.config.ts
import react from "file:///D:/Git_Repos/LeetNotes/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve as resolve3 } from "path";
import { defineConfig } from "file:///D:/Git_Repos/LeetNotes/node_modules/vite/dist/node/index.js";

// utils/plugins/make-manifest.ts
import * as fs from "fs";
import * as path from "path";

// utils/log.ts
function colorLog(message, type) {
  let color = type || COLORS.FgBlack;
  switch (type) {
    case "success":
      color = COLORS.FgGreen;
      break;
    case "info":
      color = COLORS.FgBlue;
      break;
    case "error":
      color = COLORS.FgRed;
      break;
    case "warning":
      color = COLORS.FgYellow;
      break;
  }
  console.log(color, message);
}
var COLORS = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m"
};

// package.json
var package_default = {
  name: "LeetNotes",
  displayName: "Leetnotes",
  version: "0.1.0",
  description: "LeetNotes is a Chrome Extension which enhances your LeetCode notes experience by allowing you to draw your imagination and visualize problem solutions. It also provides various additional features to track your progress, collaborate with friends, and seamlessly integrate with Obsidian for note-taking.",
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/Glenn-Mendonca/LeetNotes.git"
  },
  scripts: {
    build: "vite build",
    dev: "nodemon"
  },
  type: "module",
  dependencies: {
    "@excalidraw/excalidraw": "^0.15.2",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "vite-plugin-css-injected-by-js": "^3.1.1",
    "webextension-polyfill": "^0.10.0"
  },
  devDependencies: {
    "@types/chrome": "^0.0.237",
    "@types/fs-extra": "^11.0.1",
    "@types/node": "^18.11.18",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@types/webextension-polyfill": "^0.10.0",
    "@typescript-eslint/eslint-plugin": "^5.49.0",
    "@typescript-eslint/parser": "^5.49.0",
    "@vitejs/plugin-react-swc": "^3.0.1",
    autoprefixer: "^10.4.13",
    eslint: "^8.32.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-react": "^7.32.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "fs-extra": "^11.1.1",
    nodemon: "^2.0.20",
    postcss: "^8.4.21",
    tailwindcss: "^3.2.4",
    "ts-node": "^10.9.1",
    typescript: "^4.9.4",
    vite: "^4.0.4"
  }
};

// src/manifest.ts
var manifest = {
  manifest_version: 3,
  name: package_default.displayName,
  version: package_default.version,
  description: package_default.description,
  // options_ui: {
  //   page: "src/pages/options/index.html",
  // },
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module"
  },
  action: {
    default_popup: "src/pages/popup/index.html"
    // default_icon: "icon-34.png",
  },
  // icons: {
  //   "128": "icon-128.png",
  // },
  permissions: ["activeTab"],
  content_scripts: [
    {
      matches: ["https://leetcode.com/problems/*"],
      js: ["src/pages/content/index.js"]
      // css: ["contentStyle.css"],
    }
  ],
  // devtools_page: "src/pages/devtools/index.html",
  // web_accessible_resources: [
  //   {
  //     resources: ["contentStyle.css", "icon-128.png", "icon-34.png"],
  //     matches: [],
  //   },
  // ],
  web_accessible_resources: ["assets/*"]
};
var manifest_default = manifest;

// utils/plugins/make-manifest.ts
var __vite_injected_original_dirname = "D:\\Git_Repos\\LeetNotes\\utils\\plugins";
var { resolve } = path;
var outDir = resolve(__vite_injected_original_dirname, "..", "..", "public");
function makeManifest() {
  return {
    name: "make-manifest",
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }
      const manifestPath = resolve(outDir, "manifest.json");
      fs.writeFileSync(manifestPath, JSON.stringify(manifest_default, null, 2));
      colorLog(`Manifest file copy complete: ${manifestPath}`, "success");
    }
  };
}

// utils/plugins/build-content-script.ts
import { build } from "file:///D:/Git_Repos/LeetNotes/node_modules/vite/dist/node/index.js";
import { resolve as resolve2 } from "path";
import fs2 from "file:///D:/Git_Repos/LeetNotes/node_modules/fs-extra/lib/index.js";

// utils/constants.ts
var outputFolderName = "dist";

// utils/plugins/build-content-script.ts
import cssInjectedByJsPlugin from "file:///D:/Git_Repos/LeetNotes/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
var __vite_injected_original_dirname2 = "D:\\Git_Repos\\LeetNotes\\utils\\plugins";
var packages = [
  {
    content: resolve2(__vite_injected_original_dirname2, "../../", "src/pages/content/index.tsx")
  }
];
var outDir2 = resolve2(__vite_injected_original_dirname2, "../../", outputFolderName);
try {
  const excalidrawAssets = resolve2(
    __vite_injected_original_dirname2,
    "../../",
    "node_modules/@excalidraw/excalidraw/dist/excalidraw-assets"
  );
  fs2.mkdirSync(resolve2(outDir2, "assets", "excalidraw-assets"));
  fs2.copySync(excalidrawAssets, resolve2(outDir2, "assets", "excalidraw-assets"));
} catch (error) {
  colorLog("Excalidraw assets not found", "error");
  console.log(error);
  process.exit(1);
}
function buildContentScript() {
  return {
    name: "build-content",
    async buildEnd() {
      for (const _package of packages) {
        await build({
          esbuild: {
            charset: "ascii"
          },
          publicDir: false,
          plugins: [cssInjectedByJsPlugin()],
          build: {
            outDir: outDir2,
            sourcemap: process.env.__DEV__ === "true",
            emptyOutDir: false,
            rollupOptions: {
              input: _package,
              output: {
                entryFileNames: (chunk) => {
                  return `src/pages/${chunk.name}/index.js`;
                }
              }
            }
          },
          configFile: false
        });
      }
      colorLog("Content code build sucessfully", "success");
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname3 = "D:\\Git_Repos\\LeetNotes";
var root = resolve3(__vite_injected_original_dirname3, "src");
var pagesDir = resolve3(root, "pages");
var assetsDir = resolve3(root, "assets");
var outDir3 = resolve3(__vite_injected_original_dirname3, outputFolderName);
var publicDir = resolve3(__vite_injected_original_dirname3, "public");
var vite_config_default = defineConfig({
  esbuild: {
    charset: "ascii"
  },
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir
    }
  },
  plugins: [react(), makeManifest(), buildContentScript()],
  publicDir,
  build: {
    outDir: outDir3,
    sourcemap: process.env.__DEV__ === "true",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        // devtools: resolve(pagesDir, "devtools", "index.html"),
        // panel: resolve(pagesDir, "panel", "index.html"),
        background: resolve3(pagesDir, "background", "index.ts"),
        popup: resolve3(pagesDir, "popup", "index.html")
        // options: resolve(pagesDir, "options", "index.html"),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzIiwgInV0aWxzL2xvZy50cyIsICJwYWNrYWdlLmpzb24iLCAic3JjL21hbmlmZXN0LnRzIiwgInV0aWxzL3BsdWdpbnMvYnVpbGQtY29udGVudC1zY3JpcHQudHMiLCAidXRpbHMvY29uc3RhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcR2l0X1JlcG9zXFxcXExlZXROb3Rlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0X1JlcG9zXFxcXExlZXROb3Rlc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0X1JlcG9zL0xlZXROb3Rlcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgbWFrZU1hbmlmZXN0IGZyb20gXCIuL3V0aWxzL3BsdWdpbnMvbWFrZS1tYW5pZmVzdFwiO1xyXG5pbXBvcnQgYnVpbGRDb250ZW50U2NyaXB0IGZyb20gXCIuL3V0aWxzL3BsdWdpbnMvYnVpbGQtY29udGVudC1zY3JpcHRcIjtcclxuaW1wb3J0IHsgb3V0cHV0Rm9sZGVyTmFtZSB9IGZyb20gXCIuL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3Qgcm9vdCA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcclxuY29uc3QgcGFnZXNEaXIgPSByZXNvbHZlKHJvb3QsIFwicGFnZXNcIik7XHJcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XHJcbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCBvdXRwdXRGb2xkZXJOYW1lKTtcclxuY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwicHVibGljXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBlc2J1aWxkOiB7XHJcbiAgICBjaGFyc2V0OiBcImFzY2lpXCIsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBzcmNcIjogcm9vdCxcclxuICAgICAgXCJAYXNzZXRzXCI6IGFzc2V0c0RpcixcclxuICAgICAgXCJAcGFnZXNcIjogcGFnZXNEaXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCksIG1ha2VNYW5pZmVzdCgpLCBidWlsZENvbnRlbnRTY3JpcHQoKV0sXHJcbiAgcHVibGljRGlyLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXIsXHJcbiAgICBzb3VyY2VtYXA6IHByb2Nlc3MuZW52Ll9fREVWX18gPT09IFwidHJ1ZVwiLFxyXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIC8vIGRldnRvb2xzOiByZXNvbHZlKHBhZ2VzRGlyLCBcImRldnRvb2xzXCIsIFwiaW5kZXguaHRtbFwiKSxcclxuICAgICAgICAvLyBwYW5lbDogcmVzb2x2ZShwYWdlc0RpciwgXCJwYW5lbFwiLCBcImluZGV4Lmh0bWxcIiksXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVzb2x2ZShwYWdlc0RpciwgXCJiYWNrZ3JvdW5kXCIsIFwiaW5kZXgudHNcIiksXHJcbiAgICAgICAgcG9wdXA6IHJlc29sdmUocGFnZXNEaXIsIFwicG9wdXBcIiwgXCJpbmRleC5odG1sXCIpLFxyXG4gICAgICAgIC8vIG9wdGlvbnM6IHJlc29sdmUocGFnZXNEaXIsIFwib3B0aW9uc1wiLCBcImluZGV4Lmh0bWxcIiksXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAoY2h1bmspID0+IGBzcmMvcGFnZXMvJHtjaHVuay5uYW1lfS9pbmRleC5qc2AsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEdpdF9SZXBvc1xcXFxMZWV0Tm90ZXNcXFxcdXRpbHNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0X1JlcG9zXFxcXExlZXROb3Rlc1xcXFx1dGlsc1xcXFxwbHVnaW5zXFxcXG1ha2UtbWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdF9SZXBvcy9MZWV0Tm90ZXMvdXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzXCI7aW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgY29sb3JMb2cgZnJvbSAnLi4vbG9nJztcclxuaW1wb3J0IG1hbmlmZXN0IGZyb20gJy4uLy4uL3NyYy9tYW5pZmVzdCc7XHJcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuY29uc3QgeyByZXNvbHZlIH0gPSBwYXRoO1xyXG5cclxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICcuLicsICdwdWJsaWMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VNYW5pZmVzdCgpOiBQbHVnaW5PcHRpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnbWFrZS1tYW5pZmVzdCcsXHJcbiAgICBidWlsZEVuZCgpIHtcclxuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKG91dERpcikpIHtcclxuICAgICAgICBmcy5ta2RpclN5bmMob3V0RGlyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWFuaWZlc3RQYXRoID0gcmVzb2x2ZShvdXREaXIsICdtYW5pZmVzdC5qc29uJyk7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgSlNPTi5zdHJpbmdpZnkobWFuaWZlc3QsIG51bGwsIDIpKTtcclxuXHJcbiAgICAgIGNvbG9yTG9nKGBNYW5pZmVzdCBmaWxlIGNvcHkgY29tcGxldGU6ICR7bWFuaWZlc3RQYXRofWAsICdzdWNjZXNzJyk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRfUmVwb3NcXFxcTGVldE5vdGVzXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRfUmVwb3NcXFxcTGVldE5vdGVzXFxcXHV0aWxzXFxcXGxvZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0X1JlcG9zL0xlZXROb3Rlcy91dGlscy9sb2cudHNcIjt0eXBlIENvbG9yVHlwZSA9ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCBrZXlvZiB0eXBlb2YgQ09MT1JTO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JMb2cobWVzc2FnZTogc3RyaW5nLCB0eXBlPzogQ29sb3JUeXBlKSB7XHJcbiAgbGV0IGNvbG9yOiBzdHJpbmcgPSB0eXBlIHx8IENPTE9SUy5GZ0JsYWNrO1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0dyZWVuO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0JsdWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICBjb2xvciA9IENPTE9SUy5GZ1JlZDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdZZWxsb3c7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coY29sb3IsIG1lc3NhZ2UpO1xyXG59XHJcblxyXG5jb25zdCBDT0xPUlMgPSB7XHJcbiAgUmVzZXQ6ICdcXHgxYlswbScsXHJcbiAgQnJpZ2h0OiAnXFx4MWJbMW0nLFxyXG4gIERpbTogJ1xceDFiWzJtJyxcclxuICBVbmRlcnNjb3JlOiAnXFx4MWJbNG0nLFxyXG4gIEJsaW5rOiAnXFx4MWJbNW0nLFxyXG4gIFJldmVyc2U6ICdcXHgxYls3bScsXHJcbiAgSGlkZGVuOiAnXFx4MWJbOG0nLFxyXG4gIEZnQmxhY2s6ICdcXHgxYlszMG0nLFxyXG4gIEZnUmVkOiAnXFx4MWJbMzFtJyxcclxuICBGZ0dyZWVuOiAnXFx4MWJbMzJtJyxcclxuICBGZ1llbGxvdzogJ1xceDFiWzMzbScsXHJcbiAgRmdCbHVlOiAnXFx4MWJbMzRtJyxcclxuICBGZ01hZ2VudGE6ICdcXHgxYlszNW0nLFxyXG4gIEZnQ3lhbjogJ1xceDFiWzM2bScsXHJcbiAgRmdXaGl0ZTogJ1xceDFiWzM3bScsXHJcbiAgQmdCbGFjazogJ1xceDFiWzQwbScsXHJcbiAgQmdSZWQ6ICdcXHgxYls0MW0nLFxyXG4gIEJnR3JlZW46ICdcXHgxYls0Mm0nLFxyXG4gIEJnWWVsbG93OiAnXFx4MWJbNDNtJyxcclxuICBCZ0JsdWU6ICdcXHgxYls0NG0nLFxyXG4gIEJnTWFnZW50YTogJ1xceDFiWzQ1bScsXHJcbiAgQmdDeWFuOiAnXFx4MWJbNDZtJyxcclxuICBCZ1doaXRlOiAnXFx4MWJbNDdtJyxcclxufSBhcyBjb25zdDtcclxuIiwgIntcclxuICBcIm5hbWVcIjogXCJMZWV0Tm90ZXNcIixcclxuICBcImRpc3BsYXlOYW1lXCI6IFwiTGVldG5vdGVzXCIsXHJcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTGVldE5vdGVzIGlzIGEgQ2hyb21lIEV4dGVuc2lvbiB3aGljaCBlbmhhbmNlcyB5b3VyIExlZXRDb2RlIG5vdGVzIGV4cGVyaWVuY2UgYnkgYWxsb3dpbmcgeW91IHRvIGRyYXcgeW91ciBpbWFnaW5hdGlvbiBhbmQgdmlzdWFsaXplIHByb2JsZW0gc29sdXRpb25zLiBJdCBhbHNvIHByb3ZpZGVzIHZhcmlvdXMgYWRkaXRpb25hbCBmZWF0dXJlcyB0byB0cmFjayB5b3VyIHByb2dyZXNzLCBjb2xsYWJvcmF0ZSB3aXRoIGZyaWVuZHMsIGFuZCBzZWFtbGVzc2x5IGludGVncmF0ZSB3aXRoIE9ic2lkaWFuIGZvciBub3RlLXRha2luZy5cIixcclxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcclxuICBcInJlcG9zaXRvcnlcIjoge1xyXG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9HbGVubi1NZW5kb25jYS9MZWV0Tm90ZXMuZ2l0XCJcclxuICB9LFxyXG4gIFwic2NyaXB0c1wiOiB7XHJcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxyXG4gICAgXCJkZXZcIjogXCJub2RlbW9uXCJcclxuICB9LFxyXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGV4Y2FsaWRyYXcvZXhjYWxpZHJhd1wiOiBcIl4wLjE1LjJcIixcclxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXHJcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcclxuICAgIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI6IFwiXjMuMS4xXCIsXHJcbiAgICBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOiBcIl4wLjEwLjBcIlxyXG4gIH0sXHJcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJAdHlwZXMvY2hyb21lXCI6IFwiXjAuMC4yMzdcIixcclxuICAgIFwiQHR5cGVzL2ZzLWV4dHJhXCI6IFwiXjExLjAuMVwiLFxyXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4xOC4xMS4xOFwiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMC4yN1wiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjAuMTBcIixcclxuICAgIFwiQHR5cGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOiBcIl4wLjEwLjBcIixcclxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNS40OS4wXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNS40OS4wXCIsXHJcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiOiBcIl4zLjAuMVwiLFxyXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xM1wiLFxyXG4gICAgXCJlc2xpbnRcIjogXCJeOC4zMi4wXCIsXHJcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOC42LjBcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yNy41XCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeNi43LjFcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjMyLjFcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjMuMFwiLFxyXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4xLjFcIixcclxuICAgIFwibm9kZW1vblwiOiBcIl4yLjAuMjBcIixcclxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMjFcIixcclxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy4yLjRcIixcclxuICAgIFwidHMtbm9kZVwiOiBcIl4xMC45LjFcIixcclxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl40LjkuNFwiLFxyXG4gICAgXCJ2aXRlXCI6IFwiXjQuMC40XCJcclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRfUmVwb3NcXFxcTGVldE5vdGVzXFxcXHNyY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0X1JlcG9zXFxcXExlZXROb3Rlc1xcXFxzcmNcXFxcbWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdF9SZXBvcy9MZWV0Tm90ZXMvc3JjL21hbmlmZXN0LnRzXCI7aW1wb3J0IHR5cGUgeyBNYW5pZmVzdCB9IGZyb20gXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcclxuaW1wb3J0IHBrZyBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XHJcblxyXG5jb25zdCBtYW5pZmVzdDogTWFuaWZlc3QuV2ViRXh0ZW5zaW9uTWFuaWZlc3QgPSB7XHJcbiAgbWFuaWZlc3RfdmVyc2lvbjogMyxcclxuICBuYW1lOiBwa2cuZGlzcGxheU5hbWUsXHJcbiAgdmVyc2lvbjogcGtnLnZlcnNpb24sXHJcbiAgZGVzY3JpcHRpb246IHBrZy5kZXNjcmlwdGlvbixcclxuICAvLyBvcHRpb25zX3VpOiB7XHJcbiAgLy8gICBwYWdlOiBcInNyYy9wYWdlcy9vcHRpb25zL2luZGV4Lmh0bWxcIixcclxuICAvLyB9LFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIHNlcnZpY2Vfd29ya2VyOiBcInNyYy9wYWdlcy9iYWNrZ3JvdW5kL2luZGV4LmpzXCIsXHJcbiAgICB0eXBlOiBcIm1vZHVsZVwiLFxyXG4gIH0sXHJcbiAgYWN0aW9uOiB7XHJcbiAgICBkZWZhdWx0X3BvcHVwOiBcInNyYy9wYWdlcy9wb3B1cC9pbmRleC5odG1sXCIsXHJcbiAgICAvLyBkZWZhdWx0X2ljb246IFwiaWNvbi0zNC5wbmdcIixcclxuICB9LFxyXG4gIC8vIGljb25zOiB7XHJcbiAgLy8gICBcIjEyOFwiOiBcImljb24tMTI4LnBuZ1wiLFxyXG4gIC8vIH0sXHJcbiAgcGVybWlzc2lvbnM6IFtcImFjdGl2ZVRhYlwiXSxcclxuICBjb250ZW50X3NjcmlwdHM6IFtcclxuICAgIHtcclxuICAgICAgbWF0Y2hlczogW1wiaHR0cHM6Ly9sZWV0Y29kZS5jb20vcHJvYmxlbXMvKlwiXSxcclxuICAgICAganM6IFtcInNyYy9wYWdlcy9jb250ZW50L2luZGV4LmpzXCJdLFxyXG4gICAgICAvLyBjc3M6IFtcImNvbnRlbnRTdHlsZS5jc3NcIl0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gZGV2dG9vbHNfcGFnZTogXCJzcmMvcGFnZXMvZGV2dG9vbHMvaW5kZXguaHRtbFwiLFxyXG4gIC8vIHdlYl9hY2Nlc3NpYmxlX3Jlc291cmNlczogW1xyXG4gIC8vICAge1xyXG4gIC8vICAgICByZXNvdXJjZXM6IFtcImNvbnRlbnRTdHlsZS5jc3NcIiwgXCJpY29uLTEyOC5wbmdcIiwgXCJpY29uLTM0LnBuZ1wiXSxcclxuICAvLyAgICAgbWF0Y2hlczogW10sXHJcbiAgLy8gICB9LFxyXG4gIC8vIF0sXHJcbiAgd2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzOiBbXCJhc3NldHMvKlwiXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hbmlmZXN0O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEdpdF9SZXBvc1xcXFxMZWV0Tm90ZXNcXFxcdXRpbHNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0X1JlcG9zXFxcXExlZXROb3Rlc1xcXFx1dGlsc1xcXFxwbHVnaW5zXFxcXGJ1aWxkLWNvbnRlbnQtc2NyaXB0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9HaXRfUmVwb3MvTGVldE5vdGVzL3V0aWxzL3BsdWdpbnMvYnVpbGQtY29udGVudC1zY3JpcHQudHNcIjtpbXBvcnQgY29sb3JMb2cgZnJvbSBcIi4uL2xvZ1wiO1xyXG5pbXBvcnQgeyBQbHVnaW5PcHRpb24sIGJ1aWxkIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnMtZXh0cmFcIjtcclxuaW1wb3J0IHsgb3V0cHV0Rm9sZGVyTmFtZSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI7XHJcblxyXG5jb25zdCBwYWNrYWdlcyA9IFtcclxuICB7XHJcbiAgICBjb250ZW50OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi8uLi9cIiwgXCJzcmMvcGFnZXMvY29udGVudC9pbmRleC50c3hcIiksXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uLy4uL1wiLCBvdXRwdXRGb2xkZXJOYW1lKTtcclxuXHJcbi8vIEV4Y2FsaWRyYXcgYXNzZXRzXHJcbnRyeSB7XHJcbiAgY29uc3QgZXhjYWxpZHJhd0Fzc2V0cyA9IHJlc29sdmUoXHJcbiAgICBfX2Rpcm5hbWUsXHJcbiAgICBcIi4uLy4uL1wiLFxyXG4gICAgXCJub2RlX21vZHVsZXMvQGV4Y2FsaWRyYXcvZXhjYWxpZHJhdy9kaXN0L2V4Y2FsaWRyYXctYXNzZXRzXCJcclxuICApO1xyXG4gIGZzLm1rZGlyU3luYyhyZXNvbHZlKG91dERpciwgXCJhc3NldHNcIiwgXCJleGNhbGlkcmF3LWFzc2V0c1wiKSk7XHJcbiAgZnMuY29weVN5bmMoZXhjYWxpZHJhd0Fzc2V0cywgcmVzb2x2ZShvdXREaXIsIFwiYXNzZXRzXCIsIFwiZXhjYWxpZHJhdy1hc3NldHNcIikpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIGNvbG9yTG9nKFwiRXhjYWxpZHJhdyBhc3NldHMgbm90IGZvdW5kXCIsIFwiZXJyb3JcIik7XHJcbiAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIHByb2Nlc3MuZXhpdCgxKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb250ZW50U2NyaXB0KCk6IFBsdWdpbk9wdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwiYnVpbGQtY29udGVudFwiLFxyXG4gICAgYXN5bmMgYnVpbGRFbmQoKSB7XHJcbiAgICAgIGZvciAoY29uc3QgX3BhY2thZ2Ugb2YgcGFja2FnZXMpIHtcclxuICAgICAgICBhd2FpdCBidWlsZCh7XHJcbiAgICAgICAgICBlc2J1aWxkOiB7XHJcbiAgICAgICAgICAgIGNoYXJzZXQ6IFwiYXNjaWlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwdWJsaWNEaXI6IGZhbHNlLFxyXG4gICAgICAgICAgcGx1Z2luczogW2Nzc0luamVjdGVkQnlKc1BsdWdpbigpXSxcclxuICAgICAgICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgICAgIG91dERpcixcclxuICAgICAgICAgICAgc291cmNlbWFwOiBwcm9jZXNzLmVudi5fX0RFVl9fID09PSBcInRydWVcIixcclxuICAgICAgICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxyXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgaW5wdXQ6IF9wYWNrYWdlLFxyXG4gICAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6IChjaHVuaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYHNyYy9wYWdlcy8ke2NodW5rLm5hbWV9L2luZGV4LmpzYDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb25maWdGaWxlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb2xvckxvZyhcIkNvbnRlbnQgY29kZSBidWlsZCBzdWNlc3NmdWxseVwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRfUmVwb3NcXFxcTGVldE5vdGVzXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRfUmVwb3NcXFxcTGVldE5vdGVzXFxcXHV0aWxzXFxcXGNvbnN0YW50cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0X1JlcG9zL0xlZXROb3Rlcy91dGlscy9jb25zdGFudHMudHNcIjtleHBvcnQgY29uc3Qgb3V0cHV0Rm9sZGVyTmFtZSA9ICdkaXN0JztcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUCxPQUFPLFdBQVc7QUFDNVEsU0FBUyxXQUFBQSxnQkFBZTtBQUN4QixTQUFTLG9CQUFvQjs7O0FDRitRLFlBQVksUUFBUTtBQUNoVSxZQUFZLFVBQVU7OztBQ0NQLFNBQVIsU0FBMEIsU0FBaUIsTUFBa0I7QUFDbEUsTUFBSSxRQUFnQixRQUFRLE9BQU87QUFFbkMsVUFBUSxNQUFNO0FBQUEsSUFDWixLQUFLO0FBQ0gsY0FBUSxPQUFPO0FBQ2Y7QUFBQSxJQUNGLEtBQUs7QUFDSCxjQUFRLE9BQU87QUFDZjtBQUFBLElBQ0YsS0FBSztBQUNILGNBQVEsT0FBTztBQUNmO0FBQUEsSUFDRixLQUFLO0FBQ0gsY0FBUSxPQUFPO0FBQ2Y7QUFBQSxFQUNKO0FBRUEsVUFBUSxJQUFJLE9BQU8sT0FBTztBQUM1QjtBQUVBLElBQU0sU0FBUztBQUFBLEVBQ2IsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUNYOzs7QUMvQ0E7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLGFBQWU7QUFBQSxFQUNmLFNBQVc7QUFBQSxFQUNYLGFBQWU7QUFBQSxFQUNmLFNBQVc7QUFBQSxFQUNYLFlBQWM7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxPQUFTO0FBQUEsSUFDVCxLQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsTUFBUTtBQUFBLEVBQ1IsY0FBZ0I7QUFBQSxJQUNkLDBCQUEwQjtBQUFBLElBQzFCLE9BQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLGtDQUFrQztBQUFBLElBQ2xDLHlCQUF5QjtBQUFBLEVBQzNCO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixpQkFBaUI7QUFBQSxJQUNqQixtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsSUFDZixnQkFBZ0I7QUFBQSxJQUNoQixvQkFBb0I7QUFBQSxJQUNwQixnQ0FBZ0M7QUFBQSxJQUNoQyxvQ0FBb0M7QUFBQSxJQUNwQyw2QkFBNkI7QUFBQSxJQUM3Qiw0QkFBNEI7QUFBQSxJQUM1QixjQUFnQjtBQUFBLElBQ2hCLFFBQVU7QUFBQSxJQUNWLDBCQUEwQjtBQUFBLElBQzFCLHdCQUF3QjtBQUFBLElBQ3hCLDBCQUEwQjtBQUFBLElBQzFCLHVCQUF1QjtBQUFBLElBQ3ZCLDZCQUE2QjtBQUFBLElBQzdCLFlBQVk7QUFBQSxJQUNaLFNBQVc7QUFBQSxJQUNYLFNBQVc7QUFBQSxJQUNYLGFBQWU7QUFBQSxJQUNmLFdBQVc7QUFBQSxJQUNYLFlBQWM7QUFBQSxJQUNkLE1BQVE7QUFBQSxFQUNWO0FBQ0Y7OztBQzVDQSxJQUFNLFdBQTBDO0FBQUEsRUFDOUMsa0JBQWtCO0FBQUEsRUFDbEIsTUFBTSxnQkFBSTtBQUFBLEVBQ1YsU0FBUyxnQkFBSTtBQUFBLEVBQ2IsYUFBYSxnQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSWpCLFlBQVk7QUFBQSxJQUNWLGdCQUFnQjtBQUFBLElBQ2hCLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlO0FBQUE7QUFBQSxFQUVqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsYUFBYSxDQUFDLFdBQVc7QUFBQSxFQUN6QixpQkFBaUI7QUFBQSxJQUNmO0FBQUEsTUFDRSxTQUFTLENBQUMsaUNBQWlDO0FBQUEsTUFDM0MsSUFBSSxDQUFDLDRCQUE0QjtBQUFBO0FBQUEsSUFFbkM7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLDBCQUEwQixDQUFDLFVBQVU7QUFDdkM7QUFFQSxJQUFPLG1CQUFROzs7QUh4Q2YsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxFQUFFLFFBQVEsSUFBSTtBQUVwQixJQUFNLFNBQVMsUUFBUSxrQ0FBVyxNQUFNLE1BQU0sUUFBUTtBQUV2QyxTQUFSLGVBQThDO0FBQ25ELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFDVCxVQUFJLENBQUksY0FBVyxNQUFNLEdBQUc7QUFDMUIsUUFBRyxhQUFVLE1BQU07QUFBQSxNQUNyQjtBQUVBLFlBQU0sZUFBZSxRQUFRLFFBQVEsZUFBZTtBQUVwRCxNQUFHLGlCQUFjLGNBQWMsS0FBSyxVQUFVLGtCQUFVLE1BQU0sQ0FBQyxDQUFDO0FBRWhFLGVBQVMsZ0NBQWdDLGdCQUFnQixTQUFTO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBQ0Y7OztBSXhCQSxTQUF1QixhQUFhO0FBQ3BDLFNBQVMsV0FBQUMsZ0JBQWU7QUFDeEIsT0FBT0MsU0FBUTs7O0FDSGtRLElBQU0sbUJBQW1COzs7QURLMVMsT0FBTywyQkFBMkI7QUFMbEMsSUFBTUMsb0NBQW1DO0FBT3pDLElBQU0sV0FBVztBQUFBLEVBQ2Y7QUFBQSxJQUNFLFNBQVNDLFNBQVFDLG1DQUFXLFVBQVUsNkJBQTZCO0FBQUEsRUFDckU7QUFDRjtBQUVBLElBQU1DLFVBQVNGLFNBQVFDLG1DQUFXLFVBQVUsZ0JBQWdCO0FBRzVELElBQUk7QUFDRixRQUFNLG1CQUFtQkQ7QUFBQSxJQUN2QkM7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDQSxFQUFBRSxJQUFHLFVBQVVILFNBQVFFLFNBQVEsVUFBVSxtQkFBbUIsQ0FBQztBQUMzRCxFQUFBQyxJQUFHLFNBQVMsa0JBQWtCSCxTQUFRRSxTQUFRLFVBQVUsbUJBQW1CLENBQUM7QUFDOUUsU0FBUyxPQUFQO0FBQ0EsV0FBUywrQkFBK0IsT0FBTztBQUMvQyxVQUFRLElBQUksS0FBSztBQUNqQixVQUFRLEtBQUssQ0FBQztBQUNoQjtBQUVlLFNBQVIscUJBQW9EO0FBQ3pELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU0sV0FBVztBQUNmLGlCQUFXLFlBQVksVUFBVTtBQUMvQixjQUFNLE1BQU07QUFBQSxVQUNWLFNBQVM7QUFBQSxZQUNQLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQSxXQUFXO0FBQUEsVUFDWCxTQUFTLENBQUMsc0JBQXNCLENBQUM7QUFBQSxVQUNqQyxPQUFPO0FBQUEsWUFDTCxRQUFBQTtBQUFBLFlBQ0EsV0FBVyxRQUFRLElBQUksWUFBWTtBQUFBLFlBQ25DLGFBQWE7QUFBQSxZQUNiLGVBQWU7QUFBQSxjQUNiLE9BQU87QUFBQSxjQUNQLFFBQVE7QUFBQSxnQkFDTixnQkFBZ0IsQ0FBQyxVQUFVO0FBQ3pCLHlCQUFPLGFBQWEsTUFBTTtBQUFBLGdCQUM1QjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsWUFBWTtBQUFBLFFBQ2QsQ0FBQztBQUFBLE1BQ0g7QUFDQSxlQUFTLGtDQUFrQyxTQUFTO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0Y7OztBTDVEQSxJQUFNRSxvQ0FBbUM7QUFPekMsSUFBTSxPQUFPQyxTQUFRQyxtQ0FBVyxLQUFLO0FBQ3JDLElBQU0sV0FBV0QsU0FBUSxNQUFNLE9BQU87QUFDdEMsSUFBTSxZQUFZQSxTQUFRLE1BQU0sUUFBUTtBQUN4QyxJQUFNRSxVQUFTRixTQUFRQyxtQ0FBVyxnQkFBZ0I7QUFDbEQsSUFBTSxZQUFZRCxTQUFRQyxtQ0FBVyxRQUFRO0FBRTdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLG1CQUFtQixDQUFDO0FBQUEsRUFDdkQ7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQUFDO0FBQUEsSUFDQSxXQUFXLFFBQVEsSUFBSSxZQUFZO0FBQUEsSUFDbkMsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBO0FBQUE7QUFBQSxRQUdMLFlBQVlGLFNBQVEsVUFBVSxjQUFjLFVBQVU7QUFBQSxRQUN0RCxPQUFPQSxTQUFRLFVBQVUsU0FBUyxZQUFZO0FBQUE7QUFBQSxNQUVoRDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsVUFBVSxhQUFhLE1BQU07QUFBQSxNQUNoRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicmVzb2x2ZSIsICJyZXNvbHZlIiwgImZzIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAib3V0RGlyIiwgImZzIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAib3V0RGlyIl0KfQo=
