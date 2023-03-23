"use strict";

makeAnchorLinksOpenInNewTab();

function makeAnchorLinksOpenInNewTab() {
  let anchorElements = document.getElementsByTagName("a");
  for (const anchorElement of anchorElements) {
    anchorElement.target = "_blank";
  }
}
