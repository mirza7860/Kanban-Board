const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todolane = document.getElementById("todolane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", (e) => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todolane.appendChild(newTask);

  input.value = "";
});
