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

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primegreen: "#43c370",
        hovergreen: "#009467",
        bgfooter: "#141a26",
        orange: "#fc690b",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
