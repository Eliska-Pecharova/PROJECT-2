/*
 *REGISTRATION FORM
 */
// Get the password and password confirmation input fields
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");
// Helper function to set border color based on condition
function setBorderColor(input, condition) {
    const color = condition === null ? "white" : condition === true ? "green" : "red";
    input.style.borderColor = color;
}
// Password validation function
function validatePasswords() {
    const passwordValue = passwordInput.value;
    const confirmValue = confirmInput.value;
    const isStrong = passwordValue.length >= 1;
    const isMatch = passwordValue === confirmValue;
    // Set border color for password field
    setBorderColor(passwordInput, passwordValue === "" ? null : isStrong);
    // Set border color for confirmation field
    const confirmCondition = confirmValue === "" ? null : isStrong && isMatch;
    setBorderColor(confirmInput, confirmCondition);
}
// Run validation every time the input changes
passwordInput.addEventListener("input", validatePasswords);
confirmInput.addEventListener("input", validatePasswords);
//# sourceMappingURL=form.js.map