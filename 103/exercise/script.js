const images = ["./images/avocado.jpeg", "./images/pancake.jpeg", "./images/sandwich.jpeg", "./images/spaghetti.jpeg"];

const img = document.querySelector("img");
const prev = document.querySelector("#prev-button");
const next = document.querySelector("#next-button");
let num = 0;

window.addEventListener("DOMContentLoaded", () => {
  img.src = images[0];
});

prev.addEventListener("click", () => {
  if (num == 0) {
    num = 3;
  } else {
    num--;
  }
  img.src = images[num];
});

next.addEventListener("click", () => {
  if (num == 3) {
    num = 0;
  } else {
    num++;
  }
  img.src = images[num];
});
