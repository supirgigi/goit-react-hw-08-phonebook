import { ListItem, IconButton, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        pt: 0,
        pb: 0,
        gap: 4,
      }}
      divider
    >
      <ListItemText primary={name} secondary={number} />
      <IconButton
        variant="outlined"
        onClick={() => onDelete(id)}
        type="button"
        aria-label="delete"
      >
        <DeleteIcon color="primary" />
      </IconButton>
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
