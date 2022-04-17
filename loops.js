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

for (let i = 1; i <= n; i++) {
    sum = sum + i * i * i;
    console.log(i * i * i);
}
console.log("The sum of cubes is " + sum);




