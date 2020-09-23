import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Austin Small Business
          </Typography>
          <ul className="nav-list">
            <Button color="inherit" href="/">Listings</Button>
            <Button color="inherit" href="/login">Login</Button>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
