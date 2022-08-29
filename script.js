// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// var lCase = "abcdefghijklmnopqrstuvwxyz";
// var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789";
// var sChar = ".[]{}()<>*+-=!?^$|/%@#~";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

function generatePassword(pass_length) {
  let password = '';
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = pass_length;
 
  let array = [];
  for (let i=0; i<pass_length; i++){
    array.push(Math.floor(Math.random() * chars.length)); 
  }
 
  for (let i = 0; i < passwordLength; i++) {
    password += chars[array[i]];
  }
 
  const msg = `Your new password is: "${password}"`
  console.log(msg);
  document.getElementById('password').value = 'Your password is: ' + password;
  return password;
}

function userPref() {
  console.log("Function triggered");
  var pass_length = window.prompt("Enter your length of Password");
  
  var lowercase = confirm("Include lowercase?");
  var uppercase = confirm("Include UPPERCASE?");
  var num = confirm("Include Numbers?");
  var s_char = confirm("Include Special Characters?");

  generatePassword(pass_length);
  if (pass_length < 8) {
    alert("Password too short");
    exit();
  } else if (pass_length > 128) {
    alert("Password too long");
    exit();
  }
  
  return pass_length;
  

}

// generateBtn.addEventListener("click", writePassword);
var el = document.getElementById("generate")
el.addEventListener("click", userPref);


// for (var i = 0; i < pass_length; i++) {
//   if (lowercase) {
//     var rNum = Math.floor(Math.ramdom() * pass_length);
//     randomString += lCase.substring(rNum, rNum + 1);
//     console.log(randomString);
//   } else if (uppercase) {
//   } else if (num) {
//   } else if (s_char) {
//   }
