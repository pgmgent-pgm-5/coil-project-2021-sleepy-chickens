import React from "react";
import Devider from "./Devider";
import RestaurantFilterCategories from "./RestaurantFilterCategories";
import styled from "styled-components";
import RestaurantSort from "./RestaurantSort";

const Container = styled.div``;

const TitleContainer = styled.div`
  color: ${(props) => props.theme.colors.primaryAccentColor};

  span {
    font-size: ${(props) => props.theme.fontSizes.emedium};
    line-height: 1.2;

    @media (min-width: ${(props) => props.theme.width.medium}) {
      font-size: ${(props) => props.theme.fontSizes.large};
    }
  }
`;

interface Props {}

const RestaurantFilter = (props: Props) => {
  return (
    <Container>
      <TitleContainer>
        <h1>
          <span>100 </span>
          Restaurants
        </h1>
      </TitleContainer>
      <Devider />
      <RestaurantFilterCategories />
      <Devider />
      <RestaurantSort />
      <Devider />
    </Container>
  );
};

export default RestaurantFilter;
