// Assignment code here
// User input criteria
var obtainInput;
var confirmNumber;
var confirmSpecial;
var confirmUppercase;
var confirmLowercase;

// start password criteria
// Special specials
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[",  "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabet
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space for Uppercase conversion
space = [];
// Selections outside if statement will be concatenated 
var toSelect;
// Convert letters to Uppercase
var toUpper = function (x) {
  return x.toUpperCase();
}
// create a variable for uppercase conversion
alphaBeta = alpha.confirmSpecial(toUpper);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

get.addEventListener("click", function() {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});

// Start generatePassword
function generatePassword() {
  // Start prompt for user input
  obtainInput = parseInt(prompt("How many specials would you like for your password?  Choose between 8 and 128"));
  // if statement for user input
  if(!obtainInput) {
    alert("Please input a number");
  } else if(obtainInput < 8 || obtainInput > 128 ) {
    // validate user criteria
    // Start user prompts
    obtainInput = parseInt(prompt("Please choose between 8 and 128"));

  } else {
    // continues once user input is validated
    confirmNumber = confirm("Will this password contain numbers:");
    confirmSpecial = confirm("Will this password contain special specials?");
    confirmUppercase = confirm("Will this password contain Uppercase letters?");
    confirmLowercase = confirm("Will this password contain Lowercase letters?");
};

// else if for four negative enteries
if (!confirmSpecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    toSelect = alert("Password must contain at least one!");
}
// if statement that uses user input prompts to determine their selections
// else if for four positive selections
else if (confirmSpecial && confirmNumber && confirmUppercase && confirmLowercase) {
    toSelect = special.concat(number, alpha, alphaBeta);
}
// if for 3 positive selections
else if (confirmSpecial && confirmNumber && confirmUppercase) {
  toSelect = special.concat(number, alphaBeta);
}
else if (confirmSpecial && confirmNumber && confirmLowercase) {
  toSelect = special.concat(number, alpha);
}
else if (confirmSpecial && confirmLowercase && confirmUppercase) {
  toSelect = special.concat(alpha, alphaBeta);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  toSelect = number.concat(alpha, alphaBeta);
}
// Else if for 2 positive options 
else if (confirmSpecial && confirmNumber) {
  toSelect = special.concat(number);

} else if (confirmSpecial && confirmLowercase) {
  toSelect = special.concat(alpha);

} else if (confirmSpecial && confirmUppercase) {
  toSelect = special.concat(alphaBeta);
}
else if (confirmLowercase && confirmNumber) {
  toSelect = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  toSelect = alpha.concat(alphaBeta);

} else if (confirmNumber && confirmUppercase) {
  toSelect = number.concat(alphaBeta);
}
// Else if for 1 positive option
else if (confirmSpecial) {
  toSelect = special;
}
else if (confirmNumber) {
  toSelect = number;
}
else if (confirmLowercase) {
  toSelect = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  toSelect = space.concat(alphaBeta);
};   

// password variable

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
