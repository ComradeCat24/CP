/** link : https://leetcode.com/problems/contains-duplicate/
 *
 * * desc : Given an integer array nums, return true if any value appears at
 * *		least twice in the array, and return false if every element is distinct.
 *
 * @input : [2, 5, 1, 2, 3, 5, 1, 2, 4]
 * output : true
 *
 * @input : [2, 1, 1, 2, 3, 5, 1, 2, 4]
 * output : true
 *
 * @input : [2, 3, 4, 5]
 * output : false
 */

const containsDuplicate = (arr) => {
	const counts = new Map();
	for (let x of arr) {
		counts[x] = (counts[x] || 0) + 1;
		if (counts[x] === 2) return true;
	}
	return false;
};
console.log(containsDuplicate([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(containsDuplicate([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(containsDuplicate([2, 3, 4, 5]));

//* TIP: hashset to get unique values in array, to check for duplicates easily
