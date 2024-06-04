// Control Flow Structures

// 1. Conditional Statements
// Allow us to execute different blocks of code based or code based on a condition.

// () - Condition Block
// {} - Code Block (Group of statements)

// if-else statement
// let age = prompt("Enter your age:");
let age = 18;
if (age >= 18) {
  // Group of statements
  console.log("You are eligible to vote.");
} else {
  console.log("You are not aligible to vote.");
}

// else-if statement
let temperature = 30;
if (temperature < 0) {
  console.log("It's freezing.");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0 - 19
  console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
  // Range: 20 - 30
  console.log("It's warm outside");
} else {
  console.log("It's hot outside.");
}

// switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the weekdays.");
    break;
  case "Friday":
    console.log("It's the end of the weekdays.");
    break;
  default:
    console.log("It's a normal day.");
}
