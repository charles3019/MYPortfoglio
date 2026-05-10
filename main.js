const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const mixer = mixitup(".project__grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});


const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("description")?.toString().trim();

    if (!firstName || !email || !message) {
      contactStatus.textContent = "Please complete all required fields before submitting.";
      contactStatus.className = "contact-status contact-status--error";
      return;
    }

    const recipient = "hello@charlesagyemang.dev";
    const subject = encodeURIComponent(`Contact request from ${firstName} ${lastName || ""}`);
    const body = encodeURIComponent(`Name: ${firstName} ${lastName || ""}\nEmail: ${email}\n\nMessage:\n${message}`);

    contactStatus.textContent = "Opening your mail client to send the message...";
    contactStatus.className = "contact-status contact-status--success";

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    contactForm.reset();
  });
}