// Functions in JavaScript

// Defining a function 'addTwoNumbers' that takes two parameters (number1 and number2)
function addTwoNumbers(number1, number2) {
  // The function returns the sum of the two numbers passed as arguments
  return number1 + number2;
}

// Calling the 'addTwoNumbers' function with arguments 10 and 50, and logging the result to the console
console.log(addTwoNumbers(10, 50)); // Expected output: 60

// Defining another function 'loginUserMessage' that takes one parameter 'username'
function loginUserMessage(username) {
  // If no 'username' is provided (i.e., it is falsy), log a message to request a username
  if (!username) {
    console.log("Please enter a username");
    return; // Exit the function early if no username is provided
  }
  // If a valid 'username' is provided, return a success message
  return `${username} logged in successfully`;
}

// Calling 'loginUserMessage' with the argument 'khrlmln' and logging the result
console.log(loginUserMessage("khrlmln")); // Expected output: "khrlmln logged in successfully"

// Calling 'loginUserMessage' without any arguments (username is undefined), which triggers the error message
loginUserMessage(); // Expected output: "Please enter a username"
