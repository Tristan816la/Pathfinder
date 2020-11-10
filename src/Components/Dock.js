import React, { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { connect } from "react-redux";
import { dijkstra } from "../redux/actions";

const dockStyle = {
  display: "flex",
  position: "absolute",
  justifyContent: "space-around",
  background: "rgb(192,192,192, 0.5)",
  bottom: "0.1vh",
  width: "65vw",
  height: "80px",
  left: "20vw",
};

const Dock = ({ dijkstra, grid }) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      dijkstra(grid);
      setStart(false);
    }
  }, [start, dijkstra, grid]);

  const startVisualizer = () => {
    setStart(true);
  };

  const menuMenu = ["Go to Git Repo", "Set Speed"];
  return (
    <div style={dockStyle}>
      <Icon image="menu-24px.svg" tip="Menu" items={menuMenu} />
      <Icon image="maze.icon.svg" tip="Generate maze" />
      <Icon image="weight.svg" tip="Add weight" />
      <Icon image="algorithm.svg" tip="Choose Algorithm" />
      <Icon image="bomb.svg" tip="Add bomb" />
      <Icon image="start.svg" tip="Start Visualizer" action={startVisualizer} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  grid: state.grid,
});

const mapDispatchToProps = (dispatch) => ({
  dijkstra: (grid) => dispatch(dijkstra(grid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dock);
