import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Osh from './osh';
import ObjectDetection from './objectdtection';
import Face from './face';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/osh" element={<Osh/>}/>
          <Route exact path="/objectdetection" element={<ObjectDetection/>}/>
          <Route exact path="/face" element={<Face/>}/>
        </Routes>

    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
