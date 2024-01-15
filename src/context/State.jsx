import {useState } from "react";
import UserContext from "./Context";


const State = (props) => { 
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [ploader, setPLoader] = useState(false);
    
    const getUsers = async (setLoader) => {
        // fetch all users 
        setUsers([]);
        await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users').then((response) => response.json()).then((json) => {
            setUsers(json);
        }).catch((error) => {
            
        }).finally(() => {
            setLoader(false);
        })
       
    }
    const getUser = async (id) => { 
        // fetch user by id 
        setUser();
        setPLoader(true);
        await fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`).then((response) => response.json()).then((json) => {
            setUser(json)
        }).catch((error) => { 
           
        }).finally(() => { 
            setPLoader(false);
        })
        
    }

    return (
        <UserContext.Provider value={{ user, users, getUsers, getUser,ploader }} >
            {props.children}
        </UserContext.Provider>
        
    )
}

export default State;