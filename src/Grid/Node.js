import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setIsWall, setIsEmpty, setIsFinish } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { defaultEndRow, defaultEndCol } from "../Constants";

const NodeObj = styled.div`
  width: 1.8vw;
  height: 1.8vw;
  background-color: ${(props) =>
    props.isWall
      ? "black"
      : props.isStart
      ? "#42f563"
      : props.isEnd
      ? "#FFB6C1"
      : props.isVisited
      ? "#1E90FF"
      : "undefined"};
  border: solid 1px black;
  transition: 0.3s ease-out;
`;

const Node = (props) => {
  const grid = useSelector((state) => state.grid);
  const finished = useSelector((state) => state.algorithm.finished);
  const { pressed, row, col } = props;
  const { isStart, isEnd, isWall, isVisited, distance } = grid[row][col];
  const [start, setStart] = useState(isStart);
  const [end, setEnd] = useState(isEnd);
  const [wall, setWall] = useState(isWall);
  const [visited, setVisited] = useState(isVisited);
  const dispatch = useDispatch();

  const checkFinish = () => {
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let d of dirs) {
      const [r, c] = d;
      if (isVisited && row + r === defaultEndRow && col + c === defaultEndCol) {
        dispatch(setIsFinish());
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setVisited(isVisited);
      checkFinish();
    }, 60 * distance);
  });

  useEffect(() => {
    setWall(isWall);
  }, [isWall]);

  const handleOver = () => {
    if (pressed && !start && !end && !wall) {
      props.setIsWall(row, col);
      setWall(true);
    } else if (pressed && !start && !end && wall) {
      props.setIsEmpty(row, col);
      setWall(false);
    }
  };
  const handleClick = () => {
    if (!pressed && !start && !end && !wall) {
      props.setIsWall(row, col);
      setWall(true);
    } else if (!pressed && !start && !end && wall) {
      props.setIsEmpty(row, col);
      setWall(false);
    }
  };
  return (
    <NodeObj
      onMouseOver={handleOver}
      onMouseDown={handleClick}
      isEnd={end}
      isStart={start}
      isWall={wall}
      isVisited={visited}
      distance={distance}
    />
  );
};

const mapStateToProps = (state) => ({
  grid: state.grid.grid,
});

const mapDispatchToProps = (dispatch) => ({
  setIsWall: (row, col) => dispatch(setIsWall(row, col)),
  setIsEmpty: (row, col) => dispatch(setIsEmpty(row, col)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Node);
