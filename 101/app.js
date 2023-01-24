const createList = (value) => {
  const list = document.getElementById("list").lastElementChild;
  const listCopy = list.cloneNode(true);
  const p = listCopy.querySelector("p");
  p.textContent = value;
  list.after(listCopy);
};

document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.getElementById("add-input");
  if (input.value !== "") {
    createList(input.value);
    input.value = "";
  } else {
    alert("input Note Title");
  }
});
