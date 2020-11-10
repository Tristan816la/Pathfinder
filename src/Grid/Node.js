import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setIsWall, setIsEmpty } from "../redux/actions";
import { useSelector } from "react-redux";

const NodeObj = styled.div`
  width: 2vw;
  height: 2vw;
  background-color: ${(props) =>
    props.isWall
      ? "black"
      : props.isStart
      ? "#42f563"
      : props.isEnd
      ? "#eaff00"
      : props.isVisited
      ? "blue"
      : "undefined"};
  border: solid 0.03vw black;
  transition: background-color 0.2s ease-out;
`;

const Node = (props) => {
  const grid = useSelector((state) => state.grid);
  const { pressed, row, col } = props;
  const { isStart, isEnd, isWall, isVisited, distance } = grid[row][col];
  const [start, setStart] = useState(isStart);
  const [end, setEnd] = useState(isEnd);
  const [wall, setWall] = useState(isWall);
  const [visited, setVisited] = useState(isVisited);

  useEffect(() => {
    setTimeout(() => {
      setVisited(isVisited);
    }, 50 * distance);
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
  grid: state.grid,
});

const mapDispatchToProps = (dispatch) => ({
  setIsWall: (row, col) => dispatch(setIsWall(row, col)),
  setIsEmpty: (row, col) => dispatch(setIsEmpty(row, col)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Node);
