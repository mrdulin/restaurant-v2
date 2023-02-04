import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, currentLanguage } from './LanguageSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LanguageSelect = () => {
  const language = useSelector(currentLanguage);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={language}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={'English'}>English</MenuItem>
        <MenuItem value={'Korean'}>Korean</MenuItem>
        {/* <MenuItem value={'Chinese'}>Chinese</MenuItem> */}
      </Select>
      {/* <FormHelperText>language</FormHelperText> */}
    </FormControl>
  );
};

export default LanguageSelect;