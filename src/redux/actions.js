import {
  SET_GRID,
  SET_EMPTY,
  SET_WALL,
  SET_ALGORITHM,
  SET_FINISH,
} from "../redux/types";
import { generate_empty } from "../Algorithms/EmptyGrid";
import { DijkstraFind } from "../Algorithms/Dijkstra";
import {
  defaultStartRow,
  defaultEndRow,
  defaultStartCol,
  defaultEndCol,
} from "../Constants";

export const setAlgorithm = (option) => {
  return {
    type: SET_ALGORITHM,
    payload: option,
  };
};

export const dijkstra = (grid) => {
  const start = grid[defaultStartRow][defaultStartCol];
  const end = grid[defaultEndRow][defaultEndCol];
  const result = DijkstraFind(grid, start, end);

  return {
    type: SET_GRID,
    payload: result,
  };
};

export const generate = () => {
  const result = generate_empty();

  return {
    type: SET_GRID,
    payload: result,
  };
};

export const setIsWall = (row, col) => {
  const result = [row, col];

  return {
    type: SET_WALL,
    payload: result,
  };
};

export const setIsEmpty = (row, col) => {
  const result = [row, col];

  return {
    type: SET_EMPTY,
    payload: result,
  };
};

export const setAllEmpty = () => {
  const emptyGrid = generate_empty();

  return {
    type: SET_GRID,
    payload: emptyGrid,
  };
};

export const setPathEmpty = (grid) => {
  const newGrid = grid.map((row) =>
    row.map((node) => {
      node.isVisited = false;
      return node;
    })
  );
  return {
    type: SET_GRID,
    payload: newGrid,
  };
};

export const setIsFinish = () => {
  return {
    type: SET_FINISH,
  };
};
