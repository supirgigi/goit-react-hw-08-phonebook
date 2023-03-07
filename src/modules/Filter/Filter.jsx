import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <TextField
      sx={{ width: '100%' }}
      label="Find contacts by name"
      onChange={onChange}
      value={value}
      type="text"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
