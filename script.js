// Navbar mobile + efek scroll sederhana
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("show"));
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 6px 24px rgba(15,42,74,.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
