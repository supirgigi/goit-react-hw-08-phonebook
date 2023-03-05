import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          onDelete={onDelete}
        ></ContactListItem>
      ))}
    </List>
  );
};

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
