import React from "react";
import Devider from "./Devider";
import RestaurantFilterCategories from "./RestaurantFilterCategories";

interface Props {}

const RestaurantFilter = (props: Props) => {
  return (
    <div>
      <h1>
        <span>100</span>
        Restaurants
      </h1>
      <Devider />
      <RestaurantFilterCategories />
      <Devider />
    </div>
  );
};

export default RestaurantFilter;
