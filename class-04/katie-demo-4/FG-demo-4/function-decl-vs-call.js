'use strict'
//Functions should do one thing such as modify or answer something like a query
//but not both.

// DO use verbs in your function name
function inviteUser (emailAddress) { /* implementation */ }
/*Do declare local variables and try not to use global variables. You want your
function to depend on local values and not outside values
*/




function sayHello(){
  return console.log( 'Hey class!') //return is used to stop the execution of a function and return a value back.
}

/*
**I create the function definition but let's open the console and you will notice that the return log 'Hey class!' does not show. 

**At the end of the script we will make a list of function calls. So let's add,
          //sayHello(); to the list.
*/

// FUNCTION WITH PARAMETERS
function defineParams(msg){
  return console.log(msg)
}


//FUNCTION WITHOUT ALL ARGUMENTS

function toSum(number1, number2) {  //takes two arguments
  return number1 + number2;
}

console.log(toSum(2)); //NaN
console.log(toSum(4,5,6)) //third argument will be ignored and return proper calculation 9



//FUNCTION CALLS here we run the functions. If the function has parameters then we pass the arguments
sayHello();
defineParams('This is the argument to the msg param');
//favMovie() //will be TypeError  because an AFE does not get hoisted. More to come in scope lecture

//Anonymous Function Expression
var favMovie = function () {
  return console.log("Captain Marvel");
};

favMovie();

//named function expression
var favMovie = function movie() {
  return "Captain Marvel";
};

favMovie();
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
