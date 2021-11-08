import React from "react";
import DetailCard from "../components/Detail/DetailCard";
import { BaseLayout } from "../layouts";
import styled from "styled-components";

const DetailCardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

interface Props {}

const DetailPage = (props: Props) => {
  return (
    <BaseLayout>
      <DetailCardContainer>
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </DetailCardContainer>
    </BaseLayout>
  );
};

export default DetailPage;
