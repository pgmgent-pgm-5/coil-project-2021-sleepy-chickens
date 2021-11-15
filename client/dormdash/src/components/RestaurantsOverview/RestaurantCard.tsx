import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RestaurantSummary } from "../../interfaces/interfaces";
import * as Routes from "../../routes";

const Container = styled.li`
  width: 100%;
  min-width: 10rem;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.width.small}) {
    flex-grow: 1;
    flex-basis: calc(50% - 2rem);
    margin: 0 1rem;
    margin-bottom: 2rem;

    &:last-child {
      max-width: calc(50% - 2rem);
    }
  }

  a {
    color: ${(props) => props.theme.colors.black};
  }
`;

const Image = styled.div<Picture>`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.normal};
  min-height: 12rem;
  height: 80%;
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center center;
`;

const Rating = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.secondaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.colors.secondaryAccentColor};
  }
`;

const Content = styled.div`
  padding: 0 0.5rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      display: block;
    }
  }
`;

interface Picture {
  picture: string;
}

const RestaurantCard = ({
  id,
  name,
  picture,
  deliveryTime,
  category,
  reviews,
}: RestaurantSummary) => {
  const numberOfReviews = reviews.length;
  let totalRating = 0;
  reviews.map((review, index) => {
    totalRating += review.rating;
  });

  let averageRating = null;
  if (numberOfReviews === 0) {
    averageRating = null;
  } else {
    averageRating = (totalRating / numberOfReviews).toFixed(1);
  }

  return (
    <Container key={id}>
      <Link to={Routes.DETAIL_PAGE.replace(":id", String(id))}>
        <Rating>
          <span>{averageRating}</span>
        </Rating>

        <Image picture={picture}></Image>

        <Content>
          <h3>{name}</h3>
          <div>
            <span>{category.name}</span>
            <span>{deliveryTime} min</span>
          </div>
        </Content>
      </Link>
    </Container>
  );
};

export default RestaurantCard;
