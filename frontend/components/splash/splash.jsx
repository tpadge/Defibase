import React from 'react';
import Navbar from '../navbar/navbar';
import {Link} from 'react-router-dom';

const Splash = (props) => {
  return (
    <main>
      <div className="splash-greet">
      <h1>Buy and sell cryptocurrrency</h1>
      <h2>Defibase is the easiest place to buy and sell cryptocurrrency.
      Sign up to own part of the future of finance.</h2>
        <button><Link to="/signup">Get Started</Link></button>
      </div>

     
    </main>
  )
};

export default Splash;