import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/User/Login";
import Home from './components/Dashboard/Home';
import Dashboard from './components/Dashboard/Dashboard';

export default function Routes(props) {
  const database=props.database;
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
        <Login database={database} type='Login'/>
      </Route>

      <Route exact path="/login">
        <Login database={database} type='Login'/>
      </Route>

      <Route exact path="/register">
        <Login database={database} type='Register'/>
      </Route>

      <Route exact path="/home">
        <Home database={database}/>
      </Route>

      <Route exact path="/dashboard">
        <Home />
      </Route>
      
    </Switch>
    </BrowserRouter>
  );
}
