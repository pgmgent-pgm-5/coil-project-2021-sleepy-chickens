import styled from 'styled-components';

const Container = styled.div`
  padding: 1.5rem;
`;

const Copyright = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
`;

export const FooterBottom = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <Container>
      <Copyright>© copyright {currentYear}, dormdash nv</Copyright>
    </Container>
  )
}

