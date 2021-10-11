import React, { useState, useEffect } from "react";
import { getCatsData } from "../../services/cat.service";


import { selectCats } from "../../store/cats/cats.selector";
import { fetchCats } from "../../store/cats/cats.slice";
import { selectLoading } from "../../store/loading/loading.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { Box, CircularProgress } from "@material-ui/core";



import useStyles from "./Cats.styles";


import { useLocation } from "react-router";

import { Link } from "react-router-dom";
import catsSaga from "../../store/cats/cats.saga";



interface Props { }

const Cats = (props: Props) => {
  const classes = useStyles();
  const [breeds, setBreeds] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const location = useLocation();

  const dispatch = useAppDispatch();
  const cats = useAppSelector(selectCats);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <>
      <div className={classes.breeds_table}>
        {loading[fetchCats.type] === "PROGRESS" && <CircularProgress />}
        {loading[fetchCats.type] === "SUCCESS" &&
          cats.map((cat) => (

            < Link key={cat} to={`/cats/${cat}`} className={classes.link}>

              - {cat}
            </Link>

          ))





        }
      </div>
    </>

  );
};

export default Cats;
