class QueueNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export default class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// enqueue — adds an element to the end of the queue.
	enqueue(val) {
		var newNode = new QueueNode(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	// dequeue — removes an element from the front of the queue.
	dequeue() {
		if (!this.first) return null;

		var temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

/**
 *
 * Queue are based on the FIFO principle - (First in, First out)
 * the element inserted at the first, is the first element to come out of the list.
 *
 * Analogy to Arrays :
 * UNSHIFT - Add at Start
 * SHIFT - Remove at Start --> similar to Queue.dequeue
 * PUSH - Add at End --> similar to Queue.enqueue
 * POP - Remove at End
 *
 */
