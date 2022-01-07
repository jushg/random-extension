let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({"color": color });
  chrome.storage.sync.set({"addColor": color });
  chrome.storage.sync.set({"activateColor": color });
});

chrome.runtime.onMessage.addListener(function(message) {
  switch (message.action) {
      case "openOptionsPage":
          openOptionsPage();
          break;
      default:
          break;
  }
});

function openOptionsPage(){
  chrome.runtime.openOptionsPage();
}