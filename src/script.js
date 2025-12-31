const form = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        return;
    }

    output.textContent = `Hello, ${name}! 👋 Welcome to your frontend app.`;
    output.classList.remove("hidden");

    nameInput.value = "";
});
