import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';

import { authRefreshUser } from 'redux/auth/auth-operations';
import { NavBar } from 'modules/AppBar/AppBar';
import { useAuth } from 'shared/hooks';
import Loader from 'shared/components/Loader';
import UserRoutes from 'UserRoutes';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authRefreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Container component="div" sx={{ height: '100vh' }}>
        <NavBar />
        <Container component="main" sx={{ height: '100%' }}>
          <UserRoutes />
        </Container>
      </Container>
    </>
  );
};

export default App;
