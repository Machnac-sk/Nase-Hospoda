let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("header-scroll", window.scrollY > 230);
});
