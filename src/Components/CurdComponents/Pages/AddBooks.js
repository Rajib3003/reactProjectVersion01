import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from './BooksSlice';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    // const numberOfBooks = useSelector((state) => state.booksReducer.books.length)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { v4: uuidv4 } = require('uuid');
    const uuid = uuidv4();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const book = {uuid, title, author};
        dispatch(addBooks(book));
        navigate("/bookView",{replace:true})
    }
  return (
    <div>
      <h2>Add Books</h2>
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
              author = {author} 
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

export default AddBooks
