import { AppContainer } from './App.styled';
import { GlobalStyle } from '../GlobalStyle';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperations';   
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};