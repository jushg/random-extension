
//Get the current tab information
const websiteName = document.querySelector(".websiteName")
const websiteStatus = document.querySelector(".websiteStatus")
const websiteTimeToday = document.querySelector(".websiteTimeToday")
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const results = document.querySelector(".current-web");
results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";


async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// Initialize buttons with users's prefered color
let randomButton = document.getElementById("randomButton");
let addButton = document.getElementById("addButton");
let activateButton = document.getElementById("activateButton")

chrome.storage.sync.get("activateColor",({activateColor}) => {
  activateButton.style.backgroundColor = activateColor;
});

chrome.storage.sync.get("color", ({ color }) => {
  randomButton.style.backgroundColor = color;
  addButton.style.backgroundColor = color;
});

activateButton.addEventListener("click", async () => {
  loading.style.display = "block";
  errors.textContent = "";
  try {
    const response = await getCurrentTab();
    if(response === null){ throw error;  }
    loading.style.display = "none";

    websiteName.textContent = response.title
    websiteStatus.textContent = "Test Status"
    websiteTimeToday.textContent = "Test Time"

    results.style.display = "block";
  } catch (error) {
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent = "No data lol";
  }
});

const links = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=yBLdQ1a4-JI',
]

addButton.addEventListener("click", async () => {
  chrome.runtime.sendMessage({"action": "openOptionsPage"});
})

randomButton.addEventListener("click", async () => {
  var link = links[Math.floor(Math.random()*links.length)];
  window.open(link, '_blank').focus();
})


// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
