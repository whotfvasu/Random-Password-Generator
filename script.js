const passwordBox = document.getElementById("password");
const button = document.querySelector("button");
const copyImg = document.getElementById("copy-img");
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=";
const all = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (passwordLength > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  passwordBox.value = password;
}

button.addEventListener("click", createPassword);

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

copyImg.addEventListener("click", copyPassword);
