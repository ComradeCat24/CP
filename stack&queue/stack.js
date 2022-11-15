class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export default class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// push — adds an element to the top of the stack.
	push(val) {
		var newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	// pop — removes an element from the top of the stack.
	pop() {
		if (!this.first) return null;
		var temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}

	peek() {
		if (!this.first) return null;
		return this.first.value;
	}
}

/**
 *
 * Stacks are based on the LIFO principle - (Last in, First out)
 * the element inserted at the last, is the first element to come out of the list.
 *
 * Analogy to Arrays :
 * UNSHIFT - Add at Start --> similar to stack.pop
 * SHIFT - Remove at Start
 * PUSH - Add at End --> similar to stack.push
 * POP - Remove at End
 *
 */
