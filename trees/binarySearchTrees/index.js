/* 

FAQs:
Q. HOW BSTS WORK
A. Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent

*/
import { Queue } from '../../stack&queue/queue';

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export default class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (current.value === newNode.value) return undefined;
			else if (current.value > newNode.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (current.value < newNode.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	search(value) {
		if (!this.root) return false;
		let current = this.root;
		while (true) {
			if (current.value === value) return true;
			else if (current.value > value) {
				if (current.left === null) return false;
				current = current.left;
			} else if (current.value < value) {
				if (current.right === null) return false;
				current = current.right;
			}
		}
	}

	BFS() {
		let result = [],
			queue = new Queue();

		queue.enqueue(this.root);
		while (queue.size) {
			let current = queue.dequeue();
			result.push(current.value);
			if (current.left) queue.enqueue(current.left);
			if (current.right) queue.enqueue(current.right);
		}
		return result;
	}

	DFSinOrder() {
		let values = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			values.push(node.value);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return values;
	}

	DFSpreOrder() {
		let values = [];
		const traverse = (node) => {
			values.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return values;
	}

	DFSpostOrder() {
		let values = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			values.push(node.value);
		};
		traverse(this.root);
		return values;
	}
}

//               41
//       20               65
//   11      29       50       91
// -- --    -- 32   -- --   72    99

let bst = new BinarySearchTree();
bst.insert(41);
bst.insert(20);
bst.insert(11);
bst.insert(29);
bst.insert(32);
bst.insert(65);
bst.insert(50);
bst.insert(91);
bst.insert(72);
bst.insert(99);

// bst.search(25);

// [41, 20, 65, 11, 29, 50, 91, 32, 72, 99]
// bst.BFS();
// [11, 20, 29, 32, 41, 50, 65, 72, 91, 99]
// bst.DFSinOrder();
// [41, 20, 11, 29, 32, 65, 50, 91, 72, 99]
// bst.DFSpreOrder();
// [11, 32, 29, 20, 50, 72, 99, 91, 65, 41]
// bst.DFSpostOrder();

debugger;
