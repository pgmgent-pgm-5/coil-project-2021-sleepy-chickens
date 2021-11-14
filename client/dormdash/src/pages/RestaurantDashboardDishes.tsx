import React from "react";
import RestaurantDishes from "../components/Admin/Restaurant/RestaurantDishes";
import AdminLayout from "../layouts/AdminLayout";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 4rem;
`;

interface Props {}

const RestaurantDashboardDishes = (props: Props) => {
  return (
    <AdminLayout>
      <Title>Restaurant dishes</Title>
      <RestaurantDishes />
    </AdminLayout>
  );
};

export default RestaurantDashboardDishes;
