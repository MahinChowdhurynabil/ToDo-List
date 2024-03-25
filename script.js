const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  toDo();
  input.value = "";
});

function toDo() {
  if (input.value === "") {
    alert("THe Value Is Empty");
  } else {
    const value = input.value;
    const newList = document.createElement("li");
    newList.textContent = value;

    const deletebtn = document.createElement("Button");
    deletebtn.textContent = "Delete";

    list.append(newList);
    newList.append(" ", deletebtn);
  }
}

list.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.closest("LI").remove();
  }
});
