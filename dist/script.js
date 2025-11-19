/*
 * LANGUAGE-SELECTOR
 */
const select = document.getElementById("language-choose");
select.addEventListener("change", () => {
    const selectedLang = select.value;
    // Můžeš sem přidat libovolnou akci:
    console.log("Zvolený jazyk:", selectedLang);
    // Volitelně: uložení do localStorage
    localStorage.setItem("preferredLanguage", selectedLang);
    // Volitelně: přesměrování na jazykovou verzi
    // window.location.href = `/${selectedLang}/index.html`;
});
/*
 *ARROW BUTTON
 */
// Get the scroll-to-top button element
const scrollButton = document.getElementById("scrollToTop");
// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    // If the user has scrolled more than 300px, show the button
    if (window.scrollY > 300) {
        scrollButton.classList.add("show");
    }
    else {
        // Otherwise, hide the button
        scrollButton.classList.remove("show");
    }
});
// Scroll smoothly to the top when the button is clicked
scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
//# sourceMappingURL=script.js.map