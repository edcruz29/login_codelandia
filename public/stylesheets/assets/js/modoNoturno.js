const icon = document.querySelector("#theme");
const body = document.querySelector("body");
icon.addEventListener("click", function () {
  if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    body.dataset.theme = "dark";
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    body.dataset.theme = "light";
  }
});
