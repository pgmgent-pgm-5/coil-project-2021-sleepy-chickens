import React from "react";
import styled from "styled-components";
import Devider from "../layout/Partial/Devider";
import ShoppingBasketActionButton from "./ShoppingBasketActions/ShoppingBasketActionButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useStore } from "../../store/cartStore";

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
  margin-bottom: 1rem;
`;

const ProductActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  min-width: 7rem;
  justify-content: space-between;

  span {
    margin: 0 1rem;
    display: block;
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
`;

interface Props {
  description: string;
  id: number;
  name: string;
  picture: string;
  price: number;
  quantity: number;
  restaurantId: number;
}

const ShoppingBasketItem = ({description, id, name, picture, price, quantity, restaurantId }: Props) => {
  const { addDish, removeDish, minusDish } = useStore();
  return (
    <>
      <Container>
        <Image>
          <img src={`https://dormdash-server.herokuapp.com/dish-image/${picture}`} alt="" />
        </Image>
        <Content>
          <ContentInfo>
            <p>{name}</p>
            <p>$ {Math.round(((price * quantity) + Number.EPSILON) * 100) / 100}</p>
          </ContentInfo>

          <ProductActions>
            <Quantity>
              <ShoppingBasketActionButton onClick={() => minusDish(id)}>-</ShoppingBasketActionButton>
              <div>
                <span>{quantity}</span>
              </div>
              <ShoppingBasketActionButton onClick={() => addDish({id, description, name, price, picture, restaurantId})}>+</ShoppingBasketActionButton>
            </Quantity>
            <ShoppingBasketActionButton onClick={() => removeDish(id)}>
              <RiDeleteBin6Line />
            </ShoppingBasketActionButton>
          </ProductActions>
        </Content>
      </Container>
      <Devider />
    </>
  );
};

export default ShoppingBasketItem;
