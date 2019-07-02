### Lecture Code  

First, `cd` to the appropriate directory.

Then:  
```
mkdir lecture-code
```  

Then:  
cd into newly created folder

```
Then:
touch lecture-code/index.html
```  

Then:  
```
code lecture-code
```  

In `index.html` add the following code:  
```
<!DOCTYPE html>
  <html>  
    <head>
      <title>Class 1 code demo!!!</title>
    </head>

    <body>
      <h1>Hi everyone!!!</h1>
        <script>
          var user = prompt('What is your name?');
          console.log('The user\'s name is ' + user);

          alert('Hi there, ' + user + ', I\'m going to ask you a question.');

          var answer1 = prompt(user + ', this is a yes/no question, so please answer with Y or N. Does Sam have 4 cats?');
          console.log('The user answered Question 1: ' + answer1);

          if(answer1 === 'N') {
            alert('Good guess! ' + user + ', Sam actually has 3 cats.');
          } else {
            alert('Too bad, ' + user +  '. Better luck next time!')
          }
        </script>

      </body>
  </html>
```

Run the above code in the browser. Demonstrate the open-in-browser shortcut: `alt + ctrl + Q`

Take a good amount of time and explain the above code:  
* Code style, such as indenting and use of empty lines to improve readability.  
* This demo also acclimates students to the entire toolchain. This is a good time to show Mac application switching with `Command-Tab` plus a variety of other keyboard shortcuts.  
* Also, use this demo to get students used to opening the Chrome Dev Tools(`cmd+option+i`), and show them the Elements, Console, and Sources tabs at this point. Show the interactions, and then open the console to inspect the log messages.  
* For this first day’s assignment, we’ll keep the JS inside of `<script>` tags in the HTML doc, just so students are familiar with this use of JS since it does show up from time to time. Starting with the next class, and from now on, all JS will be in a separate file.  
* Show students how to inspect the value of the variable in the console  
* When working with ‘prompt’ and ‘alert’ it is not unusual to have a student ask a question about ‘confirm’, so be ready for that  
* Explain the appropriate use of console.log() messages to verify program flow and data  
* Explain the use of the escape character \  
* Demonstrate concatenation  
* Mention the use to single-quotes in JS and double-quotes in HTML
* Demonstrate how to open the developer's console in Chrome and show students how to access their variables in the console

* The students should have been exposed to ‘if’ statements in the prework, but they are not in the curriculum for this class until Class 3. We can go ahead and teach them here since they’re pretty simple. Explain to the students that we’ll be covering the conditional/decision/flow features of JS all together in a couple of days. It may seem a bit slow of a pace to some students, but explain that the methodical approach we’re taking to start is to ensure that there are no blind spots on the fundamentals, and that the pace will be accelerating. If time does not allow for this material to be covered on day 1, move it into the lecture for day 2.