import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Pagination } from 'react-bootstrap';

const ApiCall = () => {
     const URL = "https://jsonplaceholder.typicode.com/todos"

    const [data, setData] = useState([]);
   
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, []);

 
        const indexOfLastItem  = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)


        const pageNumbers = [];
        for (let i = 1; i<= Math.ceil(data.length / itemsPerPage); i++){
            pageNumbers.push(i);
           
        }
        console.log(currentItems);
   
    const handleClick=(pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    return (
        <div>
        <h1>Todo List</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map(item =>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </Table>  
        <Pagination>
            {pageNumbers.map(number =>(
                <Pagination.Item key={number} active={number === currentPage} onClick={()=>{handleClick(number)}}>
                    {number}
                </Pagination.Item>
            ))}
        </Pagination>             
    </div>
    );
}

export default ApiCall
