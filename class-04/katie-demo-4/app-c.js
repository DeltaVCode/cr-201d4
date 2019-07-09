//Functions let you generalize code for all kinds of inputs

function reverseString(reverseMe) {
  var reversed = "";
  for (var i = reverseMe.length - 1; i >= 0; i--){
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Katie"));
console.log(reverseString(reverseString("Katie") + " ,welcome to DeltaV Code School"));
console.log(reverseString("Glad to see everyone is doing so well"));


//function declaration
function toSum(number1, number2) {
  return number1 + number2;
}
//call the function declaration
console.log(toSum(4, 5));

//function expression anonymous function
var toSum = function (number1, number2) {
  return number1 + number2;
}

console.log(toSum(3, 7));
//use the variable name with (); to invoke and call it. 

//AFE
var favoriteMovie = function () {
  return "Captain Marvel";
};

favoriteMovie();

//named function expression
var favoriteMovie = function movie() {
  return "Captain Marvel";
};

favoriteMovie();
//movie();  //Will break don't do 

//RETURN 
//use to stop execution of a function and return a value back to the caller. 

//console.log is not a return statement 

function isPrime(integer) {
  for (var x = 2; x < integer; x++) {
    if (integer % x === 0) {
      console.log(integer + " is divisible by " + x);
      return false;
    }
  }
  return true;
}

//In scope and out of scope
//Your at the bar and ask the bartender where you can find the restroom. He says it is downstairs and to the left. 
//You're outside waiting to get into the bar and ask the bouncer where the restroom is and the bouncer says why don't you go inside and find it. 