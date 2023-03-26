let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};


// --------------------------------------------------JavaScript for scroll effect to full in the color of navbar from being transparent------------------------------------------------------------------------

window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("header-scroll", window.scrollY > 830);
});
// --------------------------------------------------JavaScript for X button for banner section------------------------------------------------------------------------

document.querySelector(".aktualne-informacie-button").addEventListener("click", function () {
  this.closest(".aktualne-informacie").style.display = "none";
});




