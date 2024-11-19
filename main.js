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