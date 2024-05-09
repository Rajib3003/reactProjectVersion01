import React, { useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table';

const UseReducerState = () => {
  const bookName = [
    { id: 1, name: "Biology" },
    { id: 2, name: "Chemistry" },
    { id: 3, name: "Physics" },
    { id: 4, name: "English" }
  ];

  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const allBooks = [...state.books, action.payload]
      toast.success("Book added successfully");
      return {
        ...state,
        books: allBooks,
        isModalOpen: true
        
      }
    }
    if (action.type === "REMOVE") {
      const filteredBooks = [...state.books].filter(book => book.id !== action.payload)
      toast.error("Book removed successfully");
      return {
        ...state,
        books: filteredBooks,
        isModalOpen: true        
      }
    }
    return state;
  }

  const [bookState, dispatch] = useReducer(reducer, {
    books: bookName,
    isModalOpen: false,
    modalText: " "
  });

  const [newBook, setNewBook] = useState("");

 

  const handelerInput = (e) => {
    setNewBook(e.target.value);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (newBook.trim() === "") {
      toast.error("Please enter a book name");
      return;
    }
    const bookName = { id: new Date().getTime().toString(), name: newBook };
    dispatch({ type: "ADD", payload: bookName })
    setNewBook("");
  }

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }

  return (
    <div className='reducerCard'>
      <div className='formCard'>
        <p>useReducer hook use data create, delete and show side card </p>
        <h1 className='textColor'>Book Added</h1>
        <form onSubmit={handelSubmit}>
          <Form.Label htmlFor="inputPassword5">Books Name </Form.Label>
          <br />
          <Form.Control type='text' name="bookName" id="bookName" onChange={handelerInput} value={newBook} />
          <br />
          <Button type="submit">Added</Button>
        </form>
      </div>
      <div className='bookList'>
        
        <h3>Books List</h3>
        {bookState.books.map((book) => {
          const { id, name } = book;
          return (            
            <Table striped bordered hover>             
              <tbody>
                <tr key={id}>
                  <tb className="col-4">{name}</tb>
                  <tb className="buttonRight"><Button onClick={() => { removeBook(id) }}>-</Button></tb>
                </tr>
              </tbody>
            </Table>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default UseReducerState;
