class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let temp = this.head;
		let pre = temp;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		var current = this.head;
		for (let i = 0; i != idx; i++) {
			current = current.next;
		}
		return current;
	}

	set(idx, val) {
		let foundNode = this.get(idx);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === 0) return this.unshift(val);
		if (idx === this.length) return this.push(val);
		const newNode = new Node(val);
		let pre = this.get(idx - 1);
		let aft = pre.next;
		pre.next = newNode;
		newNode.next = aft;
		this.length++;
		return newNode;
	}

	remove(idx) {
		if (idx < 0 || idx > this.length) return undefined;
		if (idx === 0) return this.shift();
		if (idx === this.length) return this.pop();
		let prevNode = this.get(idx - 1);
		let delNode = prevNode.next;
		prevNode.next = delNode.next;
		this.length--;
		return delNode;
	}

	reverse() {
		let node = this.head;
		[this.head, this.tail] = [this.tail, this.head];
		let nextNode,
			prevNode = null;
		for (let i = 0; i < this.length; i++) {
			nextNode = node.next;
			node.next = prevNode;
			prevNode = node;
			node = nextNode;
		}
		return this;
	}

	print() {
		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

var list = new SinglyLinkedList();
list.push(4);
list.push(8);
list.push(12);
list.push(16);
list.push(20);
list.push(24);
list.push('GOODBYE');
list.pop();
list.shift();
list.unshift(0);
list.get(3);
list.set(3, 'GO');
list.insert(0, 'GOODBYE');
list.remove(3);
list.reverse();
list.print();
