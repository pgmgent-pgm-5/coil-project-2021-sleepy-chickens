import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import OrderDetails from "../components/Admin/Restaurant/OrderDetails";
import Rechart from "../components/Admin/Restaurant/Rechart";
import SalesRevenue from "../components/Admin/Restaurant/SalesRevenue";
import { useUser } from "../context/AuthenticationContext";
import { ALL_ORDERS_BY_RESTAURANT_ID } from "../graphql/orders";
import { GET_RESTAURANTID_BY_USERID } from "../graphql/restaurants";
import AdminLayout from "../layouts/AdminLayout";
import * as Routes from "../routes";

interface Props {}

const RestaurantDashboardHome = (props: Props) => {
  const userContext = useUser();
  console.log("userId", userContext?.state.id);
  const userId: number | undefined = userContext?.state.id;
  console.log("userId", userContext?.state.id);

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

  const restaurantId = data && data.getRestaurantByUserId.id;

  return (
    <AdminLayout>
      <Helmet>
        <title>Dormdashboard | Home</title>
        <meta name="description" content="home dashboard for restaurants" />
      </Helmet>
      <SalesRevenue />
      <Rechart />
      {data && <OrderDetails restaurantId={restaurantId} />}
    </AdminLayout>
  );

  //   else {
  //     return (
  //       <Redirect to={Routes.ERROR.replace(':errorMessage', 'You are not authenticated!')} />
  //     )
  //   }
};

export default RestaurantDashboardHome;
