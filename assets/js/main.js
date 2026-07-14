"use strict";

/* ==========================================
   Halil AKIN
   Personal Brand System
   Version: 2.0.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();
    initializeAnimations();
    initializeExternalLinks();
    initializeCurrentYear();

});

/* ===========================
   THEME
=========================== */

function initializeTheme() {

    const button = document.getElementById("themeToggle");

    if (!button) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.documentElement.classList.add("dark");
        button.textContent = "☀";

    }

    button.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");

        const darkMode =
            document.documentElement.classList.contains("dark");

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );

        button.textContent = darkMode ? "☀" : "☾";

    });

}

/* ===========================
   CARD ANIMATION
=========================== */

function initializeAnimations() {

    const cards = document.querySelectorAll(".card");

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(20px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 500,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => observer.observe(card));

}

/* ===========================
   EXTERNAL LINKS
=========================== */

function initializeExternalLinks() {

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(link => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });

}

/* ===========================
   COPYRIGHT YEAR
=========================== */

function initializeCurrentYear() {

    const copyright =
        document.querySelector(".copyright");

    if (!copyright) return;

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Halil AKIN`;

}

/* ===========================
   CONSOLE
=========================== */

console.log(
    "%cHalil AKIN Personal Website v2.0.0",
    "color:#111827;font-size:14px;font-weight:bold;"
);


if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("sw.js")
            .catch(console.error);

    });

}