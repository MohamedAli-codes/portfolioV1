const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("header nav");
const header = document.querySelector("header");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when a nav link is clicked (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Keyboard accessibility for menu toggle
menuToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    nav.classList.toggle("active");
  }
});

// window.addEventListener("scroll", (e) => {
//   header.style.backgroundColor = "black";
// });
const myName = document.getElementById("myName");
const myNameTxt = "Mohamed Ali";
let idx = 0;
