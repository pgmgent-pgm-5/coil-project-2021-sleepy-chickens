import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { rows } from "../../../data/MockDataRestaurantDishes";
import { Link, useParams } from "react-router-dom";
import * as Routes from "../../../routes";
import { useQuery } from "@apollo/client";
import { RESTAURANT_DISHES } from "../../../graphql/restaurants";
import { useState } from "react";

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 31rem;
  box-shadow: ${(props) => props.theme.colors.tertiaryAccentColor} 0px 2px 8px
    0px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primaryAccentColor};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  transition: ${(props) => props.theme.transition.normal};

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiaryAccentColor};
  }
`;

const PriceField = styled.span`
  overflow-x: hidden;
  width: 2rem;
`;

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 100 },
  { field: "name", headerName: "Title", width: 200 },
  { 
    field: "price",
    headerName: "Price", 
    width: 150,
    renderCell: (params )=> {
      return (
        <PriceField>
           {params.row.price}
        </PriceField>
      )
    }},
  { field: "description", headerName: "Description", width: 500 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {

      return (
        <Actions>
          <Link to={Routes.DISH_EDITPAGE.replace(":dishId", params.row.id)}>
            <Button>
              <BiEdit />
            </Button>
          </Link>
          <Link to={Routes.DISH_REMOVE.replace(":dishId", params.row.id)}>
            <Button type="submit">
                <RiDeleteBin6Line />
              </Button>
          </Link>
            
        </Actions>
      );
    },
  },
];

interface Props {}

const RestaurantDishes = (props: Props) => {
  let { restaurantId } = useParams<{ restaurantId: string }>();
  console.log(restaurantId);
  const { error, loading, data, refetch } = useQuery(
    RESTAURANT_DISHES,
    {
      variables: { id: Number(restaurantId) }
    }
  );


  if (data) {
    console.log(data.getRestaurantById.dishes);
  }

  return (
     
      <Container>
        { data && (
          <DataGrid rows={data.getRestaurantById.dishes} columns={columns} pageSize={7} checkboxSelection />
        )}
      </Container>

  );
};

export default RestaurantDishes;
