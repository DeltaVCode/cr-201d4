


/*Functions are first class objects in JS
This means functions have property/value pairs and can do pretty much anything variables can do.  For example, 
I can assign a function to a variable, I can pass a function as an argument. Functions can be returned by other functions.*/

/* Two types of scoping 
global and function local 
When a script loads the browser first looks for all global variables and function declarations then hoists each of them to the top. Now,  the whole page has access them.*/

var globalVar;
function () {
  var localVar;
  if (globalVar > 0) {
    var localVar2 = 2;
  }
  // localVar2 is valid here
}




/*However, this global scoping can cause some issues.

 */

/*In scope and out of scope
Your at the bar and ask the bartender where you can find the restroom. He says it is downstairs and to the left.
You're outside waiting to get into the bar and ask the bouncer where the restroom is and the bouncer says why don't you go inside and find it. */

/*
Whereas declaring a function at the global level of a script, module, or top level of a block statement (that is, where it is not expecting a value), will result in a function declaration.*/