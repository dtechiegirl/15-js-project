'use strict'

const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "hotpink",
  "aqua",
  "grey",
  "coral",
  "tomato",
];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNo = getRandomNo();
  // console.log(randomNo)

  document.body.style.backgroundColor = colors[randomNo];

  color.textContent = colors[randomNo];
});

function getRandomNo() {
  return Math.trunc(Math.random() * colors.length);
}
