import './App.css';
import React from "react";
import { Menu, Navbar, LanguageSelect, HideShowDemo } from '../components';

// Menu app designed for mobile menu viewing. No ordering functionality.

const App = () => {
  return (
    <div id='window'>
      {/* <HideShowDemo/> */}
      {/* <LanguageSelect/> */}
      <Menu />
      <Navbar/>
    </div>
  );
};

export default App;