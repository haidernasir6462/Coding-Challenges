// Codeland Username Validation

// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine 
// if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.


function CodelandUsernameValidation(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const validChars = alphabet + numbers + "_";
  
    if (str.length < 4 || str.length > 25) return false;
    if (!alphabet.includes(str[0])) return false;
    if (str[str.length - 1] === "_") return false;
  
    for (let i = 0; i < str.length; i++) {
      if (!validChars.includes(str[i])) {
        return false;
      }
    }
  
    return true;
  }