import React, {useState} from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import  LanguageSelect  from './LanguageSelect';
// Bottom nav, allows users to navigate between food categories quickly

const Navbar = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      style={{position: 'fixed', bottom:0}}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction style={{ fontSize: '20vw' }} label="Appetizers" />
      <BottomNavigationAction style={{ fontSize: '20vw' }} label="Entree" />
      <BottomNavigationAction style={{ fontSize: '20vw' }} label="Dessert" />

      <LanguageSelect />
    </BottomNavigation>
  )
};

export default Navbar;
