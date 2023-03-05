import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  margin-top: ${props => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;
