/**
a function that merges two sorted array, and resulting array would be sorted as well.

input : [1, 2 , 5, 20] , [4, 8, 10]
output : [1, 2, 4, 5, 8, 10, 20]
*/

// Naive
// time -- 	O(n)
// space --	O(1)
const mergeAndSort = (a, b) => {
	let length = a.length + b.length;
	let result = [];
	for (let i = 0; i < length; i++) {
		console.log(`\ni - ${i} || a - ${a} || b - ${b}`);

		if (a[0] === undefined && b[0] === undefined) break;
		else if (a[0] > b[0] || a[0] === undefined) {
			result.push(b[0]);
			b.shift();
		} else if (a[0] < b[0] || b[0] === undefined) {
			result.push(a[0]);
			a.shift();
		}

		console.log(`result - ${result} `);
	}
	return result;
};

// Better
// validation --
// for duplicates.
//

// mergeAndSort([1, 2, 5, 20], [4, 8, 10]);
// mergeAndSort([11, 17, 55, 81, 99], [2, 8, 10]);
// mergeAndSort([2, 8, 10], [11, 17, 55, 81, 99]);
mergeAndSort([14, 20, 45, 81, 99], [2, 15, 66, 79, 115]);
