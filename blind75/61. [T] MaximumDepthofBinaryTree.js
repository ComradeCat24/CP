/** link : https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *	category : Tree
 *	difficulty : Normal
 *
 * * desc : Given the root of a binary tree, return its maximum depth.
 * *		A binary tree's maximum depth is the number of nodes along the
 * *		longest path from the root node down to the farthest leaf node.
 *
 * @input : [3,9,20,null,null,15,7]
 * @output : 3
 *
 * @input : [1,null,2]
 * @output : 2
 *
 * ?constraints:
 *		The number of nodes in the tree is in the range [0, 104].
 *		-100 <= Node.val <= 100
 *
 */

// Recursive DFS - Time O(n) | Space O(n)
const maximumDepthofBinaryTree_rDFS = (root) => {
	if (root === null) return 0;

	return (
		1 +
		Math.max(
			maximumDepthofBinaryTree_rDFS(root.left),
			maximumDepthofBinaryTree_rDFS(root.right)
		)
	);
};

// Iterative BFS - Time O(n) | Space O(n)
import Queue from '../stack&queue/queue.js';

const maximumDepthofBinaryTree_iBFS = (root) => {
	// Base case
	if (!root) return 0;

	let currentVtx = root,
		queue = new Queue(),
		level = 0;

	// Initalizing the queue with root node
	queue.enqueue(currentVtx);

	// Loop as long as there is anything in the queue
	while (queue.size > 0) {
		for (let i = 0; i < queue.size; i++) {
			// Dequeue a node from the queue
			currentVtx = queue.dequeue();
			// If there is a left property on the node dequeued - add it to the queue
			if (currentVtx.left) queue.enqueue(currentVtx.left);
			// If there is a right property on the node dequeued - add it to the queue
			if (currentVtx.right) queue.enqueue(currentVtx.right);
		}
		// traverse the entire level and then add the next level
		// and then once we're done with that entire loop we're going to increase the number of levels
		level++;
	}

	return level;
};

// Iterative DFS preOrder - Time O(n) | Space O(n)
import Stack from '../stack&queue/stack.js';

const maximumDepthofBinaryTree_iDFS = (root) => {
	let stack = new Stack(),
		result = 1;

	stack.push([root, 1]);

	while (stack.size) {
		let [currentVtx, depth] = stack.pop();

		if (currentVtx) {
			result = Math.max(result, depth);
			stack.push([currentVtx.left, depth + 1]);
			stack.push([currentVtx.right, depth + 1]);
		}
	}
	return result;
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
root1.left.left = new Node(null);
root1.left.right = new Node(null);
root1.right.left = new Node(15);
root1.right.right = new Node(7);

// [1, null, 2];
let root2 = new Node(1);
root2.left = new Node(null);
root2.right = new Node(2);

console.log(`
	input: 	root1: [${JSON.stringify(root1)}] 
	output: ${maximumDepthofBinaryTree_iDFS(root1)}
`);

console.log(`
	input: 	root1: [${JSON.stringify(root2)}] 
	output: ${maximumDepthofBinaryTree_iDFS(root2)}
`);

/** Workspace
 *[1] *
 *
 *				 3
 *			  ↙    ↘
 *			9		20
 *				  ↙    ↘
 *				15		7
 *
 *	[3, 9, 20, null, null, 15, 7]
 *
 * maximum number of nodes for a level n binary tree is 2^{n+1} - 1.
 *
 * the height is h = log2(n + 1), i.e. h is O(log n)
 *
 * the number of leaves is lh = (n + 1)/2, i.e. roughly half of the nodes are at the leaves.
 *
 *
 */
