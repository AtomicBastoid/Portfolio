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

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});