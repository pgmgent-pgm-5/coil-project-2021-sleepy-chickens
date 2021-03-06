import RestaurantDishes from "../components/Admin/Restaurant/RestaurantDishes";
import AdminLayout from "../layouts/AdminLayout";
import styled from "styled-components";
import PrimaryButtonLink from "../components/form/PrimaryButtonLink";
import * as Routes from "../routes";
import { Helmet } from "react-helmet";
import { useUser } from "../context/AuthenticationContext";
import { GET_RESTAURANTID_BY_USERID } from "../graphql/restaurants";
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";

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
  const userContext = useUser();
  const userId: number | undefined = userContext?.state.id;

  const {error, loading, data} = useQuery(GET_RESTAURANTID_BY_USERID, {
    variables:{
      userId: userId,
    }
  });

  if (loading) return <p>Loading ...</p>

  if (error) return <Redirect to={Routes.ERROR.replace(':errorMessage', 'You are not authenticated!')} />;

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
};

export default RestaurantDashboardDishes;
