import React from "react";
import Devider from "../layout/Partial/Devider";
import RestaurantFilterCategories from "./RestaurantFilterCategories";
import styled from "styled-components";
import RestaurantSort from "./RestaurantSort";
import { useState } from "react";
import { useEffect } from "react";

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



const RestaurantFilter = ({onCatChange}: any) => {
  const [cat, setCat] = useState('')
  
  const handleCategoryChange = (isSelected: string) => {
    setCat(isSelected);
  }

  useEffect(() => {
    if(typeof onCatChange === 'function') {
      onCatChange(cat);
    }
  }, [cat, onCatChange]);

  return (
    <Container>
      <TitleContainer>
        <h1>
          <span>100 </span>
          Restaurants
        </h1>
      </TitleContainer>
      <Devider />
      <RestaurantFilterCategories onCategoryChange={handleCategoryChange} />
      <Devider />
      <RestaurantSort />
      <Devider />
    </Container>
  );
};

export default RestaurantFilter;
