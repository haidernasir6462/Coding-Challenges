// Find Intersection

// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
// the first element will represent a list of comma - separated numbers sorted in ascending order, the second element will 
// represent a second list of comma - separated numbers(also sorted).Your goal is to return a comma - separated string containing 
// the numbers that occur in elements of strArr in sorted order.If there is no intersection, return the string false.


function FindIntersection(strArr) {

    // code goes here  
    const element1 = strArr[0].split(",").map(e => e.trim())
    // console.log("element1", element1)
    const element2 = strArr[1].split(",").map(e => e.trim())
  
  
    const intersection = element1.filter(num => element2.includes(num));
  
    return intersection.length ? intersection.join(",") : "false";
  
  }
  
  // keep this function call here 
  console.log(FindIntersection(readline()));