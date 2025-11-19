/*
 *REGISTRATION FORM
 */
// Get the password and password confirmation input fields
const passwordInput = document.getElementById("password") as HTMLInputElement;
const confirmInput = document.getElementById(
  "confirm-password"
) as HTMLInputElement;

// Helper function to set border color based on condition
function setBorderColor(
  input: HTMLInputElement,
  condition: boolean | null
): void {
  const color =
    condition === null ? "white" : condition === true ? "green" : "red";

  input.style.borderColor = color;
}

// Password validation function
function validatePasswords(): void {
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
