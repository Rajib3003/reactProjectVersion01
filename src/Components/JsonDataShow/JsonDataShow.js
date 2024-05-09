import React, { useEffect, useState } from 'react'
import axios from 'axios';
const JsonDataShow = () => {
    const [users, setUsers] = useState([]);

    const getAllUser = async () => {
        try {
            const response = await axios.get("http://localhost:3003/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
    useEffect(()=>{
        getAllUser();
    },[])
  return (
    <div>
      {users.map((user)=>{
        return(
            <article key={user.id}>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
            </article>
        )
      })}
    </div>
  )
}

export default JsonDataShow
