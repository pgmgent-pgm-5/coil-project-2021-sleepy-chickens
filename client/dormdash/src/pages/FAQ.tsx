import { BaseLayout } from "../layouts";
import styled from "styled-components";
import student_faq from "../data/student_faq.json";
import FaqStudent from "../components/FAQ/FaqStudent";
import FaqRestaurant from "../components/FAQ/FaqRestaurant";
import FaqDeliverer from "../components/FAQ/FaqDeliverer";
import { Helmet } from "react-helmet";

const Title = styled.h1`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 2rem;
  }
`;

const FAQ = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Dormdash | FAQ</title>
        <meta
          name="description"
          content="Got a question? here are all the frequently questions"
        />
      </Helmet>

      <Title>FAQ</Title>
      <Container>
        <h2>Student FAQ</h2>
        {student_faq.map((faq) => {
          return <FaqStudent id={faq.id} Q={faq.Q} A={faq.A} />;
        })}
      </Container>
      <Container>
        <h2>Restaurant FAQ</h2>
        <FaqRestaurant />
      </Container>
      <Container>
        <h2>Deliverer FAQ</h2>
        <FaqDeliverer />
      </Container>
    </BaseLayout>
  );
};

export default FAQ;
