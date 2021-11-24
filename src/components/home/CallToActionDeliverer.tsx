import styled from "styled-components";
import deliverer from "../../assets/CallToActionDeliverer.jpg";
import * as Routes from "../../routes";
import PrimaryButtonLink from "../form/PrimaryButtonLink";

const Container = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.width.small}) {
    align-items: center;
    flex-direction: row;
  }

  img {
    width: 100%;
    order: 1;

    @media (min-width: ${(props) => props.theme.width.small}) {
      width: 60%;
      order: 0;
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

const CallToActionDeliverer = (props: Props) => {
  return (
    <Container>
      <img src={deliverer} alt="Girl walking next to her bike in nature" />
      <Content>
        <h2>Become a deliverer!</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <PrimaryButtonLink link={Routes.BECOME_DRIVER}>
          Sign up
        </PrimaryButtonLink>
      </Content>
    </Container>
  );
};

export default CallToActionDeliverer;
