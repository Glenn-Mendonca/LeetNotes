import React from "react";
import ReactDOM from "react-dom";

window.EXCALIDRAW_ASSET_PATH = chrome.runtime.getURL(
  "assets/excalidraw-assets/"
);

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("#qd-content").then((tabsSection) => {
  const selectedTabsObs = new MutationObserver((mutations, observer) => {
    tabsSection.querySelectorAll("*").forEach((element) => {
      const classes = element.className;
      if (typeof classes !== "string") return;
      classes.split(" ").forEach((className) => {
        if (
          className.endsWith("--selected") &&
          element
            .querySelector("div div:nth-of-type(2) div")
            .innerText.toLowerCase() === "note"
        ) {
          const layoutPath = element.getAttribute("data-layout-path");
          
        }
      });
    });
  });
  selectedTabsObs.observe(tabsSection, { childList: true, subtree: true });
});

// observer.observe(tabsWindow, { childList: true });

// ReactDOM.render(
//   <React.StrictMode>
//     <div>Testing...234</div>
//   </React.StrictMode>,
//   root
// );
