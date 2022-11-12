/**
Create a function that reverses a string:

input: hello world!
output: !dlrow olleh
*/

// Naive
const reverseString = (input) => {
    let reversed = [];
    for (let i = input.length - 1; i >= 0; i--) {
        reversed.push(input[i]);
    }
    return reversed.join('');
};

// Better
const reverseString2 = (input) => [...input].reverse().join('');

console.log(reverseString2('hello'));
