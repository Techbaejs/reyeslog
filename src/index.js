import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import ReyesJennifer from './ReyesJennifer';

const rootElement = document.getElementById('root');
render(
  < BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      {/* <Route path="/result" element={<ReyesJennifer />} /> */}
    </Routes>
  </ BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();