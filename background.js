console.log("background running");

const storageCache = {};

const initStorageCache = getAllStorageSyncData().then(items => {
  Object.assign(storageCache, items);
});

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await initStorageCache;
  } catch (e) {
    // Handle error that occurred during storage initialization.
  }
});

// document.getElementById("set").onclick = function() {
//     var url = document.getElementById("url").value;
//     var opt = document.getElementById("opt").value;
//     chrome.storage.sync.set({ [url] : opt }, function() {
//         if (chrome.runtime.error) {
//             console.log("Runtime error.");
//         }
//         alert("Sync Successfully");
//     });
// }

// Reads all data out of storage.sync and exposes it via a promise.
function getAllStorageSyncData() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(null, (items) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(items);
    });
  });
}
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
    case "openAnimation" :
      chrome.tabs.create({
        url: 'animation.html'
      });
      break;
    default:
        break;
  }
});

function openOptionsPage(){
  chrome.runtime.openOptionsPage();
}