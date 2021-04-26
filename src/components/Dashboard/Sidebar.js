import '../../App.css';
import {Row,Col,Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Sidebar(props){
    function handleChange() {
                // Here, we invoke the callback with the new value
        props.onChange(!props.newProjectFlag);
    }
  
    return(
        <div col-4>
            <Col className="mb-0 background-color mh-100 d-flex align-content-center flex-wrap">
                <Button block size="lg" type="submit" onClick={handleChange}>Add Project</Button>
            </Col>
        </div>
    );
}