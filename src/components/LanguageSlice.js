// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'English',
    englishHidden: false,
    koreanHidden: true,
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            if (action.payload === 'English') {
                console.log("Store language changed to english")
                state.language = "English";
                state.englishHidden = false;
                state.koreanHidden = true;
            } else if (action.payload === 'Korean') {
                console.log("Store language changed to korean")
                state.language = "Korean"
                state.englishHidden = true;
                state.koreanHidden = false;
            }
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export const currentLanguage = (state) => state.language.language;

export default languageSlice.reducer;
