import './App.css';
import React from "react";
import { Menu, Navbar, NavbarV2, LanguageSelect, HideShowDemo } from '../components';

// Menu app designed for mobile menu viewing. No ordering functionality.

const App = () => {
  return (
    <div id='window'>
      {/* <HideShowDemo/> */}
      <LanguageSelect/>
      <Menu />
      {/* <Navbar/> */}
      <NavbarV2 />
    </div>
  );
};

export default App;