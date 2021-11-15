import React, { useEffect, useState } from "react";
import DetailDishCard from "../components/Detail/DetailDishCard";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import Devider from "../components/layout/Partial/Devider";
import DetailReviewCard from "../components/Detail/DetailReviewCard";
import AddReviewButton from "../components/Detail/AddReviewButton";
import DetailHero from "../components/Detail/DetailHero";
import Modal from "../components/Detail/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { RESTAURANTS_DETAIL } from "../graphql/restaurants";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Dish, Review } from "../interfaces/interfaces";
import { Helmet } from "react-helmet";

const DetailReviewContainer = styled.ul`
  @media (min-width: ${(props) => props.theme.width.small}) {
    margin-top: -3rem;
  }

  margin-bottom: 3rem;
  margin-top: 2rem;

  h2 {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const FlexContainerTitle = styled.div`
  display: flex;
  aling-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  h2 {
    width: 50%;
    margin-bottom: 0rem;
  }

  p {
    margin-top: 1rem;
    width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const DetailDishCardContainer = styled.ul`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;

  h2 {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

interface Props {}

const DetailPage = (props: Props) => {
  SwiperCore.use([Navigation]);
  let { id } = useParams<{ id: string }>();
  console.log(id);

  const { error, loading, data, refetch } = useQuery(RESTAURANTS_DETAIL, {
    variables: { id: Number(id) },
  });

  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
    setModalId(e.currentTarget.id);
  };

  let averageRating: number = 0;
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data) {
    let numberOfReviews: number = 0;
    let totalRating: number = 0;

    numberOfReviews = data.getRestaurantById.reviews.length;

    data.getRestaurantById.reviews.map((review: Review) => {
      totalRating += review.rating;
    });

    if (numberOfReviews > 0) {
      console.log((totalRating / numberOfReviews).toFixed(1));
      averageRating = Number((totalRating / numberOfReviews).toFixed(1));
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else if (!open) {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  data && console.log("string data", data.getRestaurantById.city);

  if (loading) return <div>Loading ...</div>;

  return (
    <BaseLayout>
      {data && (
        <>
          <Helmet>
            <title>Dormdash | {data.getRestaurantById.name}</title>
            <meta
              name="description"
              content={`Shop your favorite dishes from ${data.getRestaurantById.name}`}
            />
          </Helmet>

          <Modal
            open={open}
            onClick={handleClick}
            id={modalId}
            name={data.getRestaurantById.name}
            street={data.getRestaurantById.street}
            streetnumber={data.getRestaurantById.streetnumber}
            postalcode={data.getRestaurantById.postalcode}
            city={data.getRestaurantById.city}
            province={data.getRestaurantById.province}
          />

          <DetailHero
            onClick={handleClick}
            open={open}
            category={data.getRestaurantById.category.name}
            restaurantName={data.getRestaurantById.name}
            deliveryTime={data.getRestaurantById.deliveryTime}
            logo={data.getRestaurantById.logo}
            picture={data.getRestaurantById.picture}
          />

          <DetailReviewContainer>
            <FlexContainerTitle>
              <h2>Reviews</h2>
              <AddReviewButton onClick={handleClick} open={open} />
              <p>{averageRating} Rating</p>
            </FlexContainerTitle>

            <FlexContainer>
              <Swiper
                navigation={true}
                breakpoints={{
                  320: {
                    width: 320,
                    slidesPerView: 1,
                  },
                }}
              >
                {data.getRestaurantById.reviews.map(
                  (review: Review, index: number) => (
                    <SwiperSlide>
                      <DetailReviewCard
                        key={index}
                        reviewTitle={review.title}
                        description={review.description}
                        rating={review.rating}
                        date={review.date}
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </FlexContainer>
          </DetailReviewContainer>

          <Devider />

          <DetailDishCardContainer>
            <h2>Menu</h2>
            {data.getRestaurantById.dishes.map((dish: Dish, index: number) => (
              <DetailDishCard
                key={index}
                name={dish.name}
                price={dish.price}
                description={dish.description}
                picture={dish.picture}
              />
            ))}
          </DetailDishCardContainer>
        </>
      )}
    </BaseLayout>
  );
};

export default DetailPage;
