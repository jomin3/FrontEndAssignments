"strict";

const btn = document.querySelector(".icon");
btn.addEventListener("click", () => {
  document.getElementById("square").classList.toggle("hide");
  document.getElementById("link").classList.toggle("hide");
});
