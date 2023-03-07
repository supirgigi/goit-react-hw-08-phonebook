import { Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Typography variant="h4">
        Welcome to Phonebook! Sign up or login to start using.
      </Typography>
    </Box>
  );
};

export default HomePage;
