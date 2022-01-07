let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

const links = [
  'https://youtu.be/8nHnQQhWQVA',
  'https://youtu.be/TioINDSHcps',
  'https://youtu.be/EShUeudtaFg',
  'https://youtu.be/8CKjNcSUNt8',
  'https://youtu.be/bfCR0dEDO1A',
  'https://www.youtube.com/watch?v=_bDnPIBY8HY',
  'https://www.youtube.com/watch?v=4nqX-a7EceQ',
  'https://www.youtube.com/watch?v=fVtkAGJvNu8',
  'https://www.youtube.com/watch?v=rX7XZLcGAxw',
  'https://www.youtube.com/watch?v=YpfGYcT_tXM',
  'https://www.buzzfeed.com/daves4/dumbest-internet-posts',
  'https://nuswhispers.com/home/'
]


let setButton = document.getElementById("submitWebsite")

setButton.addEventListener("click", async () => {
  var link = links[Math.floor(Math.random()*links.length)];
  window.open(link, '_blank').focus();
})
