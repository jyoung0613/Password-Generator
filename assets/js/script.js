// Assignment code here
// User input criteria
var obtainInput;
var confirmNumber;
var confirmcharacter;
var confirmUppercase;
var confirmLowercase;
var alphaBeta;

// start password criteria
// Special
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[",  "]", " ^ ", "_", "`", "{", "|", "}", "~"];
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
alphaBeta = alpha.map(toUpper);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  password = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start generatePassword
function generatePassword() {
  // Start prompt for user input
  obtainInput = parseInt(prompt("How many characters would you like in your password?  Please choose between 8 and 128"));
  // if statement for user input
  if(!obtainInput) {
    alert("Please input a number");
  } else if(obtainInput < 8 || obtainInput > 128 ) {
    // validate user criteria
    // Start user prompts
    obtainInput = parseInt(prompt("Please choose between 8 and 128"));

  } else {
    // continues once user input is validated
    confirmNumber = confirm("Would you like this password to contain numbers:");
    confirmcharacter = confirm("Would you like this password to contain special characters?");
    confirmUppercase = confirm("Would you like this password to contain Uppercase letters?");
    confirmLowercase = confirm("Would you like this password to contain Lowercase letters?");
};

// else if for four negative enteries
if (!confirmcharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    toSelect = alert("Password must contain at least one!");
}
// if statement that uses user input prompts to determine their selections
// else if for four positive selections
else if (confirmcharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    toSelect = character.concat(number, alpha, alphaBeta);
}
// if for 3 positive selections
else if (confirmcharacter && confirmNumber && confirmUppercase) {
  toSelect = character.concat(number, alphaBeta);
}
else if (confirmcharacter && confirmNumber && confirmLowercase) {
  toSelect = character.concat(number, alpha);
}
else if (confirmcharacter && confirmLowercase && confirmUppercase) {
  toSelect = character.concat(alpha, alphaBeta);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  toSelect = number.concat(alpha, alphaBeta);
}
// Else if for 2 positive options 
else if (confirmcharacter && confirmNumber) {
  toSelect = character.concat(number);

} else if (confirmcharacter && confirmLowercase) {
  toSelect = character.concat(alpha);

} else if (confirmcharacter && confirmUppercase) {
  toSelect = character.concat(alphaBeta);
}
else if (confirmLowercase && confirmNumber) {
  toSelect = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  toSelect = alpha.concat(alphaBeta);

} else if (confirmNumber && confirmUppercase) {
  toSelect = number.concat(alphaBeta);
}
// Else if for 1 positive option
else if (confirmcharacter) {
  toSelect = character;
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
    password = [];


  // begin random selection variables:
  for (var i = 0; i < obtainInput; i++) {
    var picktoSelect = toSelect[Math.floor(Math.random() * toSelect.length)];
    password.push(picktoSelect);
  }

  // This joins the password array and converts it to a string
    var ps = password.join("");
      UserInput(ps);
      return ps;
}

  // This puts the password value into the text box
  // changed function input to use textcontent
  function UserInput(ps) {
    document.getElementById("password").textContent = ps;

  }

  var write = document.querySelector("#write");
    write.addEventListener("click", function() {
    writePassword();
  });

  // Write password to the #password input
  function writePassword() {
    document.getElementById("password").toSelect();
    document.execCommand("write");
    alert("Password copied to clipboard!");
  }
