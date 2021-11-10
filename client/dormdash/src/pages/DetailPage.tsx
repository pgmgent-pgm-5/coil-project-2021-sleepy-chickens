import React from "react";
import DetailDishCard from "../components/Detail/DetailDishCard";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import Devider from "../components/layout/Partial/Devider";
import DetailReviewCard from "../components/Detail/DetailReviewCard";
import AddReviewButton from "../components/Detail/AddReviewButton";
import DetailHero from "../components/Detail/DetailHero";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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

  return (
    <BaseLayout>
      <DetailHero />

      <DetailReviewContainer>
        <FlexContainerTitle>
          <h2>Reviews</h2>
          <AddReviewButton />
          <p>4.1 Rating</p>
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
            <SwiperSlide>
              <DetailReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailReviewCard />
            </SwiperSlide>
          </Swiper>
        </FlexContainer>
      </DetailReviewContainer>

      <Devider />

      <DetailDishCardContainer>
        <h2>Menu</h2>
        <DetailDishCard />
        <DetailDishCard />
        <DetailDishCard />
        <DetailDishCard />
        <DetailDishCard />
        <DetailDishCard />
        <DetailDishCard />
        <DetailDishCard />
      </DetailDishCardContainer>
    </BaseLayout>
  );
};

export default DetailPage;
