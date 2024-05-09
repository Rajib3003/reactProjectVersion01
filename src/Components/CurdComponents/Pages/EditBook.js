import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { updateBooks } from './BooksSlice';

const EditBook = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(updateBooks({id,title,author}))
        navigate("/bookView", {replace: true})
    } 
   
    return (
    <div>
      <h1>Edit Book</h1>
      <Container>
      <Col md={{ span: 6, offset: 3 }}>
      <Card>
      <Card.Body> 
      <Card.Title>Add New Book</Card.Title>       
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter title" 
              value = {title} 
              onChange={(e)=>{setTitle(e.target.value)}}
              required               
            />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter author"   
              value = {author} 
              onChange={(e)=>{setAuthor(e.target.value)}}   
              required        
            />
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </Col>
    </Container>
    </div>
  )
}

export default EditBook
