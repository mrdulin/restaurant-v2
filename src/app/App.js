import './App.css';
import React from "react";
import { Menu, Navbar, LanguageSelect } from '../components';

// Menu app designed for mobile menu viewing. No ordering functionality.

const App = () => {
  return (
    <div id='window'>
      <LanguageSelect/>
      {/* <Menu /> */}
      {/* <Navbar/> */}
    </div>
  );
};

export default App;