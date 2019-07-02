//Create an array of villains
var villains=['Red','Jason','Voldemort','Freddy'];
//console.log the first element in the array
console.log(villains[0], "Expect outoput: Red");
//Add an item to the array
console.log("Add an item to the array")
villains.push('Joker');
//Console.log the array length meaning how many elements are in the array
console.log("array length");
console.log(villains.length);
//Use the array literal notation to add an element to the array
villains[5]="Dark Side";
//console.log all the entire array
console.log(villains);
//Check to see if an element is inside the array
console.log("Check to see if a string is in the array");
console.log(villains.indexOf('Red'), "indexOf");
//console.log the entire array
console.log(villains);
console.log("Check the length of your array");
console.log(villains.length, "length of our array");

//Take the first element out of the array
villains.shift();
//Put an element in the front of the array
villains.unshift();
villains;
villains.splice(1, 0, 'Sid');
villains;



var months = ['Jan', 'March', 'April', 'June']; months.splice(1, 0, 'Feb');
inserts at index 1 console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']



//Create an array called  and put two sport elements inside the array. Then create a second variable called total and set it to hold the sports.push('beach volleyball", "freestyle diving")


//console.log(sports)
//console.log(total)

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
var months = ['June', 'July', 'August', 'December', 'September'];
months.splice(1, 3, 'Feb', "March", "October");
//first argument is the index you want to start. The second argument is how many you want to replace 
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

//use unshift to add to the front of the array
//use shift to take off the front of the array