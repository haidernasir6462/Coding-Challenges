// Longest Words

// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word 
// in the string. If there are two or more words that are the same length, return the first word from 
// the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain 
// numbers, for example "Hello world123 567"

function LongestWord(sen) {

    // code goes here  
    const words = sen.split(" ")
    // console.log("words", words)
    const punctuationMarks = [
      ".", ",", "!", "?", ";", ":", "-", "â",
      "(", ")", "[", "]", "{", "}",
      "'", "\"", "`", "~",
      "@", "#", "$", "%", "^", "&", "*",
      "_", "+", "=", "\\", "|", "/", "<", ">", "â¦"
    ];
    var word = ""
    for (i = 0; i < words.length; i++) {
      // const word = ""
      if (words[i].length > word.length) {
        if (words[i].split("").some(char => punctuationMarks.includes(char))) {
          const removedPunctuation = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
          if (removedPunctuation.length > word.length) {
  
            word = removedPunctuation
          }
        }
        else {
          word = words[i]
        }
      }
    }
    return word;
  
  }
  
  // keep this function call here 
  console.log(LongestWord(readline()));
