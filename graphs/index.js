import Stack from '../stack&queue/stack';
import Queue from '../stack&queue/queue';

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vtx) {
		if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
	}

	addEdge(vtx1, vtx2) {
		this.adjacencyList[vtx1].push(vtx2);
		this.adjacencyList[vtx2].push(vtx1);
	}

	removeEdge(vtx1, vtx2) {
		this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
			(v) => v !== vtx2
		);
		this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
			(v) => v !== vtx1
		);
	}

	removeVertex(vtx) {
		this.adjacencyList[vtx].forEach((v) => this.removeEdge(vtx, v));
		delete this.adjacencyList[vtx];
	}

	DFSrecursive(startingVtx) {
		let [result, visitedVtxs] = [[], []];
		let adjacencyList = this.adjacencyList;
		(function dfs(vtx) {
			if (!vtx) return null;
			visitedVtxs.push(vtx);
			result.push(vtx);
			adjacencyList[vtx].forEach((neighbor) => {
				if (!visitedVtxs.includes(neighbor)) {
					return dfs(neighbor);
				}
			});
		})(startingVtx);
		return result;
	}

	DFSiterative(startingVtx) {
		let s = new Stack();
		let [result, visited] = [[], []];
		let currentVtx;

		s.push(startingVtx);
		visited.push(startingVtx);
		while (s.size) {
			currentVtx = s.pop();
			result.push(currentVtx);
			this.adjacencyList[currentVtx].forEach((neighbor) => {
				if (!visited.includes(neighbor)) {
					visited.push(neighbor);
					s.push(neighbor);
				}
			});
		}
		return result;
	}

	BFS(startingVtx) {
		let q = new Queue();
		let [result, visited] = [[], []];
		let currentVtx;
		q.enqueue(startingVtx);
		visited.push(startingVtx);
		while (q.size) {
			currentVtx = q.dequeue();
			result.push(currentVtx);
			this.adjacencyList[currentVtx].forEach((neighbour) => {
				if (!visited.includes(neighbour)) {
					visited.push(neighbour);
					q.enqueue(neighbour);
				}
			});
		}
		return result;
	}
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// g.DFSrecursive('A');
// g.DFSiterative('A');
g.BFS('A');

/*  
 g.addVertex('Dallas');
 g.addVertex('Dallas');
 g.addVertex('Tokyo');
 g.addVertex('Aspen');
 g.addVertex('Los Angeles');
 g.addVertex('Hong Kong');

 g.addEdge('Dallas', 'Tokyo');
 g.addEdge('Dallas', 'Tokyo');
 g.addEdge('Dallas', 'Aspen');');
 g.addEdge('Hong Kong', 'Tokyo');;
 g.addEdge('Hong Kong', 'Dallas');ng');
 g.addEdge('Los Angeles', 'Hong Kong');
 g.addEdge('Los Angeles', 'Aspen');
 
 g.removeEdge('Tokyo', 'Dallas');
 g.removeEdge('Tokyo', 'Dallas');

 g.removeVertex('Hong Kong');
 g.removeVertex('Hong Kong');
*/
debugger;
