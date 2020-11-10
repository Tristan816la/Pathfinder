import styled, { keyframes, css } from "styled-components";

const visitAnimation = keyframes`
    0% {
        background-color: #ADFF2F;
    }
    100% {
        background-color: #1E90FF;
    }
`;

const wallAnimation = keyframes`
  0% {
    transform: scale(.3);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1.0);
  }
`;

const NodeObj = styled.div`
  width: 1.8vw;
  height: 1.8vw;
  animation: ${(props) =>
    props.isVisited && !props.isEnd
      ? css`
          ${visitAnimation} 0.3s ease-in-out
        `
      : props.isWall
      ? css`
          ${wallAnimation} 0.2s ease-in-out
        `
      : "none"};
  background-color: ${(props) =>
    props.isWall
      ? "black"
      : props.isStart
      ? "#42f563"
      : props.isEnd
      ? "#FFB6C1"
      : props.isVisited
      ? "#1E90FF"
      : "none"};
  border: solid 0.1px silver;
`;

export default NodeObj;
