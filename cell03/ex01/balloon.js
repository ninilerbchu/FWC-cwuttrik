const balloon = document.getElementById("balloon");

let size = 200;
let color = 0;

const colors = ["red", "green", "blue"];

balloon.addEventListener("click", function() {
    size = size + 10;
    color = color + 1;

    if (color >= 3) {
        color = 0;
    }

    if (size > 420) {
        size = 200;
        color = 0;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
});

balloon.addEventListener("mouseleave", function() {
    size = size - 5;

    if (size < 200) {
        size = 200;
    }

    color = color - 1;

    if (color < 0) {
        color = 2;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
});