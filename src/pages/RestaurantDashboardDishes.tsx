import React, { useEffect } from "react";
import RestaurantDishes from "../components/Admin/Restaurant/RestaurantDishes";
import AdminLayout from "../layouts/AdminLayout";
import styled from "styled-components";
import PrimaryButtonLink from "../components/form/PrimaryButtonLink";
import * as Routes from "../routes";
import { Helmet } from "react-helmet";
import { useUser } from "../context/AuthenticationContext";
import { GET_RESTAURANTID_BY_USERID } from "../graphql/restaurants";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Redirect, useHistory } from "react-router-dom";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-right: 2rem;
  }

  div {
    width: 8rem;
  }
`;

interface Props {}

const RestaurantDashboardDishes = (props: Props) => {
  const history = useHistory();
  const userContext = useUser();
  const userId: number | undefined = userContext?.state.id;
  console.log("userId", userContext?.state.id);

  // const { error, loading, data, refetch } = useQuery(GET_RESTAURANTID_BY_USERID), {
  //   variables: { userId: userId },
  // });

  const [restaurantIdByUserId, { error, loading, data }] = useLazyQuery(
    GET_RESTAURANTID_BY_USERID
  );

  useEffect(() => {
    if (userId !== undefined) {
      console.log("useeffectuserid", userId);
      restaurantIdByUserId({
        variables: {
          userId: userId,
        },
      });
    }
  }, [userId]);

  console.log(data);
  console.log(data.getRestaurantByUserId.id);
  const restaurantId = data.getRestaurantByUserId.id;
  return (
    <AdminLayout>
      <Helmet>
        <title>Dormdashboard | Dishes</title>
        <meta name="description" content="See al your Dishes" />
      </Helmet>

      <Title>
        <h1>Restaurant dishes</h1>
        <PrimaryButtonLink
          link={Routes.DISH_ADD.replace(":restaurantId", restaurantId)}
        >
          Add dish
        </PrimaryButtonLink>
      </Title>
      {data && <RestaurantDishes restaurantId={restaurantId} />}
    </AdminLayout>
  );

  //   else {
  //     return (
  //       <Redirect to={Routes.ERROR.replace(':errorMessage', 'You are not authenticated!')} />
  //     )
  //   }
};

export default RestaurantDashboardDishes;
