import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  gap: 10;
`;

export const NavigationLink = styled(NavLink)`
  color: red;
`;
