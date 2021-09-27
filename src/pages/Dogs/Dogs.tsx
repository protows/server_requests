import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAllBreeds } from "../../services/dog.service";
import useStyles from "./Dogs.styles";
import styles from "./Dogs.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import DogBreed from "../../components/DogBreed/DogBreed";
import { Route, Switch } from "react-router";



interface Props { }

const Dogs = (props: Props) => {
  const classes = useStyles();
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAllBreeds()
      .then((res) => {
        const { message } = res.data;
        setBreeds(Object.keys(message));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <>




      <div>
        <div className={styles.rocket}>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (

              breeds.map((breed) => (
                <Link key={breed} to={`/dogs/${breed}`} className={classes.link}>

                  - {breed}
                </Link>
              ))

            )}
        </div>

      </div >
    </>

  );
};

export default Dogs;
