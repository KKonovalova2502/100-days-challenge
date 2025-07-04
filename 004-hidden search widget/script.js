const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const icon = document.querySelector(".fas");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  icon.classList.toggle("fa-search-plus", !search.classList.contains("active"));
  icon.classList.toggle("fa-times", search.classList.contains("active"));
});
