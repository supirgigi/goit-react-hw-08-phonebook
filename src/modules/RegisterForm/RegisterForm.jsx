import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

import { useForm } from 'shared/hooks';
import fields from './fields';
import initialState from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password, name } = state;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: 4,
        maxWidth: 400,
        ml: 'auto',
        mr: 'auto',
      }}
    >
      <TextField
        margin="normal"
        value={name}
        onChange={handleChange}
        {...fields.name}
      />
      <TextField
        margin="normal"
        value={email}
        onChange={handleChange}
        {...fields.email}
      />
      <TextField
        margin="normal"
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button variant="contained" size="medium" type="submit">
        Register
      </Button>
    </Box>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
