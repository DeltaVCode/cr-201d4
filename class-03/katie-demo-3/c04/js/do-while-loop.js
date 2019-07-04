var  pizzaCount = 1;       // Set counter to 1
var msg = ' ';    // Message

// Store 5 times table in a variable
do {
  msg += pizzaCount+ ' x 5 = ' + (pizzaCount * 5) + '   ';
  pizzaCount++;
} while (pizzaCount < 1); 
// Note how this is already 1 and it still runs
console.log(pizzaCount);
document.getElementById('answer').innerHTML = msg;