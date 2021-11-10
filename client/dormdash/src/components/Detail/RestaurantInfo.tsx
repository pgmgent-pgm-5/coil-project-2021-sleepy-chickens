import React from "react";
import styled from "styled-components";
import ModalCloseButton from "./ModalCloseButton";

const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RestaurantInfo = ({ onClick }: Props) => {
  return (
    <>
      <FlexTitle>
        <h2>Restaurant name</h2>
        <ModalCloseButton onClick={onClick} />
      </FlexTitle>

      <Container>
        <h3>Delivery Times</h3>
        <Flex>
          <p>Monday</p>
          <p>10:00 - 23:00</p>
        </Flex>
        <Flex>
          <p>Monday</p>
          <p>10:00 - 23:00</p>
        </Flex>
        <Flex>
          <p>Monday</p>
          <p>10:00 - 23:00</p>
        </Flex>
        <Flex>
          <p>Monday</p>
          <p>10:00 - 23:00</p>
        </Flex>
        <Flex>
          <p>Monday</p>
          <p>10:00 - 23:00</p>
        </Flex>
        <Flex>
          <p>Monday</p>
          <p>10:00 - 23:00</p>
        </Flex>
      </Container>

      <Container>
        <h3>Address</h3>
        <p>Industrieweg 232 9030 Gent</p>
      </Container>
    </>
  );
};

export default RestaurantInfo;
