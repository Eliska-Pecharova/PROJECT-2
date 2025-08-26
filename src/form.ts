/*
 *REGISTRATION FORM
 */
// Get the password and password confirmation input fields
const passwordInput = document.getElementById("password") as HTMLInputElement;
const confirmInput = document.getElementById(
  "confirm-password"
) as HTMLInputElement;

// Password validation function
function validatePasswords(): void {
  const passwordValue = passwordInput.value;
  const confirmValue = confirmInput.value;

  const isStrong = passwordValue.length >= 1;
  const isMatch = passwordValue === confirmValue;

  // Master password validation
  if (passwordValue === "") {
    // If the field is empty, we set the color to neutral
    passwordInput.style.borderColor = "white";
  } else if (isStrong) {
    // If the password is long enough, green
    passwordInput.style.borderColor = "green";
  } else {
    // If the password is short, red
    passwordInput.style.borderColor = "red";
  }

  // Password confirmation validation
  if (confirmValue === "") {
    // If the field is empty, we set the color to neutral
    confirmInput.style.borderColor = "white";
  } else if (isStrong && isMatch) {
    // If the password is long enough, green
    confirmInput.style.borderColor = "green";
  } else {
    // If the password is short, red
    confirmInput.style.borderColor = "red";
  }
}

// Run validation every time the input changes
passwordInput.addEventListener("input", validatePasswords);
confirmInput.addEventListener("input", validatePasswords);



