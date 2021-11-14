import { useEffect } from "react";
import RestaurantCard from "../components/RestaurantsOverview/RestaurantCard";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import RestaurantFilter from "../components/RestaurantsOverview/RestaurantFilter";
import { useQuery, gql } from "@apollo/client";
import { RESTAURANTS_SUMMARY } from "../graphql/restaurants";
import { RestaurantSummaries } from "../interfaces/interfaces";

const Container = styled.div`
  margin-top: 5rem;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    display: flex;
  }
`;

const FilterContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    max-width: 20rem;
    min-width: 15rem;
    margin-right: 3rem;
  }
`;

const RestaurantContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {}

const RestaurantOverview = (props: Props) => {
  const { error, loading, data, refetch } = useQuery<RestaurantSummaries>(RESTAURANTS_SUMMARY, {
    fetchPolicy: "cache-first"
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <div>Loading ...</div>;

  return (
    <BaseLayout>
      <Container>
        <FilterContainer>
          <RestaurantFilter />
        </FilterContainer>
        <RestaurantContainer>
          {data?.restaurants.map(restaurant => {

            console.log("headCategories",restaurant.category);
            return (
              // <li key={restaurant.id}>
              //   <p>{restaurant.name}</p>
              // </li>
              <RestaurantCard 
                key={restaurant.id} 
                id={restaurant.id}
                name={restaurant.name}
                picture={restaurant.picture}
                deliveryTime={restaurant.deliveryTime}
                category={restaurant.category}
                reviews={restaurant.reviews}
              />
            )
            
          })}
         
        </RestaurantContainer>
        
      </Container>
    </BaseLayout>
  );
};

export default RestaurantOverview;
