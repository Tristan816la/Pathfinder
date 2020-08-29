import { sortNodesByDistance, updateUnvisitedNeighbors, getAllNodes } from './AlgorithmHelper';

export const DijkstraFind = (grid, start, end) => {
	const visitedNodesInOrder = [];
	start.distance = 0;
	const unvisitedNodes = getAllNodes(grid);

	while (!!unvisitedNodes.length) {
		sortNodesByDistance(unvisitedNodes);
		const closest = unvisitedNodes.shift();
		if (closest.isWall) continue;
		if (closest.distance === Infinity) return formGrid(visitedNodesInOrder, grid);
		closest.isVisited = true;
		visitedNodesInOrder.push(closest);
		if (closest === end) return formGrid(visitedNodesInOrder, grid);
		updateUnvisitedNeighbors(closest, grid);
	}
};

const formGrid = (visitedNodesInOrder, grid) => {
	let node;
	for (node in visitedNodesInOrder) {
		const row = visitedNodesInOrder[node].row;
		const col = visitedNodesInOrder[node].col;
		grid[row][col] = visitedNodesInOrder[node];
	}
	return grid;
};
