import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contactsReducers';

export const store = configureStore({
    reducer: {
        contacts,
    },
});