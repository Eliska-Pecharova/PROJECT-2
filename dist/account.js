/* FORM */
const form = document.querySelector(".registration-form");
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector("#password");
// Zpracování odeslání formuláře
form.addEventListener("submit", (e) => {
    e.preventDefault(); // zabrání reloadu stránky
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (!email || !password) {
        alert("Vyplňte prosím všechny údaje.");
        return;
    }
    // Zde můžeš přidat další logiku (např. odeslání na server)
    console.log("Email:", email);
    console.log("Heslo:", password);
});
/* ARROW-DOWN */
// Get the scroll-to-top button element
const scrollButton = document.getElementById("scrollToBottom");
// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    // If the user has scrolled more than 300px, show the button
    if (window.scrollY > 800) {
        scrollButton.classList.add("show");
    }
    else {
        // Otherwise, hide the button
        scrollButton.classList.remove("show");
    }
});
// Scroll smoothly to the top when the button is clicked
scrollButton.addEventListener("mouseenter", () => {
    window.scrollTo({
        top: window.scrollY + 800,
        behavior: "smooth",
    });
});
//# sourceMappingURL=account.js.map