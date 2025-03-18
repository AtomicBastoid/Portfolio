// For Loop Syntax
// for (var i=0; i < 10; i++) {
//  condition
// }


// Navbar Scroll Change Script

document.addEventListener ("scroll", () => {
    const header = document.querySelector("header")

    if (window.scrollY > 0) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})

// Services Section Popup Script

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".Card");
    const popups = document.querySelectorAll(".popup");
    const overlay = document.querySelector("#overlay");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const popupId = card.id.replace("-card", "-popup");
            const currentPopup = document.querySelector("#" + popupId);
            if (currentPopup) {
                currentPopup.classList.add("active");
                overlay.classList.add("active");
            }
        });
        
    });

    popups.forEach(popup => {
        const close = popup.querySelector(".close-button");
        close.addEventListener("click", () => {
            popup.classList.remove("active");
            overlay.classList.remove("active");
        });
    }
    );

    overlay.addEventListener("click", () => {
        popups.forEach(popup => {
            popup.classList.remove("active");
        });
        overlay.classList.remove("active");
    });
});