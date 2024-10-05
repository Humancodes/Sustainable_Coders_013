// Navbar Change
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// // Dark-Light Mode
// const bodyCont = document.getElementById("bodyCont");
// const switchBtn = document.getElementById("switch");

// switchBtn.addEventListener("click", () => {
//   bodyCont.classList.toggle("dark");
// });

// Dark-Light Mode
const bodyCont = document.getElementById("bodyCont");
const switchBtn = document.querySelectorAll("#switch input"); // Select both switches

switchBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    bodyCont.classList.toggle("dark");
  });
});

// Transparent to bg white js
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navDesktop = document.getElementById("desktop-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("lg:bg-white");
    navbar.classList.add("lg:dark:bg-black");
    navbar.classList.remove("dark:lg:bg-transparent");
    navDesktop.classList.add("lg:dark:text-white");
    navDesktop.classList.remove("text-gray-300");
  } else {
    navbar.classList.remove("lg:bg-white");
    navbar.classList.add("dark:lg:bg-transparent");
    navbar.classList.remove("lg:dark:bg-black");
    navDesktop.classList.remove("lg:dark:text-white");
    navDesktop.classList.remove("text-gray-600");
    navDesktop.classList.add("text-gray-300");
  }
});

tailwind.config = {
  darkMode: "selector",
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
        black: "#011a3e",
      },
      boxShadow: {
        "white-lg":
          "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
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
AOS.init({
  duration: 1200,
});
// for Image Carousal

const carouselItems = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

// Update active slide
function updateCarousel(index) {
  // Remove active class from all items and indicators
  carouselItems.forEach((item, i) => {
    item.classList.remove("active");
    indicators[i].classList.remove("bg-gray-600");
    indicators[i].classList.add("bg-gray-400");
  });

  // Add active class to current item and indicator
  carouselItems[index].classList.add("active");
  indicators[index].classList.add("bg-gray-600");
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel(currentIndex);
}

// Next slide
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel(currentIndex);
});

// Previous slide
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel(currentIndex);
});

// Indicator click
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

setInterval(nextSlide, 5000);

// presentaion vedio part
// Click button to open video modal
document.getElementById('videoButton').addEventListener('click', function() {
    const videoModal = document.getElementById('videoModal');
    const html5Video = document.getElementById('html5Video');
    
    // Show the modal
    videoModal.classList.remove('hidden');
    videoModal.classList.add('flex');

    // Play the video with muted autoplay if required by the browser
    html5Video.play().catch(function(error) {
        console.log("Autoplay failed, browser policies may prevent it. Video will start muted.");
        html5Video.muted = true;
        html5Video.play();
    });
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
// Click button to close modal and stop video
document.getElementById('closeModal').addEventListener('click', function() {
    const videoModal = document.getElementById('videoModal');
    const html5Video = document.getElementById('html5Video');
    
    // Hide the modal
    videoModal.classList.add('hidden');
    videoModal.classList.remove('flex');
    
    // Pause and reset the video
    html5Video.pause();
    html5Video.currentTime = 0;
});
