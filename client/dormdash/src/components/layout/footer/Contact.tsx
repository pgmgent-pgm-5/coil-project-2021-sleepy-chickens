import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${props => props.theme.width.small}) {
    width: 48%;
  }

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 23%;
  }
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 1rem;
`;

const Contact = () => {
  return (
    <Container>
      <Subtitle>Contact us</Subtitle>
      <p>dormdash@hotmail.com</p>
      <p>+32 (0)77 77 77 77</p>
    </Container>
  )
}

export default Contact
