import SalesRevenue from "../components/Admin/Restaurant/SalesRevenue";
import AdminLayout from "../layouts/AdminLayout";

interface Props {}

const RestaurantDashboardHome = (props: Props) => {
  return (
    <AdminLayout>
      <SalesRevenue />
    </AdminLayout>
  );
};

export default RestaurantDashboardHome;
