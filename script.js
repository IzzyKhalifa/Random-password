document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", execute);
});

const lowerC = "abcdefghijklmnopqrstuvwxyz";
const upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialC = "!@#$%^&*()";

function execute() {
  const user = userPref();
  const passGenerated = generatePassword(
    user.passLength,
    user.lowerCase,
    user.upperCase,
    user.num,
    user.specialChar
  );
  writePassword(passGenerated);
}

function userPref() {
  const passLength = window.prompt("Enter your length of Password");
  const validation = validate(passLength);
  if (validation !== "") {
    alert(validation);
    return;
  }

  const lowerCase = confirm("Include lower case characters?");
  const upperCase = confirm("Include upper case characters?");
  const num = confirm("Include numbers?");
  const specialChar = confirm("Include special characters?");

  return {
    passLength,
    lowerCase,
    upperCase,
    num,
    specialChar,
  };
}

function validate(passLength) {
  if (passLength < 8) {
    return "Password too short";
  } else if (passLength > 128) {
    return "Password too long";
  }
  return "";
}

function generatePassword(passLength, lowerCase, upperCase, num, specialChar) {
  let availableC = "";
  let password = "";

  if (lowerCase) {
    availableC += lowerC;
  }
  if (upperCase) {
    availableC += upperC;
  }
  if (num) {
    availableC += numbers;
  }
  if (specialChar) {
    availableC += specialC;
  }

  for (var i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableC.length);
    password += availableC.charAt(randomIndex);
  }
  console.log(passLength);
  console.log(password);

  return password;
}

function writePassword(password) {
  const passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}
