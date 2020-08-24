import React from 'react';
import './App.css';
import NavBar from './Navbar';
import Routes from './Routes';
import Footer from './Footer'

import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        < NavBar />
        < Routes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
