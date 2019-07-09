/*
Write a function called "getLengthOfThreeWords".
Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
*/

function getLengthOfThreeWords(word1, word2, word3) {
  var length = word1.length +word2.length +word3.length
  return length;
}

//=============================================================
/*
Write a function called "multiplyBetween".

Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* The product between 2 and 10 is 2 * 3 * 4 = 24.
* The product between 4 and 9 is 4 * 5 * 6 * 7 * 8 = 6,720.
* If num2 is not greater than num1, it should return 0.

var output = multiplyBetween(2, 5);
console.log(output); // --> 24
*/

function multiplyBetween(num1, num2) {

  if (num2 <= num1) {
    return 0;
  }

  var product = 1;
  for (var start = num1; start < num2; start++) {
    product = product * start;
  }
  return product;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24

var output = multiplyBetween(4, 9);
console.log(output); // --> 6720
//======================================================

/*
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
*/

function convertScoreToGrade(score) {
  switch (true) {
    case (score > 100 || score < 0): console.log("INVALID SCORE");
      break;
    case (score > 89 && score < 100): console.log("A");
      break;
    case (score > 79 && score < 90): console.log("B");
      break;
    case (score > 70 && score < 80): console.log("C");
      break;
    case (score > 60 && score < 71): console.log("D");
      break;
    default: console.log("F");
  }
}

var output = convertScoreToGrade(80);
console.log(output); // --> 'B'

//===========================================================
/*
Write a function called "removeElement".

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

Notes:
* If all the elements match, it should return an empty array.
* If an empty array is passed in, it should return an empty array.

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
*/

function removeElement(array, discarder) {
  newArray=[];
  for( var i = 0; i <array.length; i++){
    if(array[i] !== discarder){
      newArray.push(array[i]);
    }
    
  }
return newArray;
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

//==============================================================
/*
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.
*/
var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]


function getAllElementsButLast(array) {
  return array.splice(0,array.length-1)

}

//===================================================================
/*
Write a function called "removeFromFront".

Given an array, "removeFromFront" returns the given array with its first element removed.

Notes:
* You should be familiar with the method 'shift'.
*/
var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]


function removeFromFront(arr) {
  arr.shift()
  return arr

}

//==================================================================
//Write a function called "isSameLength".
//Given two words, "isSameLength" returns whether the given words have the same length.
 var output = isSameLength('words', 'super');
 console.log(output); // --> true

function isSameLength(word1, word2) {
  return word1.length === word2.length 

}

