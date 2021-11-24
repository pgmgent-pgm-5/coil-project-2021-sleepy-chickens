import { BaseLayout } from "../layouts";

import Hero from "../components/hero/Hero";
import Process from "../components/home/Process";
import CallToActionDeliverer from "../components/home/CallToActionDeliverer";
import CallToActionPartner from "../components/home/CallToActionPartner";
import { Helmet } from "react-helmet";
import { RestaurantSummaries } from "../interfaces/interfaces";
import { useQuery } from "@apollo/client";
import { RESTAURANTS_SUMMARY } from "../graphql/restaurants";
interface Props {}

const HomePage = (props: Props) => {
  const { error, loading, data, refetch } = useQuery<RestaurantSummaries>(
    RESTAURANTS_SUMMARY,
    {
      fetchPolicy: "cache-first",
      variables: { province: String("Ohio") },
    }
  );

  console.log(data);

  return (
    <BaseLayout>
      <Helmet>
        <title>Dormdash | Home</title>
      </Helmet>
      <Hero />
      <Process />
      <CallToActionDeliverer />
      <CallToActionPartner />
    </BaseLayout>
  );
};

export default HomePage;
