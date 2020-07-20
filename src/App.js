import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import styled from "styled-components";
const App = () => {
  return (
  
    <div>

     <Header/>
      <Switch>
      <Route path="/pizza"><Form /></Route>
      <Route exact path="/" ><HomePage/></Route>
      </Switch>
  
    </div>
  );
};



export default App;
