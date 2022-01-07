var i = 0;
var txt = 'We make this as randomly as possible. Good luck finding any usage !';
var speed = 50;

let addButton = document.getElementById("more");
let button1 = document.getElementById("dont-click");
let button2 = document.getElementById("dont-click2");
let button3 = document.getElementById("last-warning");

button1.style.display="none"
button2.style.display="none"
button3.style.display="none"

addButton.addEventListener("click", async () => {
    typeWriter()
})

button1.addEventListener("click", async () => {
  button2.style.display="block"
})
button2.addEventListener("click", async () => {
  button3.style.display="block"
})
button3.addEventListener("click", async () => {
  window.open( 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank').focus();
})


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    button1.style.display="block"
  }
}