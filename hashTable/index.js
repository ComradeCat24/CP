class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		let idx = this._hash(key);
		if (!this.keyMap[idx]) {
			this.keyMap[idx] = [];
		}
		this.keyMap[idx].push([key, value]);
	}

	get(key) {
		let idx = this._hash(key);
		let values = this.keyMap[idx];
		if (values) {
			for (let i = 0; i < values.length; i++) {
				if (values[i][0] === key) {
					return values[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		let result = [];
		if (this.keyMap) {
			for (let i = 0; i < this.keyMap.length; i++) {
				if (this.keyMap[i]) {
					for (let j = 0; j < this.keyMap[i].length; j++) {
						result.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return result;
	}
	values() {
		let result = [];
		if (this.keyMap) {
			for (let i = 0; i < this.keyMap.length; i++) {
				if (this.keyMap[i]) {
					for (let j = 0; j < this.keyMap[i].length; j++) {
						result.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return result;
	}
}

let ht = new HashTable(13);
ht.set('red', '#FF0000');
ht.set('green', '#00FF00');
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

// ht.get('red');
ht.values();

debugger;
