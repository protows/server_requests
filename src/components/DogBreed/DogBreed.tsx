import React from "react";
import { useParams } from "react-router";
import { Button, withStyles } from "@material-ui/core";
import { purple } from '@material-ui/core/colors';


interface Props { }

const DogBreed = (props: Props) => {
  const values = useParams();
  console.log(values);


  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);


  // return <div>Dog Breed</div>;
  return (
    <>
      <div>Dog Breed</div>
      <Button variant="contained" >
        Primary
 </Button>
      <ColorButton> ColorButton</ColorButton>
    </>
  )



};

export default DogBreed;
