import { useEffect } from "react";
import RestaurantCard from "../components/RestaurantsOverview/RestaurantCard";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import RestaurantFilter from "../components/RestaurantsOverview/RestaurantFilter";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { RESTAURANTS_SUMMARY, RESTAURANTS_SUMMARY_CATEGORY } from "../graphql/restaurants";
import { RestaurantSummaries } from "../interfaces/interfaces";
import { Helmet } from "react-helmet";
import { useState } from "react";

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
  const [cat, setCat] = useState('');

  const handleCategoryChange = (isSelected: string) => {
    setCat(isSelected);
  }

  console.log('super parent', cat);

  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const query = params.get("query");
  // console.log(search);
  // console.log("params", params);
  const url = window.location.href;
  const [hash, query] = url.split('#')[1].split('?')
  const params = Object.fromEntries(new URLSearchParams(query));
  const search = params.query;

    const [restaurantsByProvince, { error, loading, data}] = useLazyQuery<RestaurantSummaries>(RESTAURANTS_SUMMARY);
    
    const [restaurantsByProvinceAndCat, { error:categoryError, loading: categoryLoading, data: categoryData}] = useLazyQuery(RESTAURANTS_SUMMARY_CATEGORY);

  useEffect(() => {
    if (cat === '') {
      console.log('object')
      // const { error, loading, data, refetch } = useQuery<RestaurantSummaries>(
      //   RESTAURANTS_SUMMARY,
      //   {
      //     fetchPolicy: "cache-first",
      //     variables: { province: String(search) },
      //   }
      // );
      restaurantsByProvince({variables: { province: String(search) }})
  
    } else {
      let catId;
      switch (cat) {
        case 'sushi':
          catId = 1;
          break;
        case 'hamburgers':
          catId = 2;
          break;
        case 'pizza':
          catId = 3;
          break;
        case 'pita':
          catId = 4;
          break;
        case 'pasta':
          catId = 5;
          break;
      
        default:
          break;
      };
  
      restaurantsByProvinceAndCat({variables: { province: String(search), categoryId: Number(catId) }});
      
  
      // const { error, loading, data, refetch } = useQuery(
      //   RESTAURANTS_SUMMARY_CATEGORY,
      //   {
      //     fetchPolicy: "cache-first",
      //     variables: { province: String(search), categoryId: Number(catId) },
      //   }
      // );
    }
  }, [cat])
  
  

  if (data) {
    console.log(data);
  }

  if (categoryData) {
    console.log('categoryData', categoryData);
  }

  if (loading) return <div>Loading ...</div>;

  return (
    <BaseLayout>
      
        <>
          <Helmet>
            <title>Dormdash | {search}</title>
            <meta
              name="description"
              content={`discover your favorite restaurants in ${search}`}
            />
          </Helmet>
          <Container>
            <FilterContainer>
              <RestaurantFilter onCatChange={handleCategoryChange}/>
            </FilterContainer>
            {data && !categoryData && (
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
            )}
            {categoryData && (
              <RestaurantContainer>
                {categoryData?.restaurantsByCategoryAndProvince.map((restaurant: any) => {
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
            )}

          </Container>
        </>
    </BaseLayout>
  );
};

export default RestaurantOverview;
