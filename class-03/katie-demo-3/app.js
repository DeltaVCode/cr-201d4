// * We are CERTAIN of the number of iterations we need to make

    // * Open [ForLoops](ForLoop.js);

    // * Statement 1 sets a variable before the loop starts (var i = 0).

    // * Statement 2 defines the condition for the loop to run (i must be less than 5).

    // * Statement 3 increases a value (i++) each time the code block in the loop has been executed.

// This loop will iterate and log 0-10, stopping at 11 and not logging it.
for (var i = 0; i < 11 ; i++) {
    console.log('The number is currently ' + i)
}
for (var i = 10; i < 30; i++) {
    console.log("The current number is " + i);
}

for (var counter = 1; counter <= 5; counter++) {
  console.log('for Counter: ' + counter);
}

for (var backwards = 5; backwards > 0; backwards--) {
  console.log('for Backwards: ' + backwards);
}

console.log('***************************** USING WHILE LOOP IN A FUNCTION');

//var number = prompt('Feed me a number!');
/* prompt()returns a string value. So if I want the user to enter a number I have to convert the string to a number type value. To change a string type to a number type, you can call the built into JS object method called parseInt().  However, what if the user is a jerk and types a letter of symbol or hits the spacebar a thousand times. Let's first check determine if the input value will result in a return NaN. If NaN is passed on to arithmetic operations, the operation results will also be NaN. To check the value of the input we can use call the built in JS method isNaN().
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
*/
var number = prompt('Feed me a number!');
 while (isNaN(parseInt(number))) {
  number = prompt('No seriously, I need a number!');
 }

 console.log(number * 2);

/* Not equals:
    !=   (corresponds to ==)
    !==  (corresponds to ===)
*/


// function promptAndTrim(message) { 
//   var result = prompt(message) 
//   if (result !== null) {
//     result = result.trim();
//   }
//   return result;
// }
// console.log(promptAndTrim()); 

// function promptRequired(message) {
//   var result = promptAndTrim(message);
  
//   while (result === '' || result === null) {
//     result = promptAndTrim('REQUIRED: ' + message);
//   }
  
//   return result;
// }

// var name = promptRequired('What is your name?');
// console.log(name);

// var pet = promptRequired('Do have a furry companion?');
// console.log(pet);


// ===============================================
// Increment by more than 1

for (var i = 0; i < 200; i += 50) {
  console.log('By 50: ' + i);
}

for (var j = 0; j < 4; j++) {
  console.log('By 50: ' + (j * 50));
}


