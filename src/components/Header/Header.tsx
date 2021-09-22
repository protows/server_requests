import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";
import { NONAME } from "dns";

interface Props { }

// const useStyles = makeStyles({
//   root: {
//     padding: "8px",
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    boxShadow: "none"
  },
  link: {
    textDecoration: "none",
    marginRight: theme.spacing(2),
  },

}));

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link className={classes.link} to="/">
        Home
      </Link>
      <Link className={classes.link} to="/dogs">
        Dogs
      </Link>
      <Link className={classes.link} to="/cats">
        Cats
      </Link>
    </Card >
  );
};

export default Header;
