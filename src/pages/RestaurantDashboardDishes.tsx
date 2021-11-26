import React from "react";
import RestaurantDishes from "../components/Admin/Restaurant/RestaurantDishes";
import AdminLayout from "../layouts/AdminLayout";
import styled from "styled-components";
import PrimaryButtonLink from "../components/form/PrimaryButtonLink";
import * as Routes from "../routes";
import { Helmet } from "react-helmet";

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
  return (
    <AdminLayout>
      <Helmet>
        <title>Dormdashboard | Dishes</title>
        <meta name="description" content="See al your Dishes" />
      </Helmet>

      <Title>
        <h1>Restaurant dishes</h1>
        <PrimaryButtonLink link={Routes.DISH_ADD.replace(":restaurantId", "1")}>
          Add dish
        </PrimaryButtonLink>
      </Title>
      <RestaurantDishes />
    </AdminLayout>
  );
};

export default RestaurantDashboardDishes;
