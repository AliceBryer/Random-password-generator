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
 

// Function 2 - getPasswordCriteria

var upCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var lowCase = ("abcdefghijklmnopqrstuvwxyz")
var num = ("0123456789")
var spCh = (" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// function getPasswordCritera (){

// }
var criteria = [];

var ans1 = confirm("In your password would you like to include uppercase characters?");

if (ans1 == true) {
  criteria.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
}
var ans2 = confirm("In your password would you like to include lowercase characters?");
if (ans2== true) {
  criteria.push ("abcdefghijklmnopqrstuvwxyz")
}

var ans3 = confirm("In your password would you like to include numberic characters?");

if (ans3== true) {
  criteria.push ("0123456789")
}

var ans4 = confirm("In your password would you like to include special characters?");

if (ans4== true) {
  criteria.push (" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
}

if (criteria.length >=1) {
alert("You may now get a password by clicking the Generate Password button!")
}

else {
  alert("you must select at least one of the criteria, please refresh your page and start again!")
}

console.log(criteria.length)
console.log(criteria)

//   function generatePassword 

// randomChoice will give us an index number in the array.
// ok we now have passwordLength, passwordCriteria, and randomChoice 

// an empty array to store our password in
var finalArray = [];

// then we need a for loop, which will give us an array of characters as per the password.Length & criteria

 for(let i = 0; i < passwordLength; i++) {

  var randomIndex = (Math.floor(Math.random() * criteria.length))

console.log(randomIndex)

var randomString = criteria[randomIndex];

console.log (randomString)

var randomCharacter = randomString[Math.floor(Math.random()*randomString.length)];

finalArray.push(randomCharacter)
}

console.log (finalArray)

 var finalPassword = finalArray.join('');

 console.log (finalPassword)
