/*
 *ARROW BUTTON
 */
// Get the scroll-to-top button element
const scrollButton = document.getElementById("scrollToTop") as HTMLElement;
// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  // If the user has scrolled more than 300px, show the button
  if (window.scrollY > 300) {
    scrollButton.classList.add("show");
  } else {
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

