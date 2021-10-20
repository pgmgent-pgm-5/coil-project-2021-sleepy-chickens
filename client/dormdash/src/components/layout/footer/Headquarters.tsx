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

const Uppercase = styled.p`
  text-transform: uppercase;
`;

const Headquarters = () => {
  return (
    <Container>
      <Subtitle>Headquarters</Subtitle>
      <Uppercase>Dormdash nv</Uppercase>
      <p>Foreestelaan 1</p>
      <p>9000 Gent</p>
    </Container>
  )
}

export default Headquarters
