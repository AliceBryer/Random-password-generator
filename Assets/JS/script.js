// Assignment Code



// function one - just need to check how to check
//  for integer (Nan or undefined) & then add an alert if not

 var passwordLength = prompt("Please select the number of characters you wish to have in your password. Hint: Secure passwords are more than 8 characters");
console.log(passwordLength)

if (passwordLength >=8 && passwordLength <=128)

console.log ("Thanks, you can now select your required criteria.") 

else
 console.log ("Reminder:To be secure your password length should be between 8 and 128 characters, please refresh your page and enter a new length.")


// function two - get password criteria

let isExecuted = confirm("Would you like to include uppercase?");

console.log(isExecuted);  Yes = true, No = false

let isExecuted = confirm("Would you like to include lowercase?");

console.log(isExecuted);  Yes = true, No = false

let isExecuted = confirm("Would you like to include numbers?");

console.log(isExecuted);  Yes = true, No = false

let isExecuted = confirm("Would you like to include special characters?");

console.log(isExecuted);  Yes = true, No = false





var upCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var lowCase = ("abcdefghijklmnopqrstuvwxyz")
var num = ("0123456789")
var spCh = (" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")



 const generateBtn = document.querySelector("#generate");


};
const getPasswordCriteria = () => {
  return [
    "0123456789",
     "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
       " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
      ];
};

const createRandomPassword = () => {
return "kdUE28(@d0";
};

//main function to generate the random password

const generatePassword = () => {

// all your code goes here to generate a password

// get password length - function 1
const passwordLength = getPasswordlength();
console.log(passwordLength);
// get password critera - function 2
const passwordCriteria = getPasswordCriteria();
// create random password - function 3
const password =createRandomPassword(passwordLength,passwordCriteria)

return password;
};





// Write password to the #password input
function writePassword() {
  //  line 20 is calling another function
  var password = generatePassword();   
  // this targets the box 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// this is stating that when the generateBtn is clicked , that the 'writePassword' function (line 18) is executed
generateBtn.addEventListener("click", writePassword);
