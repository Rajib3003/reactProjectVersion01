import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
const Users = ({title}) => {
    const [searchParams, setUseSearchParams] = useSearchParams();
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
   
    // const {userid} = useParams();
    const handelSubmit= (e) => {
        e.preventDefault();
        setUseSearchParams({name: name,age:age })
        setName("")
        setAge("")
     }
  return (
    
    <div className='reducerCard'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
        <Form className='formCard' onSubmit={handelSubmit}>
          <p>useSearchParams use and show the url queary data (data input and look url)</p>
        <Form.Group className="mb-3" >
            <Form.Label>Name:</Form.Label><br/>
            <Form.Control type='text' placeholder='Input your name' value={name} onChange={(e)=>{setName(e.target.value)}} />
          </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Age:</Form.Label><br/>
            <Form.Control type='text' placeholder='Input your Age' value={age} onChange={(e)=>{setAge(e.target.value)}} />
          </Form.Group>
            
           
            <Button type='submit' >Submit</Button>
        </Form>
      
      
    </div>
  )
}

export default Users
