import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Navigate = ({ isLoggedIn, setIsLoggedIn }) => {  
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      let lastScrollTop = 0;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (navbar) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          navbar.style.backgroundColor = '#ffffff';
        } else {
          // Scrolling up
          navbar.style.backgroundColor = 'transparent';
        }
        lastScrollTop = scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar">
      <style>
        {`
       
          
        `}
      </style>
      <NavLink className='nav-link-one' to="/">Home</NavLink>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
        <Dropdown.Item as={NavLink} to="/redux">Redux</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/count">Count</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/counter">Counter</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/post">Post</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/reducer">Reducer</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/component">Component</Dropdown.Item>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Users</button>
        <div class="dropdown-content">
        <Dropdown.Item as={NavLink} to="/users">Users</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/jsonData">Json User</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/apiCall">Api Call</Dropdown.Item>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Curd</button>
        <div class="dropdown-content">
        
        <Dropdown.Item as={NavLink} to="/addBooks">Add Books</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/bookView">Book View</Dropdown.Item>
        </div>
      </div>
      <NavLink className='nav-link-one' to="/blogs">Blogs</NavLink>
      <NavLink className='nav-link-one' to="country">Country</NavLink>
      
      
      <div className='loginbutton'>
        {isLoggedIn ?
          <Button variant="danger" onClick={() => { setIsLoggedIn(!isLoggedIn) }}>Log Out</Button> :
          <Button variant="success" onClick={() => { setIsLoggedIn(!isLoggedIn) }}>Log In</Button>
        }
      </div>
    </nav>
  );
};

export default Navigate;


