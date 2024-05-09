import React, {  useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useUsersContext } from '../../hooks/useUsersContext';
import ViewCounter from '../../features/counter/ViewCounter';
import Counts from '../ReduxIncrement/ReduxComponents/Counts';
const UseContextNewUserReg = () => {
    const {addUser} = useUsersContext();

   
    const [username, setFormName] = useState("")
    const inputValue = (e) => {
        setFormName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {id:new Date().getTime().toString(), username: username}
        
        addUser(newUser)
        setFormName("");
    }
  return (
    <div>    
      <div class="card-container">
        <div class="card">
          <div class="card-body">            
            <ViewCounter/>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <Counts />
          </div>
        </div>       
      </div>
      <h1>User Registration</h1>
          <form onSubmit={handleSubmit}>
            <Form.Control type='text' name="username" onChange={inputValue} value={username} />
            <br />
            <button className="btn btn-info" > Add User</button>
          </form>
    </div>
  )
}

export default UseContextNewUserReg
