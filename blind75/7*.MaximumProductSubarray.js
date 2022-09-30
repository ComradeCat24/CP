/** link : https://leetcode.com/problems/maximum-product-subarray/
 *	category : Arrays
 * 	difficulty : Intermediate
 *
 * * desc : Given an integer array nums, find a contiguous non-empty subarray within
 * *		the array that has the largest product, and return the product.
 * *
 * *		The test cases are generated so that the answer will fit in a 32-bit integer.
 * *
 * * 		A subarray is a contiguous part of an array.
 *
 * @input : [2,3,-2,4]
 * @output : 6
 * @explaination : [2,3] has the largest product 6.
 *
 * @input : [-2,0,-1]
 * @output : 0
 * @explaination : The result cannot be 2, because [-2,-1] is not a subarray.
 *
 * ?constraints:
 *		1 <= nums.length <= 2 * 10^4
 *		-10 <= nums[i] <= 10
 *		The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 */

// Naive Solution - 0(n²)
const maxProductSubArr_Naive = (arr) => {
	//
};

// Better Solution - 0(n)
const maxProductSubArr = (arr) => {
	//
};

// trial case 1
let num1 = [2, 3, -2, 4];

// trial case 2
let num2 = [-2, 0, -1];

// trial case 3
let num3 = [-3, -1, -1];

// trial case 4
let num4 = [-2];

console.log(`
	input: 	nums: [${num1}] 
	output: ${maxProductSubArr(num1)}
`);

console.log(`
	input: 	nums: [${num2}] 
	output: ${maxProductSubArr(num2)}
`);

console.log(`
	input: 	nums: [${num3}] 
	output: ${maxProductSubArr(num3)}
`);

console.log(`
	input: 	nums: [${num4}] 
	output: ${maxProductSubArr(num4)}
`);

/** Workspace
 *[1]
 *
 */
