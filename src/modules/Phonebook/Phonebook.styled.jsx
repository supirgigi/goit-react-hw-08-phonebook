import styled from 'styled-components';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(4)};

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(4)};
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

export const ContactsTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(4)};
  text-align: center;
  font-size: 26px;
  font-weight: 600;
`;
