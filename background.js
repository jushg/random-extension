let color = '#3aa757';
let activateColor = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ activateColor });
  console.log('Default background color set to %cgreen', `color: ${activateColor}`);
});
