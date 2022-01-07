console.log("background running");

let color = '#3aa757';

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
      chrome.tabs.sendMessage( tabId, {
        message: 'new-tab',
        url: changeInfo.url,
        tab: tab
      })
  }
);

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
    case "openAboutPage" :
      chrome.tabs.create({
        url: 'about.html'
      });
      break;
    default:
        break;
  }
});

function openOptionsPage(){
  chrome.runtime.openOptionsPage();
}