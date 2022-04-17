// Write a program to display 'n' terms of natural number and their sum.

let n = +prompt("Enter the number of terms");
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
    console.log(i);
}
console.log("The sum of natural numbers is " + sum);

// Write a program to display the cube of the number up to given integer.

let n = +prompt("Enter the number");
let sum = 0;

while (n >= 0) {
    sum = sum + n * n * n;
    n--;
}
console.log("The sum of cubes is " + sum);

for (let i = 1; i <= n; i++) {
    sum = sum + i * i * i;
    console.log(i * i * i);
}
console.log("The sum of cubes is " + sum);

// Write a program to display the multiplication table of a given integer

let n = +prompt("Enter the number");
let sum = 0;

while (n > 0) {
    sum = sum + n;
    console.log(n);
    n--;
}
console.log("The sum of multiplication table is " + sum);

for (let i = 1; i <= 10; i++) {
    sum = sum + n * i;
    console.log(n + " * " + i + " = " + n * i);
}
console.log("The sum of multiplication is " + sum);

// Write a program to sum all the digits of an integer.

let n = +prompt("Enter the number");
let sum = 0;

while (n > 0) {
    sum = sum + n % 10;
    n = Math.floor(n / 10);
}
console.log("The sum of digits is " + sum);

for (let i = 1; i <= n; i++) {
    sum = sum + i;
    console.log(i);
}
console.log("The sum of digits is " + sum);

// Write program to calculate the factorial of a given number

let n = +prompt("Enter the number");
let sum = 1;

while (n > 0) {
    sum = sum * n;
    n--;
}
console.log("The factorial of " + n + " is " + sum);

for (let i = 1; i <= n; i++) {
    sum = sum * i;
    console.log(i);
}
console.log("The factorial of " + n + " is " + sum);

// Write a program to display the 'n' terms of square natural number and their sum.

let n = +prompt("Enter the number");
let sum = 0;

while (n > 0) {
    sum = sum + n * n;
    console.log(n * n);
    n--;
}
console.log("The sum of squares is " + sum);

for (let i = 1; i <= n; i++) {
    sum = sum + i * i;
    console.log(i * i);
}
console.log("The sum of squares is " + sum);

// Write a program to convert a decimal number into binary.

let n = +prompt("Enter the number");
let sum = 0;

while (n > 0) {
    sum = sum + n % 2;
    n = Math.floor(n / 2);
}
console.log("The binary number is " + sum);

for (let i = 1; i <= n; i++) {
    sum = sum + i % 2;
    console.log(i % 2);
}
console.log("The binary number is " + sum);
