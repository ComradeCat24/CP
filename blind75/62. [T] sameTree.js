/** link : https://leetcode.com/problems/same-tree/
 *	category : Tree
 *	difficulty : Normal
 *
 * * desc : Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * *		Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * @input : p = [1,2,3], q = [1,2,3]
 * @output : true
 *
 * @input : p = [1,2], q = [1,null,2]
 * @output : false
 *
 * @input : p = [1,2,1], q = [1,1,2]
 * @output : false
 *
 * ?constraints:
 *		The number of nodes in both trees is in the range [0, 100].
 *		-104 <= Node.val <= 104
 *
 */

// Recursive DFS preOrder - Time O(p+q)
const isSameTree = (p, q) => {
	if (!p && !q) return true;

	if (!p || !q || p.value !== q.value) return false;

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// trial cases
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// p1 = [1,2,3], q1 = [1,2,3]
let p1 = new Node(1);
p1.left = new Node(2);
p1.right = new Node(3);
let q1 = new Node(1);
q1.left = new Node(2);
q1.right = new Node(3);

// p2 = [1,2], q2 = [1,null,2]
let p2 = new Node(1);
p2.left = new Node(2);
let q2 = new Node(1);
q2.left = new Node(null);
q2.right = new Node(2);

// p3 = [1,2,1], q3 = [1,1,2]
let p3 = new Node(1);
p3.left = new Node(2);
p3.right = new Node(1);
let q3 = new Node(1);
q3.left = new Node(1);
q3.right = new Node(2);

console.log(`
	input: 	p1: ${JSON.stringify(p1)}, q1: ${JSON.stringify(q1)}
	output: ${isSameTree(p1, q1)}
`);

console.log(`
	input: 	p2: ${JSON.stringify(p2)}, q2: ${JSON.stringify(q2)}
	output: ${isSameTree(p2, q2)}
`);

console.log(`
	input: 	p3: ${JSON.stringify(p3)}, q3: ${JSON.stringify(q2)}
	output: ${isSameTree(p3, q3)}
`);
