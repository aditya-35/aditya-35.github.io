document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-ul");

  // Toggle menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-ul a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
})
// span element js
const roles = ["Web Developer", "Front-end Developer"];
const roleElement = document.getElementById("role");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // Typing phase
    roleElement.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000); // Pause at full text
    } else {
      setTimeout(typeEffect, 100); // Typing speed
    }
  } else {
    // Deleting phase
    roleElement.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500); // Pause before next word
    } else {
      setTimeout(typeEffect, 50); // Deleting speed
    }
  }
}

// Start the animation
typeEffect();