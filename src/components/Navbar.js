import React, {useState} from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import  LanguageSelect  from './LanguageSelect';
// Bottom nav, allows users to navigate between food categories quickly

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [language, setLanguage] = useState('Eng');


  return (
    <BottomNavigation
      style={{position: 'fixed', bottom:0}}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Appetizers" />
      <BottomNavigationAction label="Entree" />
      <BottomNavigationAction label="Dessert" />

      <LanguageSelect />
    </BottomNavigation>
  )
};

export default Navbar;
