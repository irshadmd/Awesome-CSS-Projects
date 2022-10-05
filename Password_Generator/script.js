const passwordField = document.getElementById("generated-pass");
const passwordLength = document.getElementById("length");
const copyBtn = document.getElementById("copy");

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

function generatePassword() {
  if (passwordLength.value > 50) {
    alert("Password length should not exceed 50. Please try a smaller number");
    return;
  }
  if (passwordLength.value < 8) {
    alert("Password length should be atleast 8");
    return;
  }
  let generatedPassword = "";
  for (let i = 0; i < passwordLength.value; i++) {
    generatedPassword =
      generatedPassword +
      chars.charAt(Math.floor(Math.random() * chars.length));
  }
  passwordField.value = generatedPassword;
}

function copyPassword() {
  if (!passwordField.value) {
    alert("Nothing to copy");
    return;
  }
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
  passwordField.value = "";
}

generatePassword();
