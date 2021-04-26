import React, { useState } from "react";
import {Row,Col,Container} from "react-bootstrap";

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import NewProject from './projects/NewProject';
import '../../App.css';
import { propTypes } from "react-bootstrap/esm/Image";
export default function Home(props){
  const [newProjectFlag, setNewProjectFlag] = useState(0);
  const username=props.username;
  function handleChange(newValue) {
    setNewProjectFlag(newValue);
  }
    return(
    <div>
      <Container className="container-fluid">
        <Row style={{height:"100%"}}>
        {/* We pass a callback to Child*/}
        
          <Sidebar newProjectFlag={newProjectFlag} onChange={handleChange}/>

          {newProjectFlag ? <NewProject db={props.database} username={username}/> : <Dashboard db={props.database} username={username}/>}
          
    
        </Row>
      </Container>
    </div>);
}