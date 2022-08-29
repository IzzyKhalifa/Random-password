// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

function length() {
  var pass_length = window.prompt("Enter your length of Password");
  if (pass_length < 8) {
    alert("Password too short");
    exit();
  } else if (pass_length > 128) {
    alert("Password too long");
    exit();
  }
  return pass_length;
  function generatePassword() {
    var randomString = "";
    const textarea = document.getElementById("password");
    for (var i = 0; i < pass_length; i++) {
      if (lowercase) {
        var rNum = Math.floor(Math.ramdom() * characters.length);
        randomString += lCase.substring(rNum, rNum + 1);
      }
      console.log(randomString);
    }

    textarea.value = randomString;
  }
  return generatePassword();
}

function userPref() {
  console.log("Function triggered");
  var lowercase = confirm("Include lowercase?");
  var uppercase = confirm("Include UPPERCASE?");
  var num = confirm("Include Numbers?");
  var s_char = confirm("Include Special Characters?");
}

// generateBtn.addEventListener("click", writePassword);

// document.getElementById("generate").addEventListener("click", userPref);

var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var sChar = ".[]{}()<>*+-=!?^$|/%@#~";

length();
userPref();

