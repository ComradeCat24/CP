/** link : https://leetcode.com/problems/subtree-of-another-tree/
 *	category : Tree - (Binary Tree)
 *	difficulty : Normal
 *
 * * desc : Given the roots of two binary trees root and subRoot, return true if there is a subtree of
 * *		root with the same structure and node values of subRoot and false otherwise.
 * * 		A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
 * *		The tree could also be considered as a subtree of itself.
 *
 * @input : root = [3,4,5,1,2], subRoot = [4,1,2]
 * @output : true
 *
 * @input : root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * @output : false
 *
 * ?constraints:
 *		The number of nodes in the root tree is in the range [1, 2000].
 *		The number of nodes in the subRoot tree is in the range [1, 1000].
 *		-104 <= root.val <= 104
 *		-104 <= subRoot.val <= 104
 *
 */

// Recursive DFS preOrder - Time O(#root * #subRoot) | Space O(#root)
const isSubTree_rDFS = (root, subRoot) => {
	if (!subRoot) return true;
	if (!root) return false;

	// Recursive DFS preOrder - Time O(p + q)
	const isSameTree_rDFS = (p, q) => {
		if (!p && !q) return true;

		if (!p || !q || p.value !== q.value) return false;

		return (
			isSameTree_rDFS(p.left, q.left) && isSameTree_rDFS(p.right, q.right)
		);
	};

	if (isSameTree_rDFS(root, subRoot)) return true;

	return (
		isSubTree_rDFS(root.left, subRoot) ||
		isSubTree_rDFS(root.right, subRoot)
	);
};

// trial cases
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// root = [3,4,5,1,2], subRoot = [4,1,2]
let root1 = new Node(3);
root1.left = new Node(4);
root1.right = new Node(5);
root1.left.left = new Node(1);
root1.left.right = new Node(2);
let subroot1 = new Node(4);
subroot1.left = new Node(1);
subroot1.right = new Node(2);

// root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
let root2 = new Node(3);
root2.left = new Node(4);
root2.right = new Node(5);
root2.left.left = new Node(1);
root2.left.right = new Node(2);
root2.left.right.left = new Node(0);
let subroot2 = new Node(4);
subroot2.left = new Node(1);
subroot2.right = new Node(2);

// root = [1], subRoot = [0]
let root3 = new Node(1);
let subroot3 = new Node(0);

console.log(`
	input: 	root1: ${JSON.stringify(root1)}, 
		subroot1: ${JSON.stringify(subroot1)}
	output: ${isSubTree_rDFS(root1, subroot1)}
`);

console.log(`
	input: 	root2: ${JSON.stringify(root2)},
		subroot2: ${JSON.stringify(subroot2)}
	output: ${isSubTree_rDFS(root2, subroot2)}
`);

console.log(`
	input: 	root3: ${JSON.stringify(root3)},
		subroot3: ${JSON.stringify(subroot3)}
	output: ${isSubTree_rDFS(root3, subroot3)}
`);
