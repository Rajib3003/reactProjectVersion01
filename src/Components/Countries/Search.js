import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const handleChange = (e) => {
        setSearchText(e.target.value);
        
    }
    useEffect(()=>{
        props.onSearch(searchText);
    },[searchText])
  return (
    <div>
      <Form.Control type='text' placeholder='Search Country' value={searchText} onChange={handleChange} />
    </div>
  )
}

export default Search
