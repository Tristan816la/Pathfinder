import {
  defaultStartRow,
  defaultEndCol,
  defaultStartCol,
  defaultEndRow,
} from "../Constants";

export const get_start = () => {
  const row = defaultStartRow;
  const col = defaultStartCol;
  return [row, col];
};

export const get_end = () => {
  const row = defaultEndRow;
  const col = defaultEndCol;
  return [row, col];
};

export const getAllNodes = (grid) => {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

export const sortNodesByDistance = (unvisitedNodes) => {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

export const updateUnvisitedNeighbors = (node, grid) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
};

export const getUnvisitedNeighbors = (node, grid) => {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
};
