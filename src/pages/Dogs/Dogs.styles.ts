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
  dogSearch: {
    display: "flex",
    paddingTop: "12px"
  }

  // li: {
  //   // webkitColumnCount: 3,
  //   // mozColumnCount: 3,
  //   columnCount: 3,
  // }


}));

export default useStyles;
