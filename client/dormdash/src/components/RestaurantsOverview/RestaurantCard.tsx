import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-width: 14rem;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.width.small}) {
    flex-grow: 1;
    flex-basis: calc(50% - 2rem);
    margin: 0 1rem;
    margin-bottom: 2rem;
  }
  @media (min-width: ${(props) => props.theme.width.medium}) {
    margin: 0 1rem;
    margin-bottom: 2rem;
    flex-basis: calc(33% - 2rem);
  }
`;

const Image = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.normal};
  min-height: 12rem;
  height: 80%;
  background-image: url("https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  background-position: center center;
`;

const Rating = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.secondaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.colors.secondaryAccentColor};
  }
`;

const Content = styled.div`
  padding: 0 0.5rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      display: block;
    }
  }
`;

interface Props {}

const RestaurantCard = (props: Props) => {
  return (
    <Container>
      <Rating>
        <span>4.1</span>
      </Rating>

      <Image></Image>

      <Content>
        <h3>Title</h3>
        <div>
          <span>Category</span>
          <span>30 min</span>
        </div>
      </Content>
    </Container>
  );
};

export default RestaurantCard;
