import React from 'react';
import { Counter } from './features/counter/Counter';
import NavBar from "./features/counter/NavBar";
import NumerOfItems from "./features/counter/NumerOfItems";
import Sales from "./features/counter/Sales";
import Items from "./features/counter/Items";

import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
      <div className="App">
        <NavBar/>

        <div className="routes">
          <Switch>
          <Route
              path="/home"
              render={() => <Counter/>}
            ></Route>
            <Route
              path="/numofitems"
              render={() => <NumerOfItems/>}
            ></Route>
            <Route
              path="/sales"
              render={() => <Sales/>}
            ></Route>
            <Route
              path="/items"
              render={() => <Items/>}
            ></Route>
          </Switch>
        </div>
        {/* <header className="App-header">
          <Counter />
        </header> */}
      </div>
      </Router>
  );
}

export default App;
