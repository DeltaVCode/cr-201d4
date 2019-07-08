var  table = 5;             // Unit of table
var  operator = 'addition'; // Type of calculation
var counter = 1;                 // Set counter to 1
var msg = " ";              // Message

if (operator === 'addition') {
  // Do addition
  while (counter< 11) {
    msg += counter + ' + ' + table + ' = ' + (counter + table) + '<br />';
    counter++;
  }
} else {

  // Do multiplication
  while (counter< 11) {
    msg += counter+ ' x ' + table + ' = ' + (counter * table) + '<br />';
    counter++;
  }
}

console.log(msg)

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;