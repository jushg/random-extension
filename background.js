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
