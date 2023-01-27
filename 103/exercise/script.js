const images = ["./images/avocado.jpeg", "./images/pancake.jpeg", "./images/sandwich.jpeg", "./images/spaghetti.jpeg"];

const img = document.querySelector("img");
const prev = document.querySelector("#prev-button");
const next = document.querySelector("#next-button");
let index = 0;

window.addEventListener("DOMContentLoaded", () => {
  img.src = images[0];
});

prev.addEventListener("click", () => {
  if (index == 0) {
    index = 3;
  } else {
    index--;
  }
  img.src = images[index];
});

next.addEventListener("click", () => {
  if (index == 3) {
    index = 0;
  } else {
    index++;
  }
  img.src = images[index];
});
