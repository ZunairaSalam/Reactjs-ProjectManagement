import '../../../App.css';
import {Col,Row,Card} from "react-bootstrap";

export function Projects(props){
    const projects=props.projects;
    const projectItems = projects.map((project)=>(
    <div>
        <Card className="mb-2">
        <Card.Body >{project.pname}</Card.Body> 
        </Card>
    </div>
    ));
    return(
        <div>
           {projectItems}
        </div>
    );
}