import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const IconStyle = {
  width: "50px",
  minHeight: "100px",
  opacity: "1.0",
};

const useStyles = makeStyles((theme) => ({
  button: {
    border: "none",
  },
}));

export const Icon = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [items, setItems] = React.useState(props.items || []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        elevation={0}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {items.map((item) => (
          <MenuItem onClick={handleClose}>{item}</MenuItem>
        ))}
      </Menu>

      <Button className={classes.button} onClick={props.action || handleClick}>
        <Tooltip title={props.tip}>
          <img style={IconStyle} src={props.image} alt="icon" />
        </Tooltip>
      </Button>
    </>
  );
};
