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
const isSameTree_rDFS = (p, q) => {
	if (!p && !q) return true;

	if (!p || !q || p.value !== q.value) return false;

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Iterative BFS - Time O() | Space O()
import Queue from '../stack&queue/queue.js';

const isSameTree_iBFS = (p, q) => {
	let queue = new Queue();

	queue.enqueue(p);
	queue.enqueue(q);

	if (!p && !q) return true;

	while (queue.size > 0) {
		const tree1 = queue.dequeue();
		const tree2 = queue.dequeue();

		if (!tree1 || !tree2 || tree1.value !== tree2.value) return false;

		if (tree1.left) queue.enqueue(tree1.left);
		if (tree2.left) queue.enqueue(tree2.left);
		if (tree1.right) queue.enqueue(tree1.right);
		if (tree2.right) queue.enqueue(tree2.right);
	}

	return true;
};

// Iterative DFS preOrder - Time O() | Space O()
import Stack from '../stack&queue/stack.js';

const isSameTree_iDFS = (p, q) => {
	let stack = new Stack();

	stack.push(p);
	stack.push(q);

	if (!p && !q) return true;

	while (stack.size) {
		let tree2 = stack.pop();
		let tree1 = stack.pop();

		console.log(tree1?.value, tree2?.value);

		if (!tree1 || !tree2 || tree1.value !== tree2.value) return false;

		if (tree1.right) stack.push(tree1.right);
		if (tree2.right) stack.push(tree2.right);
		if (tree1.left) stack.push(tree1.left);
		if (tree2.left) stack.push(tree2.left);
	}
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
	output: ${isSameTree_iDFS(p1, q1)}
`);

console.log(`
	input: 	p2: ${JSON.stringify(p2)}, q2: ${JSON.stringify(q2)}
	output: ${isSameTree_iDFS(p2, q2)}
`);

console.log(`
	input: 	p3: ${JSON.stringify(p3)}, q3: ${JSON.stringify(q2)}
	output: ${isSameTree_iDFS(p3, q3)}
`);
