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
        secondaryBlue: "#26355D",
        darkSecondaryBlue: "#1c294b",
        darkorange: "#cb5004",
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


// aos animation
AOS.init();
// for Image Carousal

const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    // Update active slide
    function updateCarousel(index) {
      // Remove active class from all items and indicators
      carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        indicators[i].classList.remove('bg-gray-600');
        indicators[i].classList.add('bg-gray-400');
      });

      // Add active class to current item and indicator
      carouselItems[index].classList.add('active');
      indicators[index].classList.add('bg-gray-600');
    }
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel(currentIndex);
    }

    // Next slide
    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel(currentIndex);
    });

    // Previous slide
    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel(currentIndex);
    });

    // Indicator click
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
      });
    });

    setInterval(nextSlide, 5000);

    document.addEventListener('DOMContentLoaded', () => {
      // Unix timestamp (in seconds) to count down to
      var toDayFromNow = (new Date("Nov 29, 2024 08:00:00").getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;
      // Set Up FlipDown
      var flipdown = new FlipDown(toDayFromNow)
  
      // Start The Count Down
      .start()
      // Do Something When The Countdown Ends
      .ifEnded(() => {
          document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
      });
  });