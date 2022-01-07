console.log("background running");
chrome.browserAction.onClicked.addListener(setup);

function setup() {
    alert("Incognito !!!")
}
