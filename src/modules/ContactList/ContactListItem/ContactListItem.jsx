import { ListItem, IconButton, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: 0,
        pb: 0,
        gap: 4,
      }}
      divider
    >
      <ListItemText primary={name} secondary={number} />
      <IconButton variant="outlined" onClick={() => onDelete(id)} type="button">
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
