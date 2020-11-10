import {
  defaultEndRow,
  defaultStartCol,
  defaultStartRow,
  defaultEndCol,
  EMPTY,
  START,
  END,
  numCols,
  numRows,
} from "../Constants";

export const generate_empty = () => {
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    const current = [];
    for (let k = 0; k < numCols; k++) {
      current.push(createNode(i, k));
    }
    grid.push(current);
  }

  return grid;
};

const createNode = (row, col) => ({
  row,
  col,
  isStart: row === defaultStartRow && col === defaultStartCol,
  isEnd: row === defaultEndRow && col === defaultEndCol,
  distance: Infinity,
  isWall: false,
  isVisited: false,
  previousNode: null,
});
