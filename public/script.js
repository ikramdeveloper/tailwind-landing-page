// Accordion Handling
const accordionBtns = document.querySelectorAll(".accordion-btn");

for (const btn of accordionBtns) {
  btn.addEventListener("click", (e) => {
    const ele = e.target;
    const textEle = e.target.parentElement.nextElementSibling;

    if (ele.classList.contains("fa-chevron-down")) {
      ele.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      ele.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    if (textEle.classList.contains("hidden")) {
      textEle.classList.remove("hidden");
    } else {
      textEle.classList.add("hidden");
    }
  });
}

// Mobile Menu Handling
const menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeIcon = document.querySelector(".close-menu");
menuIcon.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});
