var i = 0;
var txt = 'At first we want to build something nice with js';
var speed = 50;

let addButton = document.getElementById("more");

addButton.addEventListener("click", async () => {
    typeWriter()
  })

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}