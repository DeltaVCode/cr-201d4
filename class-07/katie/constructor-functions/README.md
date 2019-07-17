*JavaScript book, Ch. 3, "Functions, Object, and Methods"*
  **p.108-111: Create & Access Objects, Constructor Notation**
    - Object names begin with a capital letter
    - Think of a constructor as a template and has parameters, which set the value of a property in an object
    - All object will receive all of these properties and methods
    - Point out the ability to use a constructor function when making many of the same type of object
    - Point out that `this` is used to indicate that the property/method belongs to the object that `this` function creates. It can help to refer to `contextual this` to distinguish it from the English word "this".
    **Instantiate with the `new` keyword**
  ***
**Demo**
  * Compare the amount of code needed to write an object literal and a constructor function. On the surface, constructors don't appear to save much time, but point out that it takes a single line to create a new instance of an object with a constructor, whereas an object literal required the same lines of code to be written out each time.
    * For example: if it takes 10 lines to make each student into an object literal, and there are 25 students in the class, that is 250 lines of code
    * However, with a 10-line constructor, the same can be accomplished in 35 lines of code
  