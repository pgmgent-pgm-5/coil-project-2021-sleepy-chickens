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

const Image = styled.div`
  display: none;

  border-radius: ${(props) => props.theme.borderRadius.small};
  display: block;
  width: 100%;
  min-width: 7rem;
  max-width: 12rem;
  height: 7rem;
  background-image: url("https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80");
  background-size: cover;
  background-position: center;
`;

interface Props {}

const DetailDishCard = (props: Props) => {
  return (
    <Container>
      <Link to="">
        <Content>
          <h3>Title</h3>
          <MenuText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </MenuText>
          <Price>
            € <span>15.50</span>
          </Price>
        </Content>
        <Image>
          {/* <img
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            alt=""
          /> */}
        </Image>
      </Link>
    </Container>
  );
};

export default DetailDishCard;
