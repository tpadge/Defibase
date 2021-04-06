import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ currentUser, logout }) => {

  const sessionLinks = () => (
    <nav className="login-start">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to ="/signup">Get Started</Link>
    </nav>
  );
  
  const activeUser = () => (
    <hgroup className="header-group">
      <h3>Current User: {currentUser.email}</h3>
      <button classname="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? activeUser() : sessionLinks();
};

export default Navbar;

