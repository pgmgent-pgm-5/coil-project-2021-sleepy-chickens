import React from "react";
import styled from "styled-components";

const Container = styled.li`
  border: 1px solid ${(props) => props.theme.colors.tertiaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: 0.5rem;
  margin-right: 1rem;
  overflow: hidden;
  width: 20rem;
  min-width: 20rem;
`;

const RatingDate = styled.div`
  span {
    color: ${(props) => props.theme.colors.primaryAccentColor};
    margin-right: 0.5rem;
  }
`;

interface Props {}

const DetailReviewCard = (props: Props) => {
  return (
    <Container>
      <h3>Name</h3>
      <RatingDate>
        <span>4/5</span>
        <span>-</span>
        <span>10/10/2021</span>
      </RatingDate>
      <div>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.{" "}
        </p>
      </div>
    </Container>
  );
};

export default DetailReviewCard;
