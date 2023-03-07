import { TextField, Button, Box } from '@mui/material';

import { useForm } from 'shared/hooks/useForm';
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
        m: 'auto',
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
      <Button variant="contained" size="medium">
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
