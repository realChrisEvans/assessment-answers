// Write a program to print individual characters from a string on different lines.

let string = 'Hello World!';

while (string.length > 0) {
    console.log(string.charAt(0));
    string = string.substring(1);
}
console.log(string);

// Write a program to print individual characters from a string on different lines in reverse order.

let string = 'Hello World!';

while (string.length > 0) {
    console.log(string.charAt(string.length - 1));
    string = string.substring(0, string.length - 1);
}
console.log(string);

// Write a program to count the number of vowels in a string.

let string = 'Hello World!';
let vowels = 0;

for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u') {
        vowels++;
    }
} console.log("The number of vowels is " + vowels);


