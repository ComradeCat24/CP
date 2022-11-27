class MaxBinaryHeap {
	constructor() {
		this.value = [];
	}

	insert(val) {
		this.value.push(val);
		this.bubbleup();
	}

	bubbleup() {
		let index = this.value.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while (this.value[parentIndex] <= this.value[index]) {
			[this.value[parentIndex], this.value[index]] = [
				this.value[index],
				this.value[parentIndex],
			];
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
			console.log(index, parentIndex);
		}
		return this.value;
	}

	extractMax() {
		this.swap(0, this.value.length - 1);
		let removedValue = this.value.pop();
		this.sinkDown();
		return removedValue;
	}

	swap(a, b) {
		return ([this.value[a], this.value[b]] = [
			this.value[b],
			this.value[a],
		]);
	}

	sinkDown() {
		let parentIdx = 0;
		let parent = this.value[parentIdx];
		let lChild = this.value[2 * parentIdx + 1];
		let rChild = this.value[2 * parentIdx + 2];
		while (lChild > parent && rChild > parent) {
			if (lChild > parent && rChild > parent) {
				if (lChild > rChild) {
					this.swap(2 * parentIdx + 1, parentIdx);
					parentIdx = 2 * parentIdx + 1;
				} else if (lChild < rChild) {
					this.swap(2 * parentIdx + 2, parentIdx);
					parentIdx = 2 * parentIdx + 2;
				}
			} else if (lChild < parent) {
				this.swap(2 * parentIdx + 1, parentIdx);
				parentIdx = 2 * parentIdx + 1;
			} else if (rChild < parent) {
				this.swap(2 * parentIdx + 2, parentIdx);
				parentIdx = 2 * parentIdx + 2;
			}
			lChild = this.value[2 * parentIdx + 1];
			rChild = this.value[2 * parentIdx + 2];
		}
	}
}

let mbh = new MaxBinaryHeap();
mbh.insert(90);
mbh.insert(62);
mbh.insert(60);
mbh.insert(55);
mbh.insert(48);
mbh.insert(47);
mbh.insert(45);
mbh.insert(37);
mbh.insert(31);
mbh.insert(32);
mbh.insert(29);
mbh.insert(25);

// before
// [ 90, 62, 60, 55, 48, 47, 45, 37, 31, 32, 29, 25, ]
// [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, ]
// mbh.insert(100);
// after
// [ 100, 62, 90, 55, 48, 60, 45, 37, 31, 32, 29, 25, 47 ]
// [ 1,   2,  3,   4,  5,  6,  7,  8, 9,  10, 11, 12, 13 ]

mbh.extractMax();
// [ 62, 55, 60, 37, 48, 47, 45, 25, 31, 32, 29, ]

debugger;
