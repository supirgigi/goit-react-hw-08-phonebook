export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthState = state => {
  const { isLoggedIn, token } = state.auth;
  return { isLoggedIn, token };
};
