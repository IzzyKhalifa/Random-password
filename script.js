// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

function userPref() {
  
  var pass_length = window.prompt("Enter your length of Password");
  var lowercase = confirm("Include lowercase?");
  var uppercase = confirm("Include UPPERCASE?");
  var num = confirm("Include Numbers?");
  var s_char = confirm("Include Special Characters?");
  var randomString = "";
}

// generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").addEventListener("click", userPref);

var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var sChar = ".[]{}()<>*+-=!?^$|/%@#~";

if (pass_length < 8) {
  alert("Password too short");
  exit();
} else if (pass_length > 128) {
  alert("Password too long");
  exit();
}

// function generatePassword() {
//   for (var i = 0; i < pass_length; i++) {
//     if (lowercase) {
//       var rNum = Math.floor(Math.ramdom() * characters.length);
//       randomString += lCase.substring(rNum, rNum + 1);
//       if(uppercase){
//         var rNum = Math.floor(Math.ramdom() * characters.length);
//         randomString += lCase.substring(rNum, rNum + 1);
//         if()
//       }
//     }
//   }
// }
