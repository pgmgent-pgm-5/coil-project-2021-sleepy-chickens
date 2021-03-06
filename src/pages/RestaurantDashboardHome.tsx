import { useQuery } from "@apollo/client";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import OrderDetails from "../components/Admin/Restaurant/OrderDetails";
import Rechart from "../components/Admin/Restaurant/Rechart";
import SalesRevenue from "../components/Admin/Restaurant/SalesRevenue";
import { useUser } from "../context/AuthenticationContext";
import { GET_RESTAURANTID_BY_USERID } from "../graphql/restaurants";
import AdminLayout from "../layouts/AdminLayout";
import * as Routes from "../routes";

interface Props {}

const RestaurantDashboardHome = (props: Props) => {
  const userContext = useUser();
  const userId: number | undefined = userContext?.state.id;

  const {error, loading, data} = useQuery(GET_RESTAURANTID_BY_USERID, {
    variables:{
      userId: userId,
    }
  });

  if (loading) return <p>Loading ...</p>

  if (error) return <Redirect to={Routes.ERROR.replace(':errorMessage', 'You are not authenticated!')} />;

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
};

export default RestaurantDashboardHome;
