import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Routes from './Routes';
import Footer from './Footer'

import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        < Navigation />
        < Routes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
