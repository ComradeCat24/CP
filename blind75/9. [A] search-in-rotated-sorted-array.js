/** link : https://leetcode.com/problems/search-in-rotated-sorted-array/
 *	category : Arrays
 *	difficulty : Intermediate
 *
 * * desc : There is an integer array nums sorted in ascending order (with distinct values).
 * *
 * *		Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the
 * *		resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * *		For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * *
 * *		Given the array nums after the possible rotation and an integer target,
 * *		return the index of target if it is in nums, or -1 if it is not in nums.
 * *
 * *		You must write an algorithm with O(log n) runtime complexity.
 *
 * @input : nums = [4,5,6,7,0,1,2], target = 0
 * @output : 4
 *
 * @input : nums = [4,5,6,7,0,1,2], target = 3
 * @output : -1
 *
 * @input : nums = [1], target = 0
 * @output : -1
 *
 * ?constraints:
 *		1 <= nums.length <= 5000
 *   	-104 <= nums[i] <= 104
 *  	All values of nums are unique.
 *		nums is an ascending array that is possibly rotated.
 *   	-104 <= target <= 104
 *
 */

// Naive Solution - O(n)
const searchInRotatedSortedArray_Naive = (nums, target) => {
	for (i = 0; i < nums.length; i++) {
		if (nums[i] === target) return i;
	}
	return -1;
};

const searchInRotatedSortedArray_Naive2 = (nums, target) =>
	nums.indexOf(target);

// Better Solution - O(log₂n)
const searchInRotatedSortedArray = (nums, target) => {
	let leftIdx = 0;
	let rightIdx = nums.length - 1;

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

		// console.log(leftIdx, middleIdx, rightIdx);
		// console.log(nums[leftIdx], nums[middleIdx], nums[rightIdx]);

		if (nums[middleIdx] == target) return middleIdx;

		// When dividing the roated array into two halves, one must be sorted.
		// Check if the leftIdx side is sorted
		if (nums[leftIdx] <= nums[middleIdx]) {
			// target is in the leftIdx
			if (nums[leftIdx] <= target && target <= nums[middleIdx])
				rightIdx = middleIdx - 1;
			// target is in the rightIdx
			else leftIdx = middleIdx + 1;
		}
		// Otherwise, the rightIdx side is sorted
		else {
			// target is in the rightIdx
			if (nums[middleIdx] <= target && target <= nums[rightIdx])
				leftIdx = middleIdx + 1;
			// target is in the leftIdx
			else rightIdx = middleIdx - 1;
		}
	}

	return -1;
};

const searchInRotatedSortedArray2 = (nums, target) => {
	// Special case
	if (nums === null || nums.length === 0) return -1;

	// Left and right pointers in the array
	let left = 0;
	let right = nums.length - 1;

	// First step is to find the pivot where the array is rotated
	while (left < right) {
		// Middle pointer
		let middle = left + parseInt((right - left) / 2);

		// If the element at the mid is greater than
		// the element at the right then we can say that
		// the array is rotated after middle index
		if (nums[middle] > nums[right]) {
			left = middle + 1;
		}
		// Else, the pivot is in the left part
		else {
			right = middle;
		}
	}

	// After the above loop is completed, then the left index will point to the pivot
	const pivot = left;
	left = 0;
	right = nums.length - 1;

	// Now we will find in which half of the array, our target is present
	if (target >= nums[pivot] && target <= nums[right]) {
		left = pivot;
	} else {
		right = pivot;
	}

	// Now perform normal binary search
	while (left <= right) {
		let middle = left + parseInt((right - left) / 2);
		if (nums[middle] === target) return middle;
		else if (target < nums[middle]) right = middle - 1;
		else left = middle + 1;
	}
	return -1;
};

// trial case 1
let num1 = [4, 5, 6, 7, 0, 1, 2];
let target1 = 0;

// trial case 2
let num2 = [4, 5, 6, 7, 0, 1, 2];
let target2 = 3;

// trial case 3
let num3 = [1];
let target3 = 0;

// trial case 4
let num4 = [15, 16, 17, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
let target4 = 9;

console.log(`
	input: 	nums: [${num1}] , target: ${target1}
	output: ${searchInRotatedSortedArray(num1, target1)}
`);

console.log(`
	input: nums: [${num2}] , target: ${target2}
	output: ${searchInRotatedSortedArray(num2, target2)}
`);

console.log(`
	input: nums: [${num3}] , target: ${target3}
	output: ${searchInRotatedSortedArray_Naive(num3, target3)}
`);

console.log(`
	input: 	nums: [${num4}] , target: ${target4}
	output: ${searchInRotatedSortedArray(num4, target4)}
`);

/** Workspace
 *	*	[4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 19, 20, 1, 2], 6
 *	[4, 5, 6, 7, 8, 9, 10, 11]	[12, 15, 16, 17, 19, 20, 1, 2]	divided in half
 *	[4, 5, 6, 7, 8, 9, 10, 11]	sorted array among those two
 *
 *	[4, 5, 6, 7] [8, 9, 10]
 *	[4, 5, 6]
 *
 *	[4, 5, 6]
 *
 */
