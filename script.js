
/*=========================================
      HEMANATHAN PORTFOLIO
      PART 3.1
==========================================*/

// =============================
// Loader
// =============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// =============================
// Typing Animation
// =============================

const typingElement = document.querySelector(".typing");

const words = [

    "Computer Science Engineering ",

    "Aspiring Software Engineer",

    "AI & Machine Learning Enthusiast",

    "Data Analytics Enthusiast",

    "Python Developer",

    "IoT Developer"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex > currentWord.length) {

        isDeleting = true;

        speed = 1500;

    }

    if (isDeleting && charIndex < 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(typingEffect, speed);

}

typingEffect();

// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("fa-times");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        if (menuBtn) {

            menuBtn.classList.remove("fa-times");

        }

    });

});

// =============================
// Scroll To Top
// =============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 300) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

if (scrollBtn) {

    scrollBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

// =============================
// Animated Counters
// =============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 50);

                if (count < target) {

                    counter.innerText = count;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

console.log("🚀 Portfolio Loaded Successfully");
/*=========================================
        PART 3.2
==========================================*/

// =============================
// Scroll Reveal Animation
// =============================

const revealElements = document.querySelectorAll(
    "section, .project-card, .skill-card, .achievement-card, .certificate-card, .internship-card, .timeline-item"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach((element) => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});

// =============================
// Active Navbar Highlight
// =============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =============================
// Dark Mode
// =============================

const themeBtn = document.getElementById("themeToggle");

const body = document.body;

if (localStorage.getItem("theme") === "light") {

    body.classList.add("light-mode");

    if (themeBtn) {

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}

// =============================
// Contact Form
// =============================

// Replace with your EmailJS details
emailjs.init("ImZoPAuddezOuVPGD");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_xjr10cl",
        "template_e16ow1q",
        this
    )
        .then(function () {
            alert("✅ Message Sent Successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert(error.text || JSON.stringify(error));
        });
});



// =============================
// Navbar Shadow
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 25px rgba(0,191,255,.20)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =============================
// Current Year
// =============================

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML = `© ${new Date().getFullYear()} Hemanathan T. All Rights Reserved.`;

}

// =============================
// Console
// =============================

console.log("🔥 Premium Portfolio Ready");