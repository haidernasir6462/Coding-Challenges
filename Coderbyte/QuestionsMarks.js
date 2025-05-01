// Have the function QuestionsMarks(str) take the str string parameter, 
// which will contain single digit numbers, letters, and question marks, 
// and check if there are exactly 3 question marks between every pair of
// two numbers that add up to 10. If so, then your program should 
// return the string true, otherwise it should return the string false. 
// If there aren't any two numbers that add up to 10 in the string, then 
// your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should 
// return true because there are exactly 3 question marks between 6 and 4, 
// and 3 question marks between 5 and 5 at the end of the string.

function QuestionsMarks(str) {
    for (let i = 0; i < str.length; i++) {
      if (/\d/.test(str[i])) { // Check if str[i] is a digit
        for (let j = i + 1; j < str.length; j++) {
          if (/\d/.test(str[j])) { // Check if str[j] is also a digit
            const num1 = parseInt(str[i]);
            const num2 = parseInt(str[j]);
            const between = str.slice(i + 1, j); // All characters between i and j
            const questionMarks = (between.match(/\?/g) || []).length; // Count question marks
  
            if (num1 + num2 === 10) {
              if (questionMarks !== 3) {
                return false; // A pair sums to 10 but does not have exactly 3 '?'
              }
            }
          }
        }
      }
    }
    return true; // If no invalid pair found, return true
  }

  
// keep this function call here 
console.log(QuestionsMarks(readline()));