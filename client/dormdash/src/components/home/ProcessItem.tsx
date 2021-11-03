import styled from "styled-components";
import { ProcessItemProps } from "../../interfaces/interfaces";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Item = styled.li`
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 30%;

    img {
      width: 100%;
      height: 16rem;
    }

    h3 {
      text-align: center;
      margin-bottom: 0.5rem;
    }

    p {
      text-align: center;
    }
  }
`;

const LottieContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ProcessItem = ({
  id,
  name,
  lottie,
  title,
  text,
}: ProcessItemProps) => {
  return (
    <Item key={id}>
      <LottieContainer>
        <Player
          autoplay
          loop
          src={lottie}
          style={{ height: "100%", width: "100%" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </LottieContainer>
      <h3>{title}</h3>
      <p>{text}</p>
    </Item>
  );
};
