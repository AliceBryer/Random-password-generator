// // // Assignment Code
var passwordLength = prompt("Please select the number of characters you wish to have in your password. Hint: Secure passwords are more than 8 characters");

// function getPasswordLength (){

if(isNaN(passwordLength)){
  alert ("You must enter a numeric value! Please refresh your page & start again!")
}

 else if (passwordLength >=8 && passwordLength <=128) {
alert("Thanks, you may now select your criteria!")
 }

else  {
  alert("Reminder - you must choose a value between 8 & 128 to be secure!")
}

console.log(passwordLength)
 
// function 2 

