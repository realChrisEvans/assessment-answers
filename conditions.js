// Write a Program to check if a number is Positive or Negative 
let num = +prompt("Enter a number");

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

console.log("This number is " + (num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"));

// Write a program to accept the height of a person in centimeter and categorize the person according to their height
let height = +prompt("Enter your height in centimeter");

if (height > 150) {
    console.log("Dwarf");
}
else if (height <= 165 && height >= 150) {
    console.log("Average");
}
else if (height <= 195 && height >= 165) {
    console.log("Tall");
}
else if (height > 195) {
    console.log("Giant");
}

console.log("Height: " + height);

// Write a program to find the largest of three numbers
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");

let largest = Math.max(num1, num2, num3);

console.log("The largest number is" + largest);

// Write a program to find the eligibility of admission for a professional course based on the following criteria

let marksInMath = +prompt("Enter marks in Math");
let marksInPhysics = +prompt("Enter marks in Physics");
let marksInChemistry = +prompt("Enter marks in Chemistry");

if (marksInMath >= 60 && marksInPhysics >= 55 && marksInChemistry >= 50) {
    console.log("You are eligible for admission");
}
else {
    console.log("You are not eligible for admission");
}

// Write a program to read temperature in centigrade and display a suitable message according to temperature state below

let temp = +prompt("Enter temperature in centigrade");

if (temp < 0) { 
    console.log("Freezing");
}
if (temp >= 0 && temp < 10) {
    console.log("Very Cold");
}
if (temp >= 10 && temp < 20) {
    console.log("Cold");
} 
if (temp >= 20 && temp < 30) {
    console.log("Normal");
} 
if (temp >= 30 && temp < 40) {
    console.log("Warm");
}
if (temp >= 40) {
    console.log("Very Hot");
}

console.log("The temperature is " + temp);

// Write a program to check whether a triangle is Equilateral, Isosceles or Scalene

let side1 = +prompt("Enter side 1");
let side2 = +prompt("Enter side 2");
let side3 = +prompt("Enter side 3");

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral");
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}

console.log("This triangle is " + (side1 === side2 && side2 === side3 ? "Equilateral" : side1 === side2 || side2 === side3 || side1 === side3 ? "Isosceles" : "Scalene"));

// Write a program to check whether an alphabet is a vowel or consonant

let alphabet = prompt("Enter an alphabetical character");

if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
    console.log("Vowel");
}
else {
    console.log("Consonant");
}

console.log(alphabet);

// Write a program to read any Month Number in integer and display Month name in the word

let month = +prompt("Enter a month number");

if (month === 1) {
    console.log("January");
}   
else if (month === 2) {
    console.log("February");
}
else if (month === 3) {
    console.log("March");
}
else if (month === 4) {
    console.log("April");
}
else if (month === 5) {
    console.log("May");
}
else if (month === 6) {
    console.log("June");
}
else if (month === 7) {
    console.log("July");
}
else if (month === 8) {
    console.log("August");
}
else if (month === 9) {
    console.log("September");
}
else if (month === 10) {
    console.log("October");
}
else if (month === 11) {
    console.log("November");
}
else if (month === 12) {
    console.log("December");
}
else {
    console.log("Invalid month");
}

console.log("The month is " + month);

//  Write a program to calculate profit and loss on a transaction. 

let cost = +prompt("Enter the cost");
let sale = +prompt("Enter the sale");

if (sale > cost) {
    console.log("Profit is " + (sale - cost));
}
else if (sale < cost) {
    console.log("Loss is " + (cost - sale));
}   
else {                               
    console.log("No profit or loss");
}

console.log("Cost: " + cost);
console.log("Sale: " + sale);
console.log("Profit: " + (sale - cost));
console.log("Loss: " + (cost - sale)); 

