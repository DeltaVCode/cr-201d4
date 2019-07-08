'use strict'
//if statement demo 1
var pass = 50; //Pass mark
var score = 49; // Current score
var msg;  //Message

// Select message to write based on score
if (score > pass) {
 msg = "Congrats, you passed!";
  console.log(msg);
} else {
  msg = 'Have another go Jacob that was not encouraging!';
  console.log(msg); 
}
console.log(msg);