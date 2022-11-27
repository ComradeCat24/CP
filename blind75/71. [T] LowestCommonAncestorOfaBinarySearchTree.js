/** link : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 *	category : Tree - (Binary Search Tree)
 *	difficulty : Intermediate
 *
 * * desc : Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * *
 * *		The lowest common ancestor is the lowest node in the tree that has both n1 and n2 as descendants,
 * *		where n1 and n2 are the nodes for which we wish to find the LCA.
 * *		Hence, the LCA of a binary tree with nodes n1 and n2 is the shared ancestor of n1 and n2
 * *		that is located farthest from the root.
 * *
 *
 * ?Illustration:
 *           	1
 *			↙       ↘
 *        2          3
 *	   ↙    ↘     ↙    ↘
 *    4      5   6      7
 *
 *	Path from root to 5 = { 1, 2, 5 }
 *	Path from root to 6 = { 1, 3, 6 }
 *
 *	We start checking from 0 index. As both of the value matches( pathA[0] = pathB[0] ), we move to the next index.
 *	pathA[1] not equals to pathB[1], there’s a mismatch so we consider the previous value.
 *	Therefore the LCA of (5,6) = 1
 *
 * @input : root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * @output : 6
 * @explaination : The LCA of nodes 2 and 8 is 6.
 *
 * @input : root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * @output : 2
 * @explaination : The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 *
 * @input : root = [2,1], p = 2, q = 1
 * @output : 2
 *
 * ?constraints:
 *		The number of nodes in the tree is in the range [2, 105].
 *		-109 <= Node.val <= 109
 *		All Node.val are unique.
 *		p != q
 *		p and q will exist in the BST.
 */

// Naive Solution - Runtime O(log₂n) | Memory O(1)
const lowestCommonAncestor = (root, p, q) => {
	let currentVtx = root;

	while (currentVtx) {
		//
	}
};

// trial cases
import BinarySearchTree from '../trees/binarySearchTrees/index.js';

// root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
let root1 = new BinarySearchTree();
root1.insert(6);
root1.insert(2);
root1.insert(8);
root1.insert(0);
root1.insert(4);
root1.insert(7);
root1.insert(9);
root1.insert(3);
root1.insert(5);
let p1 = 2;
let q1 = 8;

console.log(`
	input: 	root1: ${JSON.stringify(root1)}, 
		p1: ${p1}
		q1: ${q1}
	output: ${lowestCommonAncestor(root1, p1, q1)}
`);
