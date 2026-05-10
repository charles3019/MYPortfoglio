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

const filterButtons = document.querySelectorAll(".project__btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("mixitup-control-active"));
    button.classList.add("mixitup-control-active");
  });
});

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

ScrollReveal().reveal(".header__content h2", {
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

ScrollReveal().reveal(".client__card", {
  ...scrollRevealOption,
  interval: 300,
});

ScrollReveal().reveal(".contact__container", {
  ...scrollRevealOption,
  delay: 300,
});

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm) {
  // Initialize EmailJS
  // NOTE: Get your credentials from https://www.emailjs.com/
  // Replace these with your actual credentials
  emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Get from EmailJS dashboard

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!firstName || !email || !message) {
      contactStatus.textContent = "Please complete all required fields before submitting.";
      contactStatus.className = "contact-status contact-status--error";
      return;
    }

    // Show sending status
    contactStatus.textContent = "Sending your message...";
    contactStatus.className = "contact-status contact-status--success";

    // Send email using EmailJS
    // Replace SERVICE_ID and TEMPLATE_ID with your EmailJS credentials
    emailjs
      .send("SERVICE_ID_HERE", "TEMPLATE_ID_HERE", {
        from_name: `${firstName} ${lastName || ""}`,
        from_email: email,
        to_email: "agyemangc96@gmail.com",
        message: message,
        reply_to: email,
      })
      .then(
        (response) => {
          contactStatus.textContent =
            "✓ Message sent successfully! I'll get back to you soon.";
          contactStatus.className =
            "contact-status contact-status--success";
          contactForm.reset();
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            contactStatus.textContent = "";
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          contactStatus.textContent =
            "✗ Failed to send message. Please try again or email directly.";
          contactStatus.className =
            "contact-status contact-status--error";
        }
      );
  });
}

    contactForm.reset();
  });
}