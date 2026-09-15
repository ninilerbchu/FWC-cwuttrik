$(document).ready(function() {

    function saveCookies() {
        const todos = [];

        $("#ft_list .todo").each(function() {
            todos.push($(this).text());
        });

        document.cookie =
            "todos=" +
            encodeURIComponent(JSON.stringify(todos)) +
            "; path=/; max-age=31536000";
    }

    function createTodo(text) {
        const todo = $("<div>");

        todo.addClass("todo");
        todo.text(text);

        todo.click(function() {
            const remove = confirm("Do you want to remove this TO DO?");

            if (remove) {
                todo.remove();
                saveCookies();
            }
        });

        $("#ft_list").prepend(todo);
    }

    $("#new").click(function() {
        const text = prompt("New TO DO:");

        if (text !== null && text.trim() !== "") {
            createTodo(text);
            saveCookies();
        }
    });

    function loadCookies() {
        const cookies = document.cookie.split("; ");

        for (let cookie of cookies) {
            const parts = cookie.split("=");

            if (parts[0] === "todos") {
                const todos = JSON.parse(
                    decodeURIComponent(parts.slice(1).join("="))
                );

                todos.reverse().forEach(function(todo) {
                    createTodo(todo);
                });
            }
        }
    }

    loadCookies();

});