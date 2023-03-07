import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

import { useForm } from 'shared/hooks/useForm';
import fields from './fields';
import initialState from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        pt: 4,
        maxWidth: 400,
        m: 'auto',
      }}
    >
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
      <Button variant="contained" type="submit">
        Login
      </Button>
    </Box>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
