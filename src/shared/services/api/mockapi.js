import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fca459859df29986c12d74.mockapi.io/api',
});

export const fetchAll = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addItem = async item => {
  const { data } = await instance.post('/contacts', item);
  return data;
};

export const deleteItem = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
