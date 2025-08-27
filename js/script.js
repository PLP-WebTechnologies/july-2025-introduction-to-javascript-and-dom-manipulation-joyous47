// ===============================
// Part 1: Basics
// ===============================
let age = 20;
let name = "Joy";
let basicsOutput = "";

if (age >= 18) {
  basicsOutput = `${name} is an adult.`;
} else {
  basicsOutput = `${name} is a minor.`;
}
document.getElementById("basics-output").textContent = basicsOutput;

// ===============================
//  Part 2: Functions
// ===============================

// Function 1: Greeting
function greetUser(username) {
  document.getElementById("greet-output").textContent = `Hello, ${username}! 👋`;
}

// Function 2: Add numbers
function addNumbers(a, b) {
  return a + b;
}
document.getElementById("add-output").textContent = addNumbers(2, 3);

// ===============================
// Part 3: Loops
// ===============================
let numbers = [1, 2, 3, 4, 5];
let loopResult = "";

// Example 1: for loop
for (let i = 0; i < numbers.length; i++) {
  loopResult += numbers[i] + " ";
}

// Example 2: forEach loop
numbers.forEach(num => {
  loopResult += `[${num * 2}] `;
});

document.getElementById("loops-output").textContent = loopResult;

// ===============================
// Part 4: DOM Manipulation
// ===============================
let toggleBtn = document.getElementById("toggle-btn");
let domMessage = document.getElementById("dom-message");

// DOM interaction 1 & 2: Toggle text visibility
toggleBtn.addEventListener("click", function() {
  domMessage.style.display = (domMessage.style.display === "none") ? "block" : "none";
});

// DOM interaction 3: Change text dynamically after delay
setTimeout(() => {
  domMessage.textContent = "⏳ This text was updated after 3 seconds!";
}, 3000);
