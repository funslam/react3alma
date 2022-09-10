import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './component/Contact';
import About from './component/About';
import HandleWrongRoute from './component/HandleWrongRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App/>} exact/>
      <Route path="/contact" element={<Contact />} exact/>
      <Route path="/about" element={<About />} exact/>
      <Route path='*' element={<HandleWrongRoute />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

