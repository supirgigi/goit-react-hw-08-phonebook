import { Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 144px)',
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
