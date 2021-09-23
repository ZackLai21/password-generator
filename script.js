// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.
  var passLength = prompt("Please enter the length of your password:");
  //check that the user has the invalid length input
  if(passLength<8 || passLength>128){
    alert("Your password should have at least 8 characters and at most 128 characters!");
    return;
  }
  //ask the user if want to use lowercase letters
  var useLowerCase = confirm("Do you want to use lowercase letters in your password?");
  //ask the user if want to use uppercase letters
  var useUpperCase = confirm("Do you want to use Uppercase letters in your password?");
  //ask the user if want to use numeric numbers
  var useNumber = confirm("Do you want to use Numbers in your password?");
  //ask the user if want to use special characters
  var useSpecial = confirm("Do you want to use Special characters in your password?");
  // check the user if select at least one type of characters
  if(useLowerCase==false && useUpperCase==false && useNumber==false && useSpecial==false){
    alert("You need to pick at least one type of characters to generate the password!");
    return;
  }
  //create variables for each type of characters
  var pickOptions = "";
  var UpperChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
  var LowerChoice = "abcdefghijklmnopqrstuvwxyz" ;
  var NumbersChoice = "1234567890"; 
  var SpecialChoice = "`~!@#$%^&*()_+{}|:,./?><'";
  //include the selected types of characters into one string
  if(useUpperCase==true){
    pickOptions=pickOptions.concat(UpperChoice);

  }
  if(useLowerCase==true){
    pickOptions=pickOptions.concat(LowerChoice);
  }
  if(useNumber==true){
    pickOptions=pickOptions.concat(NumbersChoice);
  }
  if(useSpecial==true){
    pickOptions=pickOptions.concat(SpecialChoice);
  }

  var password = '' ;

  //generate the password
  for(var i =0; i <passLength;i++){
      password += pickOptions[Math.floor(Math.random()*pickOptions.length)];
  }
 
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
