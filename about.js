var i = 0;
var txt = 'We make this as randomly as possible. Good luck finding any usage !';
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