/** link : https://leetcode.com/problems/product-of-array-except-self/
 *	category : Arrays
 *	difficulty : Intermediate
 *
 * * desc : Given an integer array nums, return an array answer such that answer[i]
 * *		is equal to the product of all the elements of nums except nums[i].
 * *
 * * 		The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * *
 * * 		You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * @input : [1,2,3,4]
 * @output : [24,12,8,6]
 *
 * @input : [-1,1,0,-3,3]
 * @output : [0,0,9,0,0]
 *
 * ?constraints:
 *      2 <= nums.length <= 105
 *      -30 <= nums[i] <= 30
 *      The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity?
 *          (The output array does not count as extra space for space complexity analysis.)
 *
 */

// Naive Solution - O(n²)
const productOfArrayExceptSelf_Naive = (arr) => {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		let prod = 1;
		for (let j = 0; j <= arr.length - 1; j++) {
			if (i === j) continue;
			prod *= arr[j];
		}
		result.push(prod);
		console.log(result);
	}
	return result;
};

// Better Solution - O(n) - With Division Operator
// Doesnt work when 0 is present in the given array
const productOfArrayExceptSelf_wDivision = (arr) => {
	let productOfEveryElement = 1;
	let result = [];

	for (let i = 0; i < arr.length; i++) productOfEveryElement *= arr[i];

	for (let i = 0; i < arr.length; i++)
		result.push(productOfEveryElement / arr[i]);

	return result;
};

// Better Solution - Time O(n) | Space O(n)
// Doesnt work when 0 or negative numbers are present in the given array
const productOfArrayExceptSelf_wExtraSpace = (arr) => {
	let prefix = [];
	let postfix = [];
	let result = [];

	for (let i = 0; i < arr.length; i++)
		prefix.push(arr[i] * (prefix[i - 1] || 1));

	for (let i = arr.length - 1; i >= 0; i--)
		postfix.unshift(arr[i] * (postfix[0] || 1));

	for (let i = 0; i < prefix.length; i++)
		result.push((prefix[i - 1] || 1) * (postfix[i + 1] || 1));

	console.log(prefix);
	console.log(postfix);

	return result;
};

// Best Solution - Time O(n) | Space O(1)
// problem 1: Will it work when 0 or negative numbers are present in the given array
const productOfArrayExceptSelf = (arr) => {
	let result = [];

	// step 1: make prefix array
	for (let i = 0; i < arr.length; i++) {
		result.push((arr[i - 1] || 1) * (result[i - 1] || 1));
	}

	let tempPostfix = 1;
	// step 2:
	for (let i = arr.length - 1; i >= 0; i--) {
		tempPostfix *= arr[i + 1] || 1;
		result[i] *= tempPostfix;
	}

	return result;
};

// trial case 1
// let num1 = [1, 2, 3, 4];
let num1 = [4, 5, 6, 7];

// trial case 2
// let num2 = [-1, 1, -3, 3];
let num2 = [-1, 1, 0, -3, 3];

console.log(`
	input: nums: [${num1}]
	output: [${productOfArrayExceptSelf(num1)}]
`);

console.log(`
	input: nums: [${num2}]
	output: [${productOfArrayExceptSelf(num2)}]
`);

/** Workspace
 *[1] * With Division
 *
 * input: [1,2,3,4]
 * TotalSum : 24
 * output : [(24/1), (24/2), (24/3), (24/4)]
 *
 */

/** Workspace
 *[2] * w/ extra space complexity
 *
 *      [1,2,3,4] => [24, 12, 8, 6]
 *
 * input : [1, 2, 3,  4]
 * prefix : [1, 2, 6, 24]	[(1*1), (1*2), (2*3), (6*4)]
 * postfix : [24, 24, 12, 4]	[(1*24), (2*12), (3*4), (4*1)]
 * output : [24, 12, 8, 6]	[{(1)*(2*12)}, {(1*1)*(3*4)}, {(1*2)*(4*1)}, {(2*3)*(1)} ]
 *								[(prefix[i-1]*postfix[i+1])]
 *
 */

/** Workspace
 *[3] * w/o extra space complexity
 *
 *      [1,2,3,4] => [24, 12, 8, 6]
 *
 * input : [1, 2, 3,  4]
 * step1 of output : [1, 1, 2, 6]	[(1), (1*1), (1*2), (3*2)]		-- left to right
 * step2 of output : [1, 1, 2, 6]	[(1), (1*1), (1*2), (3*2)]		-- right to left
 * final output : [24, 12, 8, 6]
 *
 */
