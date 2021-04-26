import '../../App.css';
import {Projects} from './projects/Projects';

import {Col} from "react-bootstrap";

export default function Dashboard(props){
    const projects=[
        {pname:"project 1",
        description:"react task description",
        },
        {pname:"Project 2",
        description:"react task description",
        },
        {pname:"Project 3",
        description:"react task description",
        },
    ]
    return(
        <div className="col-md" >
           <Col className="font-weight-bold text-muted">DASHBOARD
           <Projects projects={projects}/>
           </Col>

        </div>
    );
}