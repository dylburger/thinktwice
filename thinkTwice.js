// thinkTwice.js - event page for main redirect logic

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {redirectUrl: chrome.extension.getURL("thinktwice.html")}; },
  {urls: ["*://www.facebook.com/*"]},
  ["blocking"]
);
