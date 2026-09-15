$(document).ready(function() {

    let size = 16;

    $("#button").click(function() {

        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        $("#box").css("background-color", randomColor);

        size = size + 16;

        $("#button").css("font-size", size + "px");
    });

});