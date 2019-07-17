'use strict';

 //constructor function

 function Hotel(name, city, rating, breakfast, pets){
   this.name = name;
   this.city = city;
   this.rating = rating;
   this.breakfast = breakfast;
   this.pets = pets;
 }

 //Make new hotel objects using constructor syntax ( this will move to line 32)
 var ritz = new Hotel ('Ritz', 'Dallas', 5, true, false);
 var holidayInn = new Hotel ('Holiday Inn', 'Daytona', 5, true, true);

/*Add two new properties to the Hotel constructor function. 
We add new properties on objects by using the object name and dot notation however we can't add new properties to the constructor the same way we do with objects
Hotel.rooms= 500; will not work bc we are adding to a function. */

//To add properties to a constructor function we use the keyword prototype and dot notation
Hotel.prototype.rooms = 0;
Hotel.prototype.booked = 0;
Hotel.prototype.noSmoking = true;

//Add a method called checkAvailability that takes in rooms and booked to find rooms left
Hotel.prototype.checkAvailability = function(){
  return this.rooms - this.booked;
};

//Use console.log to check the values. 

console.log(ritz.rooms = 500);
console.log(ritz.booked = 200);
console.log(ritz.checkAvailability());
console.table(ritz);