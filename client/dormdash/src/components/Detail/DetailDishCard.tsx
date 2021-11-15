import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.li`
  border: 1px solid ${(props) => props.theme.colors.tertiaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.small};
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: calc(50% - 1rem);
  }

  a {
    display: flex;
    height: 7rem;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;

  h3 {
    color: ${(props) => props.theme.colors.black};
  }

  p {
    margin: 0;
  }
`;

const MenuText = styled.p`
  color: ${(props) => props.theme.colors.secondaryAccentColor};
  font-size: ${(props) => props.theme.fontSizes.small};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Price = styled.p`
  color: ${(props) => props.theme.colors.primaryAccentColor};

  display: flex;
  align-items: center;

  span {
    font-size: ${(props) => props.theme.fontSizes.normal};
    margin-left: 0.5rem;
  }
`;

const Image = styled.div<ImageProps>`
  display: none;

  border-radius: ${(props) => props.theme.borderRadius.small};
  display: block;
  width: 100%;
  min-width: 7rem;
  max-width: 12rem;
  height: 7rem;
  background-image: url("${(props) => props.picture}");
  background-size: cover;
  background-position: center;
`;

interface Props {
  name: string;
  price: number;
  description: string;
  picture: string;
}

interface ImageProps {
  picture: string;
}

const DetailDishCard = ({ name, picture, price, description }: Props) => {
  return (
    <Container>
      <Link to="">
        <Content>
          <h3>{name}</h3>
          <MenuText>{description}</MenuText>
          <Price>
            € <span>{price}</span>
          </Price>
        </Content>
        <Image picture={picture}></Image>
      </Link>
    </Container>
  );
};

export default DetailDishCard;
