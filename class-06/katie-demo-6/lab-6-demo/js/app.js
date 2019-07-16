function randomCount() {
  return Math.random() * this.max;
};

var myOtherStore = {
  max: 12,
  getRandomCustomerCount: randomCount,
};
myOtherStore.getRandomCustomerCount();

var myStore = {
  min: 10,
  max: 30,
  cookiesPerHour: 3.14,
  getRandomCustomerCount: randomCount,

  generateCustomerCountByHour: function() {
    this.simulatedCookiesPerHour = [
      // 6:00
      this.getRandomCustomerCount() * this.cookiesPerHour,
      // 7:00
      this.getRandomCustomerCount() * this.cookiesPerHour,
      // But don't hard-code this repetitive calculation;
      // use a loop instead...
      this.getRandomCustomerCount() * this.cookiesPerHour,
    ];
  }
};

myStore.generateCustomerCountByHour();
// ^--- `this` inside generateCustomerCountByHour

/*
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property of the object representing that location
*/

var person = {
  born: 1962,
  name: 'Heather',
  year: 2019,
  currentAge: function(){
    var age = this.year - this.born;
    return console.log(age);
  }
}
person.currentAge();