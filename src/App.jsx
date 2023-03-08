import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { authRefreshUser } from 'redux/auth/auth-operations';
import { NavBar } from 'modules/AppBar/AppBar';
import { useAuth } from 'shared/hooks';
import Loader from 'shared/components/Loader';
import UserRoutes from 'UserRoutes';

import 'react-toastify/dist/ReactToastify.css';

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
      <Container component="div" sx={{ minHeight: '100vh' }}>
        <NavBar />
        <Container component="main" sx={{ height: '100%', pt: 9, pb: 9 }}>
          <UserRoutes />
        </Container>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        theme="light"
        limit={3}
      />
    </>
  );
};

export default App;
