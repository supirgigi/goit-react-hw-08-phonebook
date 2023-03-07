import instance from './instance';

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signUp = async credentials => {
  const { data } = await instance.post('users/signup', credentials);
  return data;
};

export const logIn = async credentials => {
  const { data } = await instance.post('users/login', credentials);
  return data;
};

export const logOut = async () => {
  await instance.post('users/logout');
};

export const getCurrentUser = async () => {
  const { data } = await instance.get('users/current');
  return data;
};
