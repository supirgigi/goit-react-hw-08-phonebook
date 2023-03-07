import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/register',
    text: 'Register',
  },
  {
    id: nanoid(),
    to: '/login',
    text: 'Login',
  },
];

export default items;
