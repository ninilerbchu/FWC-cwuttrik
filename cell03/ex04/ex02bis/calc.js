$(document).ready(function() {

    $("#try").click(function() {

        const leftValue = $("#left").val();
        const rightValue = $("#right").val();

        const a = Number(leftValue);
        const b = Number(rightValue);
        const op = $("#operator").val();

        if (
            leftValue === "" ||
            rightValue === "" ||
            !Number.isInteger(a) ||
            !Number.isInteger(b) ||
            a < 0 ||
            b < 0
        ) {
            alert("Error :(");
            return;
        }

        if ((op === "/" || op === "%") && b === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }

        let result;

        if (op === "+") {
            result = a + b;
        } else if (op === "-") {
            result = a - b;
        } else if (op === "*") {
            result = a * b;
        } else if (op === "/") {
            result = a / b;
        } else if (op === "%") {
            result = a % b;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);

});