let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({"color": color });
  chrome.storage.sync.set({"addColor": color });
  chrome.storage.sync.set({"activateColor": color });
  // if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
  //   chrome.tabs.create({
  //     url: 'options.html'
  //   });
  // }
});

// chrome.tabs.onUpdated.addListener((tab) => {
//   chrome.storage.sync.set({"tab": tab });
// })
