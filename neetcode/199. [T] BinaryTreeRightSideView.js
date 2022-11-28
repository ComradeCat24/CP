/** Problem : 199. Binary Tree Right Side View
 *	link : https://leetcode.com/problems/binary-tree-right-side-view/
 *	category : Tree
 *	difficulty : Intermediate
 *
 * * desc : Given the root of a binary tree, imagine yourself standing on
 * *		the right side of it, return the values of the nodes you can see ordered from top to bottom.
 *
 * @input : [1,2,3,null,5,null,4]
 *					 0				⇽
 *				  ↙    ↘
 *			    2		3			⇽
 *		       	 ↘	     ↘
 *		   		  5   	  4			⇽
 * @output : [1,3,4]
 *
 * @input : [1,null,3]
 *					 1				⇽
 *				       ↘
 *			    		3			⇽
 * @output : [1,3]
 *
 * @input : []
 * @output : []
 *
 * ?constraints:
 *			The number of nodes in the tree is in the range [0, 100].
 *			-100 <= Node.val <= 100
 */

// Naive Solution - Runtime O() | Memory O() - O(1) / O(log₂n) / O(n) / O(n * log₂n) / O(n²) / O(2 ^ n) / O(n!)

// Better Solution - Runtime O() | Memory O() - O(1) / O(log₂n) / O(n) / O(n * log₂n) / O(n²) / O(2 ^ n) / O(n!)

// trial cases
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// [1,2,3,null,5,null,4]
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.right = new Node(5);
root1.right.right = new Node(4);

// [1,null,3]
let root2 = new Node(1);
root2.right = new Node(3);

// []
let root3 = new Node(null);

console.log(`
	input: 	root1: [${JSON.stringify(root1)}]
	output: ${isBalanced(root1)}
`);

console.log(`
	input: 	root2: [${JSON.stringify(root2)}] 
	output: ${isBalanced(root2)}
`);

console.log(`
	input: 	root3: [${JSON.stringify(root3)}]
	output: ${isBalanced(root3)}
`);
