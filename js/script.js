// Navbar Change
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Transparent to bg white js
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navDesktop = document.getElementById("desktop-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white");
    navbar.classList.remove("lg:bg-transparent");
    navDesktop.classList.remove("text-slate-300");
    navDesktop.classList.add("text-gray-600");
  } else {
    navbar.classList.add("lg:bg-transparent");
    navDesktop.classList.add("text-slate-300");
    navDesktop.classList.remove("text-gray-600");
  }
});
