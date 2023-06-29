import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import '../src/components/Nav/index.css';
import "../src/components/Nav/"
import App from './App';
import "../src/pages/Home.css";
import "../src/pages/Signup.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);