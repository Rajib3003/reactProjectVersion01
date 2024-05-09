import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { deleteBooks } from './BooksSlice';
import { Link } from 'react-router-dom';


const BooksView = () => {
    const books = useSelector(state => state.booksReducer.books);
    const dispatch = useDispatch();
    const handelDelete = (id) => {
        dispatch(deleteBooks(id))
    }
    const { v4: uuidv4 } = require('uuid');
    
   
  return (
    <div>
      <h1>List of Books</h1>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
    {books && books.map((book) => { 
      const { id, title, author } = book; 
      const uuid = uuidv4();
      return (
        <tr key={uuid}>
          <td>{uuid}</td>
          <td>{title}</td>
          <td>{author}</td>
          <td>
            <Link to={"/editBook"} state = {{id, title, author}}>
            <Button variant="info">Edit</Button>{' '}
            </Link>
          
        <Button variant="success" onClick={()=>{handelDelete(id)}} >Delete</Button>
          </td>
        </tr>
      );
    })}
    </tbody>
    </Table>

    </div>
  )
}

export default BooksView
