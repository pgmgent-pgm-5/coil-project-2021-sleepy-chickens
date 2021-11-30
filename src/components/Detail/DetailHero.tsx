import React from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Container = styled.div<PictureProps>`
  margin-top: 3rem;
  background-image: url("./assets/${(props) => props.picture}");
  height: 15rem;
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => props.theme.borderRadius.normal};
  position: relative;

  @media (min-width: ${(props) => props.theme.width.small}) {
    height: 25rem;
  }
`;

const BgContainer = styled.div`
  @media (min-width: ${(props) => props.theme.width.small}) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 18;
    position: absolute;
    border-radius: ${(props) => props.theme.borderRadius.normal};
    height: 100%;
    width: 100%;
  }
`;

const InfoButton = styled.button`
  z-index: 25;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 0.25rem;
  border-radius: ${(props) => props.theme.borderRadius.normal};
  cursor: pointer;


  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.secondaryAccentColor} 
    `;

const RestaurantContentContainer = styled.div`
  z-index: 21;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    transform: translateY(-5.5rem);
    margin-left: 1rem;
  }
`;

const Image = styled.div<LogoProps>`
  margin-right: 1rem;
  background-image: url("./assets/${(props) => props.logo}");
  background-size: cover;
  background-position: center;
  width: 4rem;
  height: 4rem;
  border-radius: ${(props) => props.theme.borderRadius.circle};
`;

const RestaurantContent = styled.div`
  @media (min-width: ${(props) => props.theme.width.small}) {
    color: ${(props) => props.theme.colors.white};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.normal};
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

interface Props {
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  category: string;
  restaurantName: string;
  deliveryTime: string;
  logo: string;
  picture: string;
}

interface LogoProps {
  logo: string;
}

interface PictureProps {
  picture: string;
}

const DetailHero = ({
  open,
  onClick,
  category,
  restaurantName,
  deliveryTime,
  logo,
  picture,
}: Props) => {
  return (
    <>
      <Container picture={picture}>
        <BgContainer></BgContainer>
        <InfoButton onClick={onClick} id="info">
          <span>
            <AiOutlineInfoCircle />
          </span>
        </InfoButton>
      </Container>
      <RestaurantContentContainer>
        <Image logo={logo}></Image>
        <RestaurantContent>
          <h1>{restaurantName}</h1>
          <div>
            <span>{category}</span>
            <span>{deliveryTime} min</span>
          </div>
        </RestaurantContent>
      </RestaurantContentContainer>
    </>
  );
};

export default DetailHero;
