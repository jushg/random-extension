console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(sendEmail);
//Replace
function sendEmail(message, sender, sendresponse) {
    alert("fUcK yOu");
}
