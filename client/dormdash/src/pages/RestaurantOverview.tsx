import React from "react";
import RestaurantCard from "../components/RestaurantsOverview/RestaurantCard";
import { BaseLayout } from "../layouts";
import styled from "styled-components";

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  margin-top: 5rem;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    display: flex;
  }
`;

const FilterContainer = styled.div`
  width: 100%;

  height: 50vh;
  background-color: red;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    max-width: 25rem;
    min-width: 20rem;
    margin-right: 3rem;
  }
`;

const RestaurantContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {}

const RestaurantOverview = (props: Props) => {
  return (
    <BaseLayout>
      <Container>
        <FilterContainer></FilterContainer>
        <RestaurantContainer>
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </RestaurantContainer>
      </Container>
    </BaseLayout>
  );
};

export default RestaurantOverview;
