import React, { useState } from "react";
import '../../../App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addProjectToDb from "../../../Services";
import {Col} from "react-bootstrap";
import { useLiveQuery } from "dexie-react-hooks";
import { useHistory } from "react-router-dom";
import Dashboard from "../Dashboard";

export default function NewProject(props){
    const database=props.db;
    const [projectName, setProjectname] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const history = useHistory();

    
    function validateForm() {
        return projectName.length > 0 && projectDetail.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        <Dashboard pname={projectName} pdesc={projectDetail} />
        history.push("/dashboard");

    }
    function handleCancel(event){
        event.preventDefault();
        history.goBack();
    }

    return(
        <div col-12>
           <Col className="font-weight-bold text-muted mh-100s col-12">Add Project
           <Form onSubmit={handleSubmit}>
                <Form.Group controlId="projectNameInput">
                    <Form.Label>Project Name</Form.Label>
                        <Form.Control 
                        type="input" 
                        placeholder="Enter project name"
                        autoFocus
                        value={projectName}
                        onChange={(e) => setProjectname(e.target.value)}
                         />
    
                </Form.Group>

                <Form.Group controlId="projectDescriptionInput">
                    <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={10} 
                        autoFocus
                        value={projectDetail}
                        onChange={(e) => setProjectDetail(e.target.value)}
                        />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Chose Project Logo" />
                </Form.Group> 
  
                <Button variant="outline-secondary" type="button" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="primary" type="submit" className="m-4" disabled={!validateForm()}> 
                Add
                </Button>
            </Form>
           </Col>
        </div>
    );
}