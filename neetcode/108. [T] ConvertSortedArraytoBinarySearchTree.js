/** Problem : 108. Convert Sorted Array to Binary Search Tree
 *	link : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 *	category : Tree 
 *	difficulty : Normal 
 *
 * * desc : Given an integer array nums where the elements are sorted in ascending order,
 * *		convert it to a height-balanced binary search tree.
 * *
 * * 		A height-balanced binary tree is a binary tree in which the depth
 * * 		of the two subtrees of every node never differs by more than one.
 *
 * @input : [-10,-3,0,5,9]
 * @output : [0,-3,9,-10,null,5] OR [0,-10,5,null,-3,null,9]
 *					 0				*					  0
 *				  ↙    ↘			*				   ↙    ↘
 *			   -3		9			*				 -10	 5
 *		      ↙		  ↙				*					↘	   ↘
 *		   -10   	5				*	  			 	-3      9
 *
 *
 * @input : [1,3]
 * @output : [3,1] OR [1,3]
 *					 3				*					  1
 *				  ↙    				*				        ↘
 *			   -3					*				 		  3
 *
 * ?constraints:
 *			1 <= nums.length <= 104
 *			-104 <= nums[i] <= 104
 * 			nums is sorted in a strictly increasing order.

 */

// Naive Solution - Runtime O() | Memory O() - O(1) / O(log₂n) / O(n) / O(n * log₂n) / O(n²) / O(2 ^ n) / O(n!)
const sortedArrayToBST = () => {
	//
};

// Better Solution - Runtime O() | Memory O() - O(1) / O(log₂n) / O(n) / O(n * log₂n) / O(n²) / O(2 ^ n) / O(n!)

// trial cases
let nums1 = [-10, -3, 0, 5, 9];
let nums2 = [1, 3];

console.log(`
	input: nums1: [${nums1}], 
	output: ${JSON.stringify(sortedArrayToBST(nums1))}
`);

console.log(`
	input: nums2: [${nums2}], 
	output: ${JSON.stringify(sortedArrayToBST(nums2))}
`);
