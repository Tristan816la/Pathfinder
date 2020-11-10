import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Icon } from "./Icon";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { setAllEmpty } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    display: "flexbox",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "auto",
    paddingBottom: 10,
    background: "black",
  },
  navText: {
    alignSelf: "flex-end",
    color: "white",
    fontFamily: "Roboto",
  },
}));

const Nav = () => {
  const placeHolders = 15;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <div />
        <Icon image="git.svg" tip="go to my git repo" />
        {[...Array(placeHolders)].map((e, i) => (
          <div key={i} />
        ))}
        <Button variant="h6" className={classes.navText}>
          Clear path
        </Button>
        <Button
          variant="h6"
          className={classes.navText}
          onClick={() => dispatch(setAllEmpty())}
        >
          Clear all
        </Button>
        <Button variant="h6" className={classes.navText}>
          Walkthrough
        </Button>
      </AppBar>
    </div>
  );
};

export default Nav;
