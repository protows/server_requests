import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "block",
    textDecoration: "none",
    color: theme.palette.text.primary,
    textTransform: "uppercase",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },

  // li: {
  //   // webkitColumnCount: 3,
  //   // mozColumnCount: 3,
  //   columnCount: 3,
  // }


}));

export default useStyles;
