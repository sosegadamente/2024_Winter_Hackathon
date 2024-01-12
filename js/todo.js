document.addEventListener("DOMContentLoaded", function () {
  const inputValue = document.querySelector(".todoInputContainer input");
  const plusBtn = document.querySelector(".plusBtn");
  const addedTodoItemContainer = document.querySelector(
  ".addedTodoItemContainer"
);

plusBtn.addEventListener("click", function () {
  const todoText = inputValue.value.trim();

  if (todoText === "") {
      console.log(1);
      return
  }

  const addedTodoItem = document.createElement("div");
  addedTodoItem.classList.add("addedTodoItem");

  const valueContainer = document.createElement("div");
  valueContainer.classList.add("valueContainer");
  const todoTextElement = document.createElement("p");
  todoTextElement.innerText = todoText;
  valueContainer.appendChild(todoTextElement);

  const functionContainer = document.createElement("div");
  functionContainer.classList.add("functionContainer");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerText = "X";
  functionContainer.appendChild(checkbox)
  functionContainer.appendChild(deleteBtn)

  addedTodoItem.appendChild(valueContainer);
  addedTodoItem.appendChild(functionContainer);

  addedTodoItemContainer.appendChild(addedTodoItem);

  inputValue.value = "";

  checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
      addedTodoItem.classList.add("completed");
  } else {
      addedTodoItem.classList.remove("completed");
  }
  });

  deleteBtn.addEventListener("click", function () {
      addedTodoItemContainer.removeChild(addedTodoItem);
      });
  })
})
