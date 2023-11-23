import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import resolveAssets from "./plugins/resolveAssets.js";
import manifest from "./manifest.json";

export default defineConfig(({ command }) => ({
  plugins: [react(), crx({ manifest }), resolveAssets()],
}));
