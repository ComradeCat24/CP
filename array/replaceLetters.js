/**
Create a function that replaces letter 'm' with letter 'a' in a string:

input: pmnkmj
output: pankaj
*/

// Naive
const replaceLetters = (input) => {
    let result = [];
    for (let i = 0; i <= input.length - 1; i++) {
        input.charAt(i) === 'm' ? result.push('a') : result.push(input[i]);
    }
    return result.join('');
};

console.log(replaceLetters('pmnkmj'));
