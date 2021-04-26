import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import addUserToDb from "../../Services";
import { useLiveQuery } from "dexie-react-hooks";
import "./Login.css";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const allItems = useLiveQuery(() => props.database.items.where({name:username}).toArray(), [username]);
  if (!allItems) return null
//add username and password to db and set route to dashboard
  function handleSubmit(event) {
    event.preventDefault();

    const action=props.type;// use this for differentiating between login and register for DB query
  
    //register username and password
    if(action==="Register"){
      
        // if (!allItems) {
        addUserToDb(event,props.database,username,password);//insert to DB
        history.push({
          pathname: "/home",
          state:username});;
     // }
      // else{//alert username exists
      //   <Alert variant='danger'>
      //     Username already exists!
      //   </Alert>
      // }
    }
    else {
      history.push({
      pathname: "/home",
      state:username});}
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          {props.type ? props.type : 'Login'}
        </Button>
      </Form>
    </div>
  );
}
