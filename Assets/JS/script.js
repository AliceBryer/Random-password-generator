// // // Assignment Code



function getPasswordLength (){

// }

 var passwordLength = prompt("Please select the number of characters you wish to have in your password. Hint: Secure passwords are more than 8 characters");
console.log(passwordLength);

if (passwordLength === !'number') {
  alert ("You must enter a numeric value, please start again!")
}

else if (passwordLength >=8 && passwordLength <=128) {
  alert("Thanks, you may now select your criteria!")
}

// else {alert ("You must enter a value between 8 & 128, please start again!")}

 

