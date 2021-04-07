import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ currentUser, logout }) => {

  const sessionLinks = () => (
    <nav className="header-group">
      <button className="signin-button"><Link to="/login">Sign in</Link></button>
      <button className="session-button"><Link to="/signup">Get Started</Link></button>
    </nav>
  );
  
  const activeUser = () => (
    <hgroup className="user-greeting">
      <h3 className="user-email">Current User: {currentUser.email}</h3>
      <button className="session-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    <div className="navbar-container">
      <div className="logo">
      <Link to="/" className="header-link">
        <h3>defibase</h3>
      </Link>
      </div>
      <div className="session-right">
        {currentUser ? activeUser() : sessionLinks()}
      </div>
    </div>
  )
};

export default Navbar;

