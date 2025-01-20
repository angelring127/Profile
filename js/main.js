// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fade-in animation
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    navbar.classList.remove("active");
  });
});

// Scroll fade out effect
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      if (
        scrollTop > sectionTop - viewportHeight / 2 &&
        scrollTop < sectionTop + sectionHeight
      ) {
        section.style.opacity = 1;
      } else {
        section.style.opacity = 0;
      }
    } else {
      // Scrolling up
      if (
        scrollTop + viewportHeight > sectionTop &&
        scrollTop < sectionTop + sectionHeight
      ) {
        section.style.opacity = 1;
      } else {
        section.style.opacity = 0;
      }
    }
  });

  lastScrollTop = scrollTop;
});
