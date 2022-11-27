/** Problem : 110. Balanced Binary Tree
 *	link : https://leetcode.com/problems/balanced-binary-tree/
 *	category : Tree
 *	difficulty : Normal
 *
 * * desc : Given a binary tree, determine if it is height-balanced
 * *
 * * 		A height-balanced binary tree is a binary tree in which the depth
 * * 		of the two subtrees of every node never differs by more than one.
 * *
 *
 * @input : [3,9,20,null,null,15,7]
 *				 3
 *			  ↙    ↘
 *			9		20
 *				  ↙    ↘
 *				15		7
 * @output : true
 *
 * @input : [1,2,2,3,3,null,null,4,4]
 *					 1
 *				  ↙    ↘
 *				2		2
 *		     ↙    ↘
 *		   3       3
 *		↙    ↘
 *	  4        4
 * @output : false
 *
 * @input : []
 * @output : true
 *
 * ?constraints:
 *			The number of nodes in the tree is in the range [0, 5000].
 *			-104 <= Node.val <= 104
 */

// Naive Solution - Runtime O(n²) | Memory O()
const isBalanced_topDown = (root) => {
	if (!root) return true;

	let height = function (node) {
		if (!node) return 0;
		return 1 + Math.max(height(node.left), height(node.right));
	};

	return (
		Math.abs(height(root.left) - height(root.right)) < 2 &&
		isBalanced(root.left) &&
		isBalanced(root.right)
	);
};

// Better Solution - Runtime O(n) | Memory O()
const isBalanced = (root) => {
	// If the tree is empty, we can say it’s balanced...
	if (!root?.value) return true;

	// Create a function to return the “height” of a current subtree using recursion...
	const height = (root) => {
		// Base case...
		if (!root?.value) return 0;
		console.log(`root: ${root.value}`);

		// Height of left subtree...
		let leftHeight = height(root.left);
		console.log(`LH: ${leftHeight}`);

		// Height of height subtree...
		let rightHight = height(root.right);
		console.log(`RH: ${rightHight}`);

		console.log(leftHeight, rightHight);
		// In case of left subtree or right subtree unbalanced, return -1...
		if (leftHeight == -1 || rightHight == -1) {
			console.log('idk');
			return -1;
		}

		// If their heights differ by more than ‘1’, return -1...
		if (Math.abs(leftHeight - rightHight) > 1) {
			console.log('less');
			console.log(leftHeight, rightHight);
			return -1;
		}

		console.log('done\n');
		// Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
		return Math.max(leftHeight, rightHight) + 1;
	};

	// Height Function will return -1, when it’s an unbalanced tree...
	if (height(root) == -1) return false;

	return true;
};

// trial cases
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// [3,9,20,null,null,15,7]
let root1 = new Node(3);
root1.left = new Node(9);
root1.right = new Node(20);
root1.right.left = new Node(15);
root1.right.right = new Node(7);

// [1,2,2,3,3,null,null,4,4]
let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(2);
root2.left.left = new Node(3);
root2.left.right = new Node(3);
root2.right.left = new Node(null);
root2.right.right = new Node(null);
root2.left.left.left = new Node(4);
root2.left.left.right = new Node(4);

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
