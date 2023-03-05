import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from 'modules/ContactForm';
import ContactList from 'modules/ContactList';
import Filter from 'modules/Filter';

import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selectors';

import ErrorMsg from 'shared/components/ErrorMsg';
import Loader from 'shared/components/Loader';

import { Container, MainTitle, ContactsTitle } from './App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = contact => {
    const { name } = contact;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact(contact));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = e => dispatch(setFilter(e.target.value));

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={handleSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={handleFilter} />
      {contacts.length > 0 && (
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMsg error={error} />}
    </Container>
  );
};

export default App;
