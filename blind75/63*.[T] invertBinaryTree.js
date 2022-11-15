/** link : https://leetcode.com/problems/invert-binary-tree/
 *	category : Tree
 *	difficulty : Normal
 *
 * * desc : Given the root of a binary tree, invert the tree, and return its root.
 *
 * @input : [4,2,7,1,3,6,9]
 * @output : [4,7,2,9,6,3,1]
 *
 * @input : [2,1,3]
 * @output : [2,3,1]
 *
 * @input : []
 * @output : []
 *
 * ?constraints:
 *		The number of nodes in the tree is in the range [0, 100].
 *		-100 <= Node.val <= 100
 *
 */

// Naive Solution - O(1) / O(log₂n) / O(n) / O(n*log₂n) / O(n²) / O(2^n) / O(n!) - Time O() | Space O()

// Better Solution - O(1) / O(log₂n) / O(n) / O(n*log₂n) / O(n²) / O(2^n) / O(n!) - Time O() | Space O()

// trial cases
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// [4,2,7,1,3,6,9]
let root1 = new Node(4);
root1.left = new Node(2);
root1.right = new Node(7);
root1.left.left = new Node(1);
root1.left.right = new Node(3);
root1.right.left = new Node(6);
root1.right.right = new Node(9);

// [2, 1, 3];
let root2 = new Node(2);
root2.left = new Node(1);
root2.right = new Node(3);

// [];
let root3 = new Node(null);

console.log(`
	input: 	root1: [${JSON.stringify(root1)}] 
	output: ${invertTree(root1)}
`);

console.log(`
	input: 	root1: [${JSON.stringify(root2)}] 
	output: ${invertTree(root2)}
`);

console.log(`
	input: 	root1: [${JSON.stringify(root3)}] 
	output: ${invertTree(root3)}
`);
