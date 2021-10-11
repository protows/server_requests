import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAllBreeds } from "../../services/dog.service";
import useStyles from "./Dogs.styles";
import styles from "./Dogs.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import DogBreed from "../../components/DogBreed/DogBreed";
import { Route, Switch } from "react-router";
import DogSearch from "../../components/DogSearch/DogSearch";
import qs from "qs";
import { useLocation } from "react-router";


import { selectDogs } from "../../store/pets/pets.selector";
import { fetchDogs } from "../../store/pets/pets.slice";
import { selectLoading } from "../../store/loading/loading.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";


interface Props { }

const Dogs = (props: Props) => {
  const classes = useStyles();
  const [breeds, setBreeds] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const location = useLocation();

  const dispatch = useAppDispatch();
  const dogs = useAppSelector(selectDogs);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <>
      <div className={classes.breeds_table}>
        {loading[fetchDogs.type] === "PROGRESS" && <CircularProgress />}
        {loading[fetchDogs.type] === "SUCCESS" &&
          dogs.map((dog) => (
            < Link key={dog} to={`/dogs/${dog}`} className={classes.link}>

              - {dog}
            </Link>
          ))}
      </div>
    </>

  );
};

export default Dogs;
