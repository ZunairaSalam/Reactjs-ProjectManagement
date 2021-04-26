
import { useLiveQuery } from "dexie-react-hooks";

        
const addUserToDb = async (event, db, name, password)=> {
    event.preventDefault();
    
    await db.items.add({ name, password });
}


const addProjectToDb = async (event, db, user,pname,pdetail,pdate) => {
    event.preventDefault()
    
    await db.items.add({ pname, pdetail, pdate}).where({name:user})
}

const ShowProjectsWhereUser=async(event,db,user)=>{

    const allprojects = useLiveQuery(() => db.items.where({name:user}).toArray(), []);
    if (!allprojects) return null;
    else return allprojects;
}

export default {addUserToDb,addProjectToDb};