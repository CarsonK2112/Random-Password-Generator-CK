// Assignment Code
var generateBtn = document.querySelector("#generate");

var charlength;
var uppercase;
var lowercase;
var numerals;
var specials;
var starter;
var confirm_charlength;
var lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
var uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeralschars = '0123456789';
var specialschars = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var possible_selection = "";
var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function numberOfCharacters(length) {

  console.log(length)
}
numberOfCharacters(prompt)
function writePassword() {
  possible_selection = "";
  password = "";
  var txt;
  var starter = confirm("Hello! Would you like to generate a random password?");
  if (starter == true) {
    txt = "You have begun the process of getting a new password!";
  } else {
    txt = "You pressed Cancel!";
  }

  console.log(starter)

  charlength = prompt("Please indicate how long you would like your password to be, it must be between 8 and 128 characters.", "128");
  if (charlength == null || charlength == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Your password will be " + charlength + "characters long.";
    confirm_charlength = charlength
  };

  console.log(charlength)

  uppercase = prompt("Would you like uppercase letters in your password?", "Click yes if you would like them, hit cancel if you don't.");
  if (uppercase == null || uppercase == "") {
    txt = "You will not have uppercase letters in your password";
  } else {
    txt = "You will have uppercase letters in your password";
    uppercase = true;
    possible_selection = possible_selection + uppercasechars
  }

  console.log(txt)

  lowercase = prompt("Would you like lowercase letters in your password?", "Click yes if you would like them, hit cancel if you don't.");
  if (lowercase == null || lowercase == "") {
    txt = "You will not have lowercase letters in your password";
  } else {
    txt = "You will have lowercase letters in your password";
    lowercase = true;
    possible_selection = possible_selection + lowercasechars
  }
  console.log(txt)

  numerals = prompt("Would you like numbers in your password?", "Click yes if you would like them, hit cancel if you don't.");
  if (numerals == null || numerals == "") {
    txt = "You will not have numbers in your password";
  } else {
    txt = "You will have numbers in your password";
    numerals = true;
    possible_selection = possible_selection + numeralschars
  }
  console.log(txt)

  specials = prompt("Would you like special characters in your password?", "Click yes if you would like them, hit cancel if you don't.");
  if (specials == null || specials == "") {
    txt = "You will not have special characters in your password";
  } else {
    txt = "You will have special characters in your password";
    specials = true;
    possible_selection = possible_selection + specialschars
  }
  console.log(possible_selection)
  for (var i = 0; i < charlength; i++) {
    console.log(possible_selection[Math.floor(Math.random() * possible_selection.length)])
    password = password + possible_selection[Math.floor(Math.random() * possible_selection.length)]
  }
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};