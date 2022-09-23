/*** 

 * ? Psudocode
 ** This function should accept a starting and ending vertex
 ** Create an object (we'll call it distances) and set each key to be every
 ** vertex in the adjacency list with a value of infinity, except for the
 ** starting vertex which should have a value of 0.
 ** After setting a value in the
 ** distances object, add each vertex with a priority of Infinity to the priority
 ** queue, except the starting vertex, which should have a priority of 0 because
 ** that's where we begin.
 ** Create another object called previous and set each key to be every vertex in
 ** the adjacency list with a value of null 
 ** Start looping as long as there is
 ** ** anything in the priority queue
 ** ** dequeue a vertex from the priority queue
 ** ** If that vertex is the same as the ending vertex - we are done!
 ** ** ** Otherwise loop through each value in the adjacency list at that vertex
 ** ** ** Calculate the distance to that vertex from the starting vertex
 ** ** ** if the distance is less than what is currently stored in our distances object
 ** ** ** ** update the distances object with new lower distance
 ** ** ** ** update the previous object to contain that vertex
 ** ** ** ** enqueue the vertex with the total distance from the start node

***/

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	dijkstras(startingVtx, endingVtx) {
		let pq = new PriorityQueue();
		let distance = {};
		let previous = {};
		let path = [];

		for (let vertex in this.adjacencyList) {
			if (vertex === startingVtx) {
				distance[vertex] = 0;
				pq.enqueue(vertex, 0);
			} else {
				distance[vertex] = Infinity;
				pq.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		while (pq) {
			let vtx = pq.dequeue().val;
			if (vtx === endingVtx) return; // done
			//
		}
	}
}

let wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');

wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 4);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 4);
wg.addEdge('F', 'E', 4);
wg.addEdge('D', 'F', 4);

wg.dijkstras('A', 'E');
