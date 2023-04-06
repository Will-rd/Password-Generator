// Assignment Code

// These are arrays for the functions to mutate and pull from to generate a random password combination
var charLength = 8;
var yourchoice =[];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', ';(', ')', '-', '=', '?', ':', ';', '<', '>', '[', ']', '{', '}', '|', '~']

// Assignment Code

// This selects the generate id placed on the button element in the HTML DOM
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button

// This waits for the user to click the button and then executes the write password function
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //Returns true or false
  
  if (correctPrompts) {
   var newPassword = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = newPassword;
} 

}
// This function takes all of the data given by the user that was already turned into a number and multiplies it by one basically to give the value of the number given by the user. This value was placed into an array thus was a string until converted by the paseInt method.
  function generatePassword() {
    var password = '';
    for(var i = 0; i < charLength; i++) {
      var randominput = Math.floor(Math.random() * yourchoice.length);
      password = password + yourchoice[randominput];
  }
  return password;

}
// This function asks the user which types character choices they would like and adds to the blank array based on the boolean values set by the user
  function getPrompts(){
    yourchoice = []
    charLength =  parseInt(prompt("How many characters would you like in your password. (Between 8-128)"));

    if(isNaN(charLength) || charLength < 8 || charLength > 128) {  // This makes sure that the user has not input something incorrect into the text box in the promt
           alert('Hey home skillet. You put something in there that doesnt belong. Try using the number pad!');
           
           return false;
    }

    if (charLength == 69) {  //This is purely for entertainment value.
      alert('Nice')
    }

    if (confirm("Would you like to use lowercase letters in your password?")) {
          yourchoice = yourchoice.concat(lowerCase);
    }
    
    if (confirm("Would you like to use uppercase letters in your password?")) {
      yourchoice = yourchoice.concat(upperCase);
    }

    if (confirm("Would you like to use numbers in your password?")) {
      yourchoice = yourchoice.concat(numbers);
    }
    
    if (confirm("Would you like to use special characters in your password?")) {
      yourchoice = yourchoice.concat(special);
    }

    

    
    
    


      return true;

    }
    
    

    

    

   ;

  





