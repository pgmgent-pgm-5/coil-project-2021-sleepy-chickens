import { BaseLayout } from "../layouts";

import Hero from "../components/hero/Hero";
import Process from "../components/home/Process";
import CallToActionDeliverer from "../components/home/CallToActionDeliverer";
import CallToActionPartner from "../components/home/CallToActionPartner";
interface Props {}

const HomePage = (props: Props) => {
  return (
    <BaseLayout>
      <Hero />
      <Process />
      <CallToActionDeliverer />
      <CallToActionPartner />
    </BaseLayout>
  );
};

export default HomePage;
