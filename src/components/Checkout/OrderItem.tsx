import React from "react";
import styled from "styled-components";
import Devider from "../layout/Partial/Devider";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 25%;
    display: block;

    img {
      width: 100%;
      border-radius: ${(props) => props.theme.borderRadius.normal};
    }
  }
`;

const Content = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: calc(75% - 1rem);
  }
`;

const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  id: number,
  name: string,
  price: number,
  picture: string, 
  quantity: number
}

const OrderItem = ({id, name, price, picture, quantity}: Props) => {
  return (
    <>
      <Container>
        <Image>
          <img src={`https://dormdash-server.herokuapp.com/dish-image/${picture}`} alt={name} />
        </Image>
        <Content>
          <ContentInfo>
          <p>{quantity} X </p>
          <p>{name}</p>
          <p>$ {price}</p>
          </ContentInfo>
        </Content>
      </Container>
      <Devider />
    </>
  );
};

export default OrderItem;
