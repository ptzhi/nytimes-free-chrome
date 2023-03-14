chrome.runtime.onInstalled.addListener(() => {
});

chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    files: ["bypass.js"],
    target: { tabId: tab.id },
  });
});