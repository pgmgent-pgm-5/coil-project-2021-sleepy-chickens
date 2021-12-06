import React from "react";
import styled from "styled-components";
import ModalCloseButton from "../Detail/ModalCloseButton";
import PrimaryButtonLink from "../form/PrimaryButtonLink";
import ShoppingBasketItem from "./ShoppingBasketItem";
import ShoppingBasketTotal from "./ShoppingBasketTotal";
import * as Routes from "../../routes";
import { useStore } from "../../store/cartStore";
import { DishCart, DishesTotal } from "../../interfaces/interfaces";

const BlurContainer = styled.div<Props>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(23, 106, 164, 0.48);
  z-index: 100;
  backdrop-filter: blur(5px);
`;

const Container = styled.div<Props>`
  position: relative;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;
  padding: 2rem;
  padding-bottom: 0;
  overflow-y: auto;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 30rem;
  }
`;

const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const EmptyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShoppingBasketItemsContainer = styled.div``;

interface Props {
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ShoppingBasket = ({ onClick, open }: Props) => {
  const { addDish, removeDish, dishes } = useStore();

  const isEmpty = !dishes.length;

  const EmptyShoppingBasket = () => (
    <EmptyContainer>
      <p>Shopping basket is empty</p>
    </EmptyContainer>
  );

  const get_total = (dishes: DishesTotal) => {
    let sum = 0;
    Object.entries(dishes).map((dish) => {
      const price = dish[1].price;
      const quantity = dish[1].quantity;
      sum += price * quantity;
      sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    });
    return sum;
  };

  return (
    <>
      <BlurContainer open={open}></BlurContainer>
      <Container open={open}>
        <FlexTitle>
          <h2>My basket</h2>
          <ModalCloseButton onClick={onClick} />
        </FlexTitle>
        {isEmpty ? (
          <EmptyShoppingBasket />
        ) : (
          <>
            {Object.entries(dishes).map((dish) => {
              console.log("yep", dish);
              return (
                <ShoppingBasketItem
                  description={dish[1].description}
                  id={dish[1].id}
                  name={dish[1].name}
                  picture={dish[1].picture}
                  price={dish[1].price}
                  quantity={dish[1].quantity}
                  restaurantId={dish[1].restaurantId}
                />
              );
            })}
            <ShoppingBasketTotal total={get_total(dishes)} />
            <PrimaryButtonLink link={Routes.CHECKOUT}>
              Checkout
            </PrimaryButtonLink>
          </>
        )}
      </Container>
    </>
  );
};

export default ShoppingBasket;
