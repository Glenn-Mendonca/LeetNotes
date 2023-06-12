declare global {
  interface Window {
    EXCALIDRAW_ASSET_PATH: string;
  }
}

import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";
import "./style.css";
const div = document.createElement("div");
div.id = "__root";
document.body.appendChild(div);

window.EXCALIDRAW_ASSET_PATH = chrome.runtime.getURL(
  "assets/excalidraw-assets/"
);

const rootContainer = document.querySelector("#__root");
if (!rootContainer) throw new Error("Can't find Options root element");
const root = createRoot(rootContainer);
root.render(
  <>
    {/* {console.log(window.EXCALIDRAW_ASSET_PATH)} */}
    <div className="absolute bottom-0 left-0 text-lg text-black bg-amber-400 z-50">
      content script loaded
    </div>
    <div className="h-48 w-56">
      <Excalidraw />
    </div>
  </>
);

try {
  console.log("content script loaded");
  console.log(window.EXCALIDRAW_ASSET_PATH);
} catch (e) {
  console.error(e);
}
