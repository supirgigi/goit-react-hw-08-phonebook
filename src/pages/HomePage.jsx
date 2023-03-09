import { Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 144px)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" sx={{ fontSize: '2.5rem', textAlign: 'center' }}>
        Welcome to Phonebook!
      </Typography>
      <Typography sx={{ fontSize: '1.25rem', textAlign: 'center' }}>
        Sign up or log in to start using.
      </Typography>
    </Box>
  );
};

export default HomePage;
