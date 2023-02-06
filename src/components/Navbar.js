import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import LanguageSelect from './LanguageSelect';
import { makeStyles, createStyles } from '@material-ui/core/styles';


// Bottom nav, allows users to navigate between food categories quickly

const Navbar = () => {

  //Styling
  const useStyles = makeStyles(({ spacing, breakpoints }) =>
    createStyles({
      bottomNav: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
      },
      bottomNavLabel: {
        textTransform: 'uppercase',
        marginTop: 5,
      },
    })
  );
  const useStyles = makeStyles((theme) => ({
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
    bottomNavLabel: {
      textTransform: 'uppercase',
      marginTop: 5,
    },
  }));
  
  const classes = useStyles();

  // Bottom nav state
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      className= {classes.bottomNav}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        sx={{ width: '100vw' }}
        label={<span className={classes.bottomNavLabel}>Apps</span>}  />
      {/* <BottomNavigationAction style={{ width: '20vw', fontSize: '20vw' }} label="Appetizers" />
      <BottomNavigationAction style={{ width: '20vw',fontSize: '20vw' }} label="Entree" />
      <BottomNavigationAction style={{ width: '20vw',fontSize: '20vw' }} label="Dessert" /> */}

      <LanguageSelect style={{ marginLeft: 'auto' }} />

    </BottomNavigation>
  )
};

export default Navbar;
