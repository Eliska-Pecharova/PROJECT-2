/*
 *REGISTRATION FORM
 */
const password = document.getElementById("password") as HTMLInputElement;
const confirm = document.getElementById("confirm-password") as HTMLInputElement;

function validatePasswords(): void {
  const pass = password.value;
  const conf = confirm.value;

  const minLength = pass.length >= 3;

  const isStrong = minLength;
  const isMatch = pass === conf;

  // Password – reacts on the first character

  if (pass === "") {
    password.style.borderColor = "white";
  } else if (isStrong) {
    password.style.borderColor = "green";
  } else {
    password.style.borderColor = "red";
  }

  // Password confirmation – responds with the first character

  if (conf === "") {
    confirm.style.borderColor = "white";
  } else if (isStrong && isMatch) {
    confirm.style.borderColor = "green";
  } else {
    confirm.style.borderColor = "red";
  }
}

password.addEventListener("input", validatePasswords);
confirm.addEventListener("input", validatePasswords);
