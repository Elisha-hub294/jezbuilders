/* =========================================================
   JEZBUILDERS PRICING PAGE
========================================================= */


/* =========================
   PRICING CARD INTERACTION
========================= */

const priceCards = document.querySelectorAll(".price-card");

priceCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        priceCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.style.opacity = "0.65";
            }
        });
    });

    card.addEventListener("mouseleave", () => {
        priceCards.forEach((otherCard) => {
            otherCard.style.opacity = "1";
        });
    });

});


/* =========================
   FAQ
========================= */

const faqDetails = document.querySelectorAll(".faq-list details");

faqDetails.forEach((detail) => {

    detail.addEventListener("toggle", () => {

        if (detail.open) {

            faqDetails.forEach((otherDetail) => {

                if (otherDetail !== detail) {
                    otherDetail.removeAttribute("open");
                }

            });

        }

    });

});