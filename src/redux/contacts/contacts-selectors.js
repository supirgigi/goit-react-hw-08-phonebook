export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
