import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../../data/MockDataChart";

const Container = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.width.small}) {
    display: block;
    margin-top: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  padding: 1rem;
  box-shadow: ${(props) => props.theme.colors.tertiaryAccentColor} 0px 2px 8px
    0px;
`;

interface Props {}

const Rechart = (props: Props) => {
  return (
    <Container>
      <h2>Statistics</h2>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#313244" />
          <YAxis stroke="#313244" />
          <Line type="monotone" dataKey="orders" stroke="#FF3131" />
          <Tooltip />
          <CartesianGrid stroke="#C5DCEF" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Rechart;
