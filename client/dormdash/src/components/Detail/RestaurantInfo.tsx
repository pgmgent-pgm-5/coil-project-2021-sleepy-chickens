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

  div p span {
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string;
  street: string;
  streetnumber: number;
  postalcode: number | string;
  city: string;
  province: string;
}

const RestaurantInfo = ({
  onClick,
  name,
  street,
  streetnumber,
  postalcode,
  city,
  province,
}: Props) => {
  return (
    <>
      <FlexTitle>
        <h2>{name}</h2>
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
        <p>
          <span>
            {street} {streetnumber},
          </span>
          <br />
          <span>
            {postalcode} {city}, {province}
          </span>
        </p>
      </Container>
    </>
  );
};

export default RestaurantInfo;
