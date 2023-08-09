let zero0 = document.getElementById("zero");

let Decrement = document.getElementById("decbtn");

let Increment = document.getElementById("incbtn");

let Resets = document.getElementById("rebtn");

Decrement.addEventListener("click", () => {
  zero.innerHTML--;
});

Increment.addEventListener("click", () => {
  zero.innerHTML++;
});

Resets.addEventListener("click", () => {
  zero.innerHTML = 0;
});
