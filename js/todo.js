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

<<<<<<< Updated upstream
const todoInputValue = document.querySelector(".modal_input");
const plusBtn = document.querySelector(".plusBtn");

plusBtn.addEventListener("click", function () {
  const createTodoList = document.createElement("li");
});
=======
const Plus_Btn = document.querySelector(".plusBtn");
const modal_input = document.querySelector(".modal_input");

Plus_Btn.addEventListener("click", plusBtn_handler);

function plusBtn_handler(e) {
  if (modal_input.value === "") {
    return;
  } else {
    if (e.type === "click") {
      // 새로운 todo 요소 생성
      const $newTodo = document.createElement("div");
      $newTodo.innerHTML = `
      <div class="todos">
        <div class="word_cont">
          <h2></h2>
          <h5 style="color: rgba(101, 101, 101, 0.809);">dmddm</h5>
        </div>
        <div class="todolist_complete_cont">
          <div class="todos_complete"></div>
        </div>
      </div>
    `;

      // modal_input의 값을 가져와서 todo의 h1에 설정
      const inputText = modal_input.value;
      $newTodo.querySelector(".word_cont > h2").textContent = inputText;

      // 생성된 todo를 todos 요소에 추가
      const todo_list_container = document.querySelector(
        ".todo_value_container"
      );
      todo_list_container.appendChild($newTodo);

      // 입력 필드 초기화
      modal_input.value = "";
    }
  }
}
>>>>>>> Stashed changes
