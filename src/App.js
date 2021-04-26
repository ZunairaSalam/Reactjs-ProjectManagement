
import './App.css';
import Routes from "./Routes";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//using dexie js to use Indexdb
import Dexie from 'dexie'
import { useLiveQuery } from "dexie-react-hooks";

//creating my dataabse
const db = new Dexie('ProjectList');
db.version(1).stores(
  { items: "++id,name,password,pname,pdetail,pdate" }
)

function App() {

  const allItems = useLiveQuery(() => db.items.toArray(), []);
  if (!allItems) return null
  
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          Project Management System
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* calling routes to load first route*/ }
      <Routes database={db}/>
    </div>
  );
}

export default App;
