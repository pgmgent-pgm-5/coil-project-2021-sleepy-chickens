import React from "react";
import styled from "styled-components";

const Container = styled.li`
  border: 1px solid ${(props) => props.theme.colors.tertiaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: 0.5rem;
  margin-right: 1rem;
  overflow: hidden;
  width: calc(20rem - 3rem);
  min-width: calc(20rem - 3rem);
  height: 20rem;
  max-height: 20rem;
  overflow: hidden;

  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 1rem;
  }
`;

const RatingDate = styled.div`
  span {
    color: ${(props) => props.theme.colors.primaryAccentColor};
    margin-right: 0.5rem;
  }
`;

interface Props {
  date: Date;
  reviewTitle: string;
  description: string;
  rating: number;
}

const DetailReviewCard = ({
  reviewTitle,
  description,
  date,
  rating,
}: Props) => {
  const d = new Date(date);
  const dateString = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  return (
    <Container>
      <h3>{reviewTitle}</h3>
      <RatingDate>
        <span>{rating}/5</span>
        <span>-</span>
        <span>{dateString}</span>
      </RatingDate>
      <div>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default DetailReviewCard;
