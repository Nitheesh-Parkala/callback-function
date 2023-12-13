# callback-function 
Callbacks are the functions passed to another function as an argument and it helps to write asynchronous operation in JS.
When we are using callbacks, we face two issues:
## 1. Callback hell - 
When we have multiple dependent callbacks it will form nested callbacks, code will be unmaintainable and unreadable. This nested callback structure is also called Pyramid of Doom.
## 2. Inversion of control:
 We pass the callback function within another function, we are blindly trusting where we don't know whether that function will ever execute our callback function or not, it's so risky for a developer. We loose the control of our program.
