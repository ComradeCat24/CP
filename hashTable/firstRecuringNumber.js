/** 
desc : a function that return's the first recuring number in a given array. 

input : [2, 5, 1, 2, 3, 5, 1, 2, 4]
output : 2

input : [2, 1, 1, 2, 3, 5, 1, 2, 4]
output : 1

input : [2, 3, 4, 5]
output : undefined
*/

const firstRecuringNumber = (arr) => {
    const counts = new Map();
    for (let x of arr) {
        counts[x] = (counts[x] || 0) + 1;
        if (counts[x] === 2) return x;
    }
    return undefined;
};

console.log(firstRecuringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecuringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecuringNumber([2, 3, 4, 5]));
