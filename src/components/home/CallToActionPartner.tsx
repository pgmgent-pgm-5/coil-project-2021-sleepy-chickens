import styled from "styled-components";
import partner from "../../assets/CallToActionPartner.png";
import * as Routes from "../../routes";
import PrimaryButtonLink from "../form/PrimaryButtonLink";

const Container = styled.div`
  margin: 5rem 0;

  @media (min-width: ${(props) => props.theme.width.small}) {
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;

    @media (min-width: ${(props) => props.theme.width.small}) {
      width: 60%;
    }
    @media (min-width: ${(props) => props.theme.width.medium}) {
      width: 70%;
    }
  }
`;

const Content = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

interface Props {}

const CallToActionPartner = (props: Props) => {
  return (
    <Container>
      <Content>
        <h2>Become a partner!</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <PrimaryButtonLink link={Routes.BECOME_PARTNER}>
          Sign up
        </PrimaryButtonLink>
      </Content>
      <img src={partner} alt="Busy open street with a patio restaurant" />
    </Container>
  );
};

export default CallToActionPartner;
