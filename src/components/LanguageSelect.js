import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectLanguage = () => {
    const [language, setLanguage] = useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);

        // Add show class to selected language and add hide to other two
        // When you pick english
        if (event.target.value === "English") {
            console.log("English language selected")
            const englishElements = document.querySelectorAll(".English");
            console.log(englishElements)
            englishElements.forEach((element) => {
                element.classList.remove("hide");
                element.classList.add("show");
            });

            const koreanElements = document.querySelectorAll(".Korean");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const chineseElements = document.querySelectorAll(".Chinese");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });
        }
        // When you pick korean
        else if (event.target.value === "Korean") {
            console.log("Korean language selected")
            const englishElements = document.querySelectorAll(".English");
            englishElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const koreanElements = document.querySelectorAll(".Korean");
            koreanElements.forEach((element) => {
                element.classList.remove("hide");
                element.classList.add("show");
            });

            const chineseElements = document.querySelectorAll(".Chinese");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });
        }
        // When you pick chinese
        else if (event.target.value === "Chinese") {
            console.log("Chinese language selected")
            const englishElements = document.querySelectorAll(".English");
            englishElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const koreanElements = document.querySelectorAll(".Korean");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const chineseElements = document.querySelectorAll(".Chinese");
            koreanElements.forEach((element) => {
                element.classList.remove("hide");
                element.classList.add("show");
            });
        }
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

export default SelectLanguage;