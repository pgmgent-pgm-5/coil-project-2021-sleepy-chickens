import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 24rem;
  box-shadow: ${(props) => props.theme.colors.tertiaryAccentColor} 0px 2px 8px
    0px;
`;

const columns: GridColDef[] = [
  { field: "id", headerName: "Ordernumber", width: 150 },
  { field: "customer", headerName: "Customer", width: 200 },
  { field: "address", headerName: "Address", width: 750 },
];

const rows = [
  {
    id: 1,
    customer: "Jon Sandman",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 2,
    customer: "Cersei Deboever",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 3,
    customer: "Jaime Hart",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 4,
    customer: "Arya de smet",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 5,
    customer: "Daenerys waeenrarenaam",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 6,
    customer: "Daenerys nogeens",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 7,
    customer: "Ferrara lamborghina",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 8,
    customer: "Rossini italian",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
  {
    id: 9,
    customer: "Harvey specter",
    address: "1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia",
  },
];

interface Props {}

const OrderDetails = (props: Props) => {
  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default OrderDetails;
