import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome!</h1>, root);
});