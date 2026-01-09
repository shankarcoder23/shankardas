
const text = "Shankar Das";
let index = 0;
const speed = 120;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

// Navbar active link switch
const navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(nav => nav.classList.remove("active", "fw-bold"));
    link.classList.add("active", "fw-bold");
  });
});

