declare global {
  interface Window {
    EXCALIDRAW_ASSET_PATH: string;
  }
}

// Pass the asset path to Excalidraw to load the assets from the extension
window.EXCALIDRAW_ASSET_PATH = chrome.runtime.getURL(
  "assets/excalidraw-assets/"
);

import React from "react";
import ReactDOM from "react-dom";
import { Excalidraw } from "@excalidraw/excalidraw";
import "./style.css";

const sketchBookLogoURL = chrome.runtime.getURL("assets/img/sketchbook.svg");

// Toggle the visibility of the Excalidraw content section
var isExcalidrawWindowOpen = false;

const editorElement = document.querySelector("#editor");
if (!editorElement) throw new Error("Can't find editor element");
const observer = new MutationObserver((mutationsList, observer) => {
  const leetcodeNotesButton = document.querySelector(
    "#editor > div.text-label-r.dark\\:text-dark-label-r.fixed.top-\\[215px\\].right-0.flex.h-10.w-8.cursor-pointer.items-center.justify-center.rounded.bg-gray-5.z-base-1.dark\\:bg-dark-gray-5"
  );
  if (leetcodeNotesButton) {
    if (!leetcodeNotesButton)
      throw new Error("Can't find Leetcode Notes button");
    console.log("Leetcode notes button found.");

    leetcodeNotesButton.addEventListener("click", async () => {
      console.log("Leetcode notes button clicked.");
      // Wait for the options panel to be rendered
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Header options seperator element
      const headerOptionsSeperator = document.querySelector(
        "#editor > div.fixed.right-0.top-\\[220px\\].w-\\[700px\\].overflow-hidden.rounded-lg.bg-paper.shadow-level1.z-base-2.dark\\:bg-dark-paper.translate-x-0 > div:nth-child(1) > div > div > div > header > div.border-divider-1.dark\\:border-dark-divider-1.mx-2.h-5.w-0.border-r"
      );
      if (!headerOptionsSeperator)
        throw new Error("Can't find Options root element");

      // Markdown content section element
      const markdownSection = document.getElementsByClassName("mde-editor")[0];
      if (!markdownSection)
        throw new Error("Can't find Markdown section element");

      // Root content section element
      const rootSection = markdownSection?.parentElement;
      if (!rootSection)
        throw new Error("Can't find root content section element");

      // Create excaliDraw window
      const excalidrawSection = document.createElement("div");
      excalidrawSection.id = "excalidraw-section";
      excalidrawSection.className = "h-[320px]";
      if (!document.querySelector("#excalidraw-section")) {
        markdownSection?.insertAdjacentElement("afterend", excalidrawSection);
        ReactDOM.render(
          <div className="excalidraw-wrapper h-[320px]">
            <Excalidraw />
          </div>,
          excalidrawSection
        );
      }

      // Display section selected by user
      if (isExcalidrawWindowOpen) {
        markdownSection.classList.add("hidden");
        excalidrawSection.classList.remove("hidden");
      } else {
        markdownSection.classList.remove("hidden");
        excalidrawSection.classList.add("hidden");
      }

      // Create a button to open the Excalidraw window
      const headerNotesButton = document.createElement("div");
      headerNotesButton.className = "css-0";
      headerNotesButton.id = "header-notes-button";
      if (document.querySelector("#header-notes-button")) return;
      headerOptionsSeperator.insertAdjacentElement(
        "beforebegin",
        headerNotesButton
      );
      ReactDOM.render(
        <button
          onClick={() => {
            isExcalidrawWindowOpen = !isExcalidrawWindowOpen;
            if (isExcalidrawWindowOpen) {
              markdownSection.classList.add("hidden");
              excalidrawSection.classList.remove("hidden");
            } else {
              markdownSection.classList.remove("hidden");
              excalidrawSection.classList.add("hidden");
            }
          }}
        >
          <img
            src={sketchBookLogoURL}
            width="30px"
            height="30px"
            className="dark:text-[#babbbf] text-[#1c1c1c]" //TOBE FIXED
            style={{
              color: "rgb(28, 28, 28)",
              fill: "rgb(28, 28, 28)",
              stroke: "rgb(28, 28, 28)",
            }}
            alt="logo"
          />
        </button>,
        headerNotesButton
      );
      console.log(isExcalidrawWindowOpen);
      console.log("SketchBook button added.");
    });
    // observer.disconnect();
  }
});

// Start observing the target node for configured mutations
observer.observe(editorElement, { childList: true });

try {
  console.log("content script loaded");
  console.log(window.EXCALIDRAW_ASSET_PATH);
} catch (e) {
  console.error(e);
}
