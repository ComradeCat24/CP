
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		var newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		var poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	// If length is 0, return undefined
	// Store the current head property in a variable (we'll call it old head) //
	// If the length is one // set the head to be null // set the tail to be
	// null // Update the head to be the next of the old head // Set the head's
	// prev property to null Set the old head's next to null
	// Decrement the length
	// Return old head
	shift() {
		if (this.length === 0) return undefined;
		let 

		return this;
	}

	unshift(val) {}
}

let dList = new DoublyLinkedList();
dList.push(4);
dList.push(8);
dList.push(12);
dList.push(16);
dList.push(20);
// dList.pop();
dList.shift();

debugger;
