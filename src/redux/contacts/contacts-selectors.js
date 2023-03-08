export const selectContacts = state => state.contacts.items;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectFilteredContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
