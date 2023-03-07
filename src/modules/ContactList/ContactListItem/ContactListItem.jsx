import { Button, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', pt: 0 }}>
      <Typography>
        {name}: {number}
      </Typography>
      <Button
        sx={{ ml: 2 }}
        variant="outlined"
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
