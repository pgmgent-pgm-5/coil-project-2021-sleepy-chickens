import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 48%;
  }

  @media (min-width: ${(props) => props.theme.width.medium}) {
    width: 23%;
  }

  a {
    color: ${(props) => props.theme.colors.black};
  }
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 1rem;
`;

const Contact = () => {
  return (
    <Container>
      <Subtitle>Contact us</Subtitle>
      <p>
        <a href="mailto:dormdash@hotmail.com">dormdash@hotmail.com</a>
      </p>
      <p>
        <a href="tel:+32 (0)77 77 77 77">+32 (0)77 77 77 77</a>
      </p>
    </Container>
  );
};

export default Contact;
