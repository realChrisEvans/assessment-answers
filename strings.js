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

// Write a program to count the number of words in a string.

let string = 'Hello World!';
let words = 1;

for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === ' ') {
        words++;
    }
} 
console.log("The number of words is " + words);

// Write a program to get all the character in a string uniquely.

let string = 'Hello World!';
let unique = '';

for (let i = 0; i < string.length; i++) {
    if (unique.indexOf(string.charAt(i)) === -1) {
        unique += string.charAt(i);
    }
}
console.log(unique);

// Write a program to check if a string is present another string.

let string = 'Hello World!';
let string2 = 'World';

while (string.length > 0) {
    if (string.indexOf(string2) !== -1) {
        console.log("The string " + string2 + " is present in the string " + string);
    }
    string = string.substring(1);
} console.log("The string " + string2 + " is present in the string " + string);


// Write a program that capitalizes the first letter of all words in a sentence.

let string = 'hello world!';
let string2 = '';

while (string.length > 0) {
    if (string.charAt(0) === ' ') {
        string2 += string.charAt(0);
        string = string.substring(1);
    } else {
        string2 += string.charAt(0).toUpperCase();
        string = string.substring(1);
    }
} console.log(string2);

