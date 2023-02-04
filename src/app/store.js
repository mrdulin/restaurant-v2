import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../components/LanguageSlice'

const store = configureStore({
  reducer: {
    language: languageReducer
  },
});

export default store;
export * from '../components/LanguageSlice'