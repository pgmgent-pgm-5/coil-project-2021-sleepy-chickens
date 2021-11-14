import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { rows } from "../../../data/MockDataRestaurantDishes";
import { Link } from "react-router-dom";
import * as Routes from "../../../routes";

const Container = styled.div`
  margin-top: 2rem;
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

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 100 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "description", headerName: "Description", width: 700 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <Actions>
          <Link to={Routes.DISH_EDITPAGE.replace(":id", params.row.id)}>
            <Button>
              <BiEdit />
            </Button>
          </Link>
          <Button>
            <RiDeleteBin6Line />
          </Button>
        </Actions>
      );
    },
  },
];

interface Props {}

const RestaurantDishes = (props: Props) => {
  return (
    <Container>
      <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
    </Container>
  );
};

export default RestaurantDishes;
