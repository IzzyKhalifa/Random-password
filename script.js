// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var pass_length = window.prompt("Enter your length of Password");
var lowercase = window.prompt("Include lowercase? Y/N");
var uppercase = window.prompt("Include UPPERCASE? Y/N");
var num = window.prompt("Include Numbers? Y/N");
var s_char = window.prompt("Include Special Characters? Y/N");
var randomString = "";

if(pass_length<8){
  console.log('Password length too short');
}else if(pass_length>128){
  console.log('Password too long');
}

lowercase.toUpperCase();
uppercase.toUpperCase();
num.toUpperCase();
s_char.toUpperCase();

var lCase = 'abcdefghijklmnopqrstuvwxyz';
var uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var sChar = '.[]{}()<>*+-=!?^$|/%@#~';

function generatePassword() {
  for(var i=0;i<pass_length;i++){
    if(lowercase==Y)
    var rNum=Math.floor(Math.ramdom()*characters.length);
    randomString+= characters.substring(rNum,rNum+1);
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
