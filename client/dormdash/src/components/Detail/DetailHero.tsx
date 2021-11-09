import React from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Container = styled.div`
  margin-top: 3rem;
  background-image: url("https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  height: 15rem;
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => props.theme.borderRadius.normal};
  position: relative;

  @media (min-width: ${(props) => props.theme.width.small}) {
    height: 25rem;
  }
`;

const BgContainer = styled.div`
  @media (min-width: ${(props) => props.theme.width.small}) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 18;
    position: absolute;
    border-radius: ${(props) => props.theme.borderRadius.normal};
    height: 100%;
    width: 100%;
  }
`;

const InfoButton = styled.button`
  z-index: 20;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 0.25rem;
  border-radius: ${(props) => props.theme.borderRadius.normal};
  cursor: pointer;


  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.secondaryAccentColor} 
    `;

const RestaurantContentContainer = styled.div`
  z-index: 21;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    transform: translateY(-5.5rem);
    margin-left: 1rem;
  }
`;

const Image = styled.div`
  margin-right: 1rem;
  background-image: url("https://images.unsplash.com/photo-1590874315261-788881621f7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80");
  background-size: cover;
  background-position: center;
  width: 4rem;
  height: 4rem;
  border-radius: ${(props) => props.theme.borderRadius.circle};
`;

const RestaurantContent = styled.div`
  @media (min-width: ${(props) => props.theme.width.small}) {
    color: ${(props) => props.theme.colors.white};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.normal};
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

interface Props {}

const DetailHero = (props: Props) => {
  return (
    <>
      <Container>
        <BgContainer></BgContainer>
        <InfoButton>
          <span>
            <AiOutlineInfoCircle />
          </span>
        </InfoButton>
      </Container>
      <RestaurantContentContainer>
        <Image></Image>
        <RestaurantContent>
          <h1>Restaurant name</h1>
          <div>
            <span>Category</span>
            <span>30min</span>
          </div>
        </RestaurantContent>
      </RestaurantContentContainer>
    </>
  );
};

export default DetailHero;
