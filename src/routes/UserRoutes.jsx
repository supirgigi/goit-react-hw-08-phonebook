import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import PublicRoute from 'routes/PublicRoute/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';

import Loader from 'shared/components/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            height: 'calc(100vh - 72px)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
