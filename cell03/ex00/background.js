const button = document.getElementById("button");
const box = document.getElementById("box");

let size = 16;

button.addEventListener("click", function() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    box.style.backgroundColor = randomColor;

    size = size + 16;
    button.style.fontSize = size + "px";
});