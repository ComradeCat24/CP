/** link : https://leetcode.com/problems/maximum-subarray/
 *	category : Arrays
 * 	difficulty : Normal
 *
 * * desc : Given an integer array nums, find the contiguous subarray (containing at
 * *		least one number) which has the largest sum and return its sum.
 * *
 * * 		A subarray is a contiguous part of an array.
 *
 * @input : [-2,1,-3,4,-1,2,1,-5,4]
 * @output : 6
 * @explaination : [4,-1,2,1] has the largest sum = 6.
 *
 * @input : [1]
 * @output : 1
 *
 * @input : [5,4,-1,7,8]
 * @output : 23
 *
 * ?constraints:
 *		1 <= nums.length <= 105
 *		-104 <= nums[i] <= 104
 *
 */

// Naive Solution - 0(n²)
const maxSubArr_Naive = (arr) => {
	if (arr.length === 0) return null;

	let currSum;
	let maxSum = -Infinity;
	// let maxSubArr = [];

	for (let i = 0; i < arr.length; i++) {
		currSum = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			//  [-2,  1, -3,  4, -1,  2,  1, -5,  4]
			//	i↲	 ↳j ⇒⇒⇒
			currSum += arr[j];
			if (maxSum < currSum) {
				maxSum = currSum;
				// maxSubArr = arr.slice(i, j + 1);
			}
		}
		// if (maxSum < currSum) {
		// 	maxSubArr = [];
		// }
		console.log(maxSum);
	}
	return maxSum;
};

// Better Solution - 0(n)
const maxSubArr = (arr) => {
	if (arr.length === 0) return null;

	let prev = 0;
	let maxSum = arr[0];

	for (let i = 0; i < arr.length; i++) {
		prev = Math.max(prev + arr[i], arr[i]);
		maxSum = Math.max(prev, maxSum);
	}

	return maxSum;
};

console.log(`maxSubArr is ${maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4])}`);
// console.log(`maxSubArr is ${maxSubArr([1])} `);
// console.log(`maxSubArr is ${maxSubArr([5, 4, -1, 7, 8])} `);
console.log(`maxSubArr is ${maxSubArr([-5, -4, -1, -7, -8])} `);

/** Workspace
 *[1]
 **	[-2,  1, -3,  4, -1,  2,  1, -5,  4]
 *		largest sum
 *1->-2, -1, -4,  0, -1,  1,  2, -3,  1
 *2-> 	  1, -2,  2,  1,  3,  4, -1,  3
 *3->		 -3,  1,  0,  2,  3, -2,  2
 *?4->		 	  4,  3,  5, [6], 1,  5
 *5->		 		 -1,  1,  2, -3,  1
 *6->		 		      2,  3, -2,  2
 *7->		 		      	  1, -4,  0
 *8->		 		  			 -5, -1
 *9->		 		  			 	  4
 ** largest sum is 6.
 */

/** Workspace
 *[2] * Removing Negative Perfix
 **	[-2,  1, -3,  4, -1,  2,  1, -5,  4]
 *
 *  [-2,  1, -3,  4, -1,  2,  1, -5,  4]
 *1->-2
 *  ⌎-⌏  ⇠ largest sum
 *   ✗
 *  [ 1, -3,  4, -1,  2,  1, -5,  4]
 *2-> 1,
 *  ⌎-⌏
 *   ✔
 *  [ 1, -3,  4, -1,  2,  1, -5,  4]
 *3-> 1, -2
 *  ⌎-⌏
 *  	 ✗
 *  [ 4, -1,  2,  1, -5,  4]
 *4-> 4,  3,  5,  6,  1,  5
 *	⌎-⌏
 *   		⌎-⌏
 *?   			⌎-⌏
 *   					 ✔
 */

/** Workspace
 *[3] * Better
 **	[-2,  1, -3,  4, -1,  2,  1, -5,  4]
 *
 *
 *
 *
 */
