import { useQuery } from "@apollo/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { ALL_ORDERS_BY_RESTAURANT_ID } from "../../../graphql/orders";

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 25rem;
  box-shadow: ${(props) => props.theme.colors.tertiaryAccentColor} 0px 2px 8px
    0px;
`;

const TableStatusContainer = styled.div`
  display: flex;
`;
const Preparing = styled.span`
  border-radius: ${(props) => props.theme.borderRadius.circle};
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.tertiaryAccentColor};
`;
const Delivering = styled.span`
  border-radius: ${(props) => props.theme.borderRadius.circle};
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.secondaryAccentColor};
`;
const Completed = styled.span`
  border-radius: ${(props) => props.theme.borderRadius.circle};
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
  background-color: #18a558;
`;

const columns: GridColDef[] = [
  { field: "orderNumber", headerName: "Ordernumber", width: 150 },
  { field: "customer", 
  headerName: "Customer", 
  width: 200,
  renderCell: (params) => {
    return (
      <p>{`${params.row.user.firstName} ${params.row.user.lastName}`}</p>
    )
  }
 },
  { field: "address", 
  headerName: "Address", 
  width: 600,
  renderCell: (params) => {
    return (
      <p>{`${params.row.streetnumber} ${params.row.street}, ${params.row.postalcode} ${params.row.city}, ${params.row.province}`}</p>
    )
  }
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      console.log(params.row.orderState);
      return (
        <div>
          {params.row.orderState === "Preparing" ? (
            <TableStatusContainer>
              <Preparing />
              <span>Preparing</span>
            </TableStatusContainer>
          ) : params.row.orderState === "Delivering" ? (
            <TableStatusContainer>
              <Delivering />
              <span>Delivering</span>
            </TableStatusContainer>
          ) : (
            <TableStatusContainer>
              <Completed />
              <span>Completed</span>
            </TableStatusContainer>
          )}
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    customer: "Jon Sandman",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Preparing",
  },
  {
    id: 2,
    customer: "Cersei Deboever",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Delivering",
  },
  {
    id: 3,
    customer: "Jaime Hart",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Completed",
  },
  {
    id: 4,
    customer: "Arya de smet",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Completed",
  },
  {
    id: 5,
    customer: "Daenerys waeenrarenaam",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Completed",
  },
  {
    id: 6,
    customer: "Daenerys nogeens",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Completed",
  },
  {
    id: 7,
    customer: "Ferrara lamborghina",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Completed",
  },
  {
    id: 8,
    customer: "Rossini italian",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Completed",
  },
  {
    id: 9,
    customer: "Harvey specter",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
    status: "Completed",
  },
];

interface Props {
  restaurantId: number
}

const OrderDetails = ({restaurantId}: Props) => {
  const { error, loading, data, refetch } = useQuery(
    ALL_ORDERS_BY_RESTAURANT_ID,
    {
      variables: { restaurantId: Number(restaurantId) }
    }
  );

  if (data) {
    console.log(data.findAllOrdersByRestaurantId);
    console.log(data.findAllOrdersByRestaurantId);
  }
  
  return (
    <Container>
      {
        data && (

          <DataGrid
            rows={data.findAllOrdersByRestaurantId}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        )
      }
    </Container>
  );
};

export default OrderDetails;
