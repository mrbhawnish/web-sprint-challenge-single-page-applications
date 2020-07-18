import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./components/Form.js"
import Header from "./components/Header.js"
import { Container } from 'reactstrap';
const App = () => {
  return (
  
    <div>
       <Container>
      <Switch>
      <Route path="/pizza"><Form /></Route>
      <Route path="/" ><Header/></Route>
      </Switch>
      </Container>
    </div>
  );
};
export default App;
