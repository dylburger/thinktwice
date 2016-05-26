// thinkTwice.js - event page for main redirect logic

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {redirectUrl: chrome.extension.getURL("thinktwice.html?url=" + details.url)}; },
  {urls: ["*://www.facebook.com/*"]},
  ["blocking"]
);
