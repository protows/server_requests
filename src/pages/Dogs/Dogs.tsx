import React from "react";
import { Route, Switch } from "react-router";
import DogBreed from "../../components/DogBreed/DogBreed";

interface Props { }

const Dogs = (props: Props) => {
  return (
    <div>
      Dogs page
      <Switch>
        <Route path="/dogs/:breed">
          <DogBreed />
        </Route>
      </Switch>
    </div>
  );
};

export default Dogs;
