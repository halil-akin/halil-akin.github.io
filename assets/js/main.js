/* ==========================================
   Halil AKIN
   Personal Website v1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    updateYear();

});


/* ==========================================
   YEAR
========================================== */

function updateYear(){

    const year = document.getElementById("year");

    if(!year) return;

    year.textContent = new Date().getFullYear();

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initReveal(){

    const items = document.querySelectorAll(

        ".card,.timeline-card,.stat-box,.footer-top"

    );

    if(!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold:.15

        }

    );

    items.forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

}