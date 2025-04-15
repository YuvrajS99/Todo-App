let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Function to add task
function addTask() {
    if (inp.value.trim() === "") return;

    let item = document.createElement("li");
    item.innerHTML = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    // Delete button event
    delBtn.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
}

// Button click
btn.addEventListener("click", addTask);

// ENTER key support
inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
