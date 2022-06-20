import React from "react";

import Home from "./Home";
import Chips from "./Chips";
import Chocolate from "./Chocolate";
import Gum from "./Gum";
import NavBar from "./VendingMachine";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Chips">
          <Chips />
        </Route>
        <Route exact path="/Chocolate">
          <Chocolate />
        </Route>
        <Route exact path="/Gum">
          <Gum />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
