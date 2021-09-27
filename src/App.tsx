import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cats from "./pages/Cats/Cats";
import Dogs from "./pages/Dogs/Dogs";
import Home from "./pages/Home/Home";
import { ThemeProvider, createTheme, withStyles } from '@material-ui/core';
import DogBreed from "./components/DogBreed/DogBreed";


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(182, 144, 22, 1)'
    },
    secondary: {
      main: 'rgba(182, 144, 22, 1)'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/dogs" component={Dogs} />
            <Route path="/dogs/:breed">
              <DogBreed />
            </Route>
            <Route exact path="/cats">
              <Cats />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;
