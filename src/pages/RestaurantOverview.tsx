import { useEffect } from "react";
import RestaurantCard from "../components/RestaurantsOverview/RestaurantCard";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import RestaurantFilter from "../components/RestaurantsOverview/RestaurantFilter";
import { useQuery, gql } from "@apollo/client";
import { RESTAURANTS_SUMMARY } from "../graphql/restaurants";
import { RestaurantSummaries } from "../interfaces/interfaces";
import { Helmet } from "react-helmet";

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
  justify-content: space-between;
  width: 100%;
`;

interface Props {}

const RestaurantOverview = (props: Props) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const query = params.get("query");

  console.log(query);
  console.log(typeof query);
  const { error, loading, data, refetch } = useQuery<RestaurantSummaries>(
    RESTAURANTS_SUMMARY,
    {
      fetchPolicy: "cache-first",
      variables: { province: String(query) },
    }
  );

  if (data) {
    console.log(data);
  }

  if (loading) return <div>Loading ...</div>;

  return (
    <BaseLayout>
      {data && (
        <>
          <Helmet>
            <title>Dormdash | {query}</title>
            <meta
              name="description"
              content={`discover your favorite restaurants in ${query}`}
            />
          </Helmet>
          <Container>
            <FilterContainer>
              <RestaurantFilter />
            </FilterContainer>
            <RestaurantContainer>
              {data?.restaurantsByProvince.map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    picture={restaurant.picture}
                    deliveryTime={restaurant.deliveryTime}
                    category={restaurant.category}
                    reviews={restaurant.reviews}
                  />
                );
              })}
            </RestaurantContainer>
          </Container>
        </>
      )}
    </BaseLayout>
  );
};

export default RestaurantOverview;