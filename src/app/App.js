import './App.css';
import React from "react";
import { Menu, Navbar } from '../components';

// Menu app designed for mobile menu viewing. No ordering functionality.

const App = () => {
  return (
    <div id='window'>
      <Menu />
      <Navbar />
    </div>
  );
};

export default App;