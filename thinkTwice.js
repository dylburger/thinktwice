// thinkTwice.js - event page for main redirect logic

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {urls: ["*://www.facebook.com/*"]},
  ["blocking"]);
