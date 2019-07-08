var counter = 1;       // Set counter to 1
var msg = ' ';    // Message assigned to empty strings

// Store 5 times table in a variable
while (counter< 10) {
  //msg += counter + ' x 5 = ' + (counter * 5) + '<br />';
 console.log( msg += counter   + ' x 5 = ' + (counter * 5) );
  counter++;
}


document.getElementById('answer').innerHTML = msg;