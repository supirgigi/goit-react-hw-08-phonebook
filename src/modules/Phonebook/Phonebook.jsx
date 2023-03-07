import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid } from '@mui/material';

import ErrorMsg from 'shared/components/ErrorMsg';
import Loader from 'shared/components/Loader';
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

const Phonebook = () => {
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
    <>
      <Typography
        variant="h1"
        sx={{ textAlign: 'center', fontSize: '3rem', mb: 4 }}
      >
        Phonebook
      </Typography>
      <Grid
        container
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 6, md: 12 },
        }}
      >
        <Grid item xs>
          <Typography
            sx={{ textAlign: 'center', fontSize: '2rem' }}
            variant="h2"
          >
            Add Contacts
          </Typography>
          <ContactForm onSubmit={handleSubmit} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ alignSelf: { xs: 'center', sm: 'auto' } }}
        >
          <Typography
            sx={{ textAlign: 'center', fontSize: '2rem', mb: 2 }}
            variant="h2"
          >
            Contacts
          </Typography>
          <Filter value={filter} onChange={handleFilter} />
          {contacts.length > 0 && (
            <ContactList contacts={filteredContacts} onDelete={handleDelete} />
          )}
        </Grid>
      </Grid>
      {isLoading && <Loader />}
      {error && <ErrorMsg error={error} />}
    </>
  );
};

export default Phonebook;
