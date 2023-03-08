import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
