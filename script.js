// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var characters='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

var pass_length = window.prompt("Enter your length of Password");
var lowercase = window.prompt("Include lowercase? Y/N");
var uppercase = window.prompt("Include UPPERCASE? Y/N");
var num = window.prompt("Include Numbers? Y/N");
var s_char = window.prompt("Include Special Characters? Y/N");


function generatePassword(){

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
