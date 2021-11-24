import { Helmet } from "react-helmet";
import OrderDetails from "../components/Admin/Restaurant/OrderDetails";
import Rechart from "../components/Admin/Restaurant/Rechart";
import SalesRevenue from "../components/Admin/Restaurant/SalesRevenue";
import AdminLayout from "../layouts/AdminLayout";

interface Props {}

const RestaurantDashboardHome = (props: Props) => {
  return (
    <AdminLayout>
      <Helmet>
        <title>Dormdashboard | Home</title>
        <meta name="description" content="home dashboard for restaurants" />
      </Helmet>

      <SalesRevenue />
      <Rechart />
      <OrderDetails />
    </AdminLayout>
  );
};

export default RestaurantDashboardHome;
