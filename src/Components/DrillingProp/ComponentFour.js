import React,{useContext} from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom';

const ComponentFour = () => {
    const {user,text} = useContext(UserContext);
    const navigate = useNavigate();
    //console.log(data)
  return (
    <div>
      <p>useNavigate hook use back button routing kora hoyeche and useContxt hook use kore child component use na kore sorasori fourth child theke data show korano hoyeche</p>
      <h1>ID : {user.id}</h1>
      <h1>Name : {user.name}</h1>
      <h1>Text : {text}</h1>
      <button onClick={()=>{
        navigate("/")
      }} >Go to home page</button>
    </div>
  )
}

export default ComponentFour
