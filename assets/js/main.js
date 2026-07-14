"use strict";

/* ==========================================
   Halil AKIN
   Personal Brand System
   Version: 1.1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Halil AKIN Personal Website v1.1.0");

    // Dış bağlantıları güvenli aç
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute("rel", "noopener noreferrer");
    });

    // Yumuşak görünme animasyonu
    const cards = document.querySelectorAll(".card");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.animate(
                        [
                            {
                                opacity: 0,
                                transform: "translateY(18px)"
                            },
                            {
                                opacity: 1,
                                transform: "translateY(0)"
                            }
                        ],
                        {
                            duration: 450,
                            easing: "ease-out",
                            fill: "forwards"
                        }
                    );

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        cards.forEach(card => observer.observe(card));

    }

});