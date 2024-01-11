const modal = document.querySelector(".modal");
const open_modal = document.querySelector(".button");
const close_modal = document.querySelector(".close_modal");

open_modal.onclick = function () {
  modal.style.display = "block";
};

close_modal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // 모달 숨기기
  }
};

const todoInputValue = document.querySelector(".modal_input");
const plusBtn = document.querySelector(".plusBtn");

plusBtn.addEventListener("click", function () {
  const createTodoList = document.createElement("li");
});
