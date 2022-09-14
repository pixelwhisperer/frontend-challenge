import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MoreInfo from "./Pages/MoreInfo";
import Confirmation from "./Pages/Confirmation";
import Success from "./Pages/Success";
import Error from "./Pages/Error";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="more-info" element={<MoreInfo/>} />
            <Route path="confirmation" element={<Confirmation/>} />
            <Route path="success" element={<Success/>} />
            <Route path="error" element={<Error/>} />
        </Routes>
    </BrowserRouter>, 
    document.getElementById('root')
);
