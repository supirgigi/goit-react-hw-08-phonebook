import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
  width: 240px;
`;

export const Input = styled.input`
  width: 100%;
  border: ${props => props.theme.border};
`;
