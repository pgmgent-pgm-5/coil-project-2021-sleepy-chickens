import React from "react";
import styled from "styled-components";
import { BaseLayout } from "../layouts";

const Container = styled.div`
  max-width: 80rem;
  margin: 5rem auto;

  h1 {
    color: ${(props) => props.theme.colors.primaryAccentColor};
    margin-bottom: 2rem;
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.secondaryAccentColor};
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const AboutUs = () => {
  return (
    <BaseLayout>
      <Container>
        <h1>About us</h1>
        <div>
          <span>Who We Are</span>
          <p>
            We are Dormdash, a food delivery service that connects students with
            restaurants in their city. Dormdash started as a side project for
            some hungry students - we always studied late into the night and had
            no food to eat. We created Dormdash as a solution to those late
            nights. No more missing meals!
          </p>
        </div>
        <div>
          <span>Why Deliver Using Bikes?</span>
          <p>
            Bikes can go where cars cannot. In busy downtown areas or student
            housing areas it can be really difficult for traditional delivery
            drivers to get to their destinations. Traffic can cause huge
            problems for everyone involved. Food might get cold, delivery times
            get longer, people get hangry. With bikes, you can avoid most major
            traffic, and go through shortcuts on campuses. It’s a win-win
            situation.
          </p>
        </div>
        <div>
          <span>Our Values </span>
          <p>
            <strong>Sustainability:</strong> At Dormdash, all deliveries are
            made by bicycle. Bicycles are an excellent way to provide quick,
            efficient, and eco-friendly delivery service. Deliveries account for
            a major portion of Canada’s greenhouse gas emissions, and we want to
            do our part to reduce it, while providing an excellent food delivery
            service.
          </p>
          <p>
            <strong>Empathy:</strong> We know how big of a struggle it can be to
            have food delivered to college campuses. That is why our mission at
            Dormdash is to bridge that gap. We believe in feeding communities by
            connecting local restaurants with the students in their area, while
            providing quality customer service.
          </p>
          <p>
            <strong>Transparency:</strong> At Dormdash we believe that every
            student, restaurant owner, and deliverer has a right to know where
            their money is going, and the quality of service we provide. That is
            why we value transparency in every step of the process so that you
            can feel confident in us.
          </p>
        </div>
      </Container>
    </BaseLayout>
  );
};

export default AboutUs;
