
import React from 'react'
import { useUsersContext } from '../../hooks/useUsersContext';

const UseContextUser = () => {
    const {users, deleteUser} = useUsersContext();    
    const handleDelete=(id)=>{
        deleteUser(id)
    }
  return (
    <article>       
         <table className="table">
         <thead>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        </table> 
        
    </article>
  )
}

export default UseContextUser
