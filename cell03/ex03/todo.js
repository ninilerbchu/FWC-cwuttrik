const list = document.getElementById("ft_list");
const newButton = document.getElementById("new");

function saveCookies() {
    const todos = [];

    list.querySelectorAll(".todo").forEach(function(todo) {
        todos.push(todo.textContent);
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/; max-age=31536000";
}

function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function() {
        const remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();
            saveCookies();
        }
    });

    list.prepend(todo);
}

newButton.addEventListener("click", function() {
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