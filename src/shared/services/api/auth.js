import instance from './instance';

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signUp = async credentials => {
  const { data } = await instance.post('users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logIn = async credentials => {
  const { data } = await instance.post('users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logOut = async () => {
  await instance.post('users/logout');
  clearAuthHeader();
};

export const getCurrentUser = async token => {
  setAuthHeader(token);
  const { data } = await instance.get('users/current');
  return data;
};
