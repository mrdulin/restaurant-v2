import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels() {
    const [language, setLanguage] = useState('English');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
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
                <MenuItem value={'Chinese'}>Chinese</MenuItem>
            </Select>
            {/* <FormHelperText>language</FormHelperText> */}
        </FormControl>
    )
}