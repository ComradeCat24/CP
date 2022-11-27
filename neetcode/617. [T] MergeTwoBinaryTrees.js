/** Problem : 617. Merge Two Binary Trees
 *	link : https://leetcode.com/problems/merge-two-binary-trees/
 *	category : Tree
 *	difficulty : Normal
 *
 * * desc : You are given two binary trees root1 and root2.
 * *
 * *		Imagine that when you put one of them to cover the other
 * *		some nodes of the two trees are overlapped while the others are not.
 * *		You need to merge the two trees into a new binary tree.
 * *		The merge rule is that if two nodes overlap,
 * *		then sum node values up as the new value of the merged node.
 * *		Otherwise, the NOT null node will be used as the node of the new tree.
 * *
 * * 		Return the merged tree.
 * *
 * * Note: The merging process must start from the root nodes of both trees.
 *
 * @input : root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
 *					 1				*					 2
 *				  ↙    ↘			*				  ↙    ↘
 *				3		2			*				1		 3
 *		     ↙						*		          ↘		   ↘
 *		   5						*	  				4       7
 * @output :  [3,4,5,5,4,null,7]
 *					 3
 *				  ↙    ↘
 *				4		5
 *		     ↙    ↘       ↘
 *		   5       4	   7
 *
 *
 * @input : root1 = [1], root2 = [1,2]
 *					 1				*					 1
 *									*				  ↙
 *									*				2
 * @output : [2,2]
 *					 2
 *				  ↙
 *				2
 *
 * ?constraints:
 *			The number of nodes in both trees is in the range [0, 2000].
 *			-104 <= Node.val <= 104
 */

// Solution - Runtime O(n+m) | Memory O()
const mergeTrees = (root1, root2) => {
	if (!root1 && !root2) return null;

	const root = new Node((root1?.value || 0) + (root2?.value || 0));
	root.left = mergeTrees(root1?.left, root2?.left);
	root.right = mergeTrees(root1?.right, root2?.right);

	return root;
};

// trial cases
class Node {
	constructor(value) {
		this.value = value || null;
		this.left = null;
		this.right = null;
	}
}

// root1 = [1, 3, 2, 5],
let root1 = new Node(1);
root1.left = new Node(3);
root1.right = new Node(2);
root1.left.left = new Node(5);
// root2 = [2, 1, 3, null, 4, null, 7];
let root2 = new Node(2);
root2.left = new Node(1);
root2.right = new Node(3);
root2.left.right = new Node(4);
root2.right.right = new Node(7);

// root3 = [1]
let root3 = new Node(1);
// root4 = [1, 2]
let root4 = new Node(1);
root4.left = new Node(2);

console.log(`
	input:
		root1: [${JSON.stringify(root1)}], 
		root2: [${JSON.stringify(root2)}]
	\n
	output: ${JSON.stringify(mergeTrees(root1, root2))}
\n
`);

console.log(`
	input:
		root3: [${JSON.stringify(root3)}], 
		root4: [${JSON.stringify(root4)}]
	\n
	output: ${JSON.stringify(mergeTrees(root3, root4))}
\n
`);
