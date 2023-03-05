import PropTypes from 'prop-types';

import { Item, Text, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone, onDelete }) => {
  return (
    <Item>
      <Text>
        {name}: {phone}
      </Text>
      <Button onClick={() => onDelete(id)} type="button">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
