import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const IsRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const IsLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    IsRefreshing,
    user,
    IsLoading,
  };
};
