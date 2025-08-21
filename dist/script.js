/*
 *ARROW BUTTON
 */
const scrollButton = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollButton.classList.add("show");
    }
    else {
        scrollButton.classList.remove("show");
    }
});
scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
//# sourceMappingURL=script.js.map