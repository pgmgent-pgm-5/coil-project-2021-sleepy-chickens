import { MdFastfood, MdOutlineAttachMoney } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 3rem;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${(props) => props.theme.colors.tertiaryAccentColor} 0px 2px 8px
    0px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    width: 20rem;
    min-width: 15rem;
    width: 30%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.primaryAccentColor};
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

interface Props {}

const SalesRevenue = (props: Props) => {
  return (
    <Container>
      <Item>
        <h3>Total orders</h3>
        <Wrapper>
          <Icon>
            <MdFastfood />
          </Icon>
          <span>400k</span>
        </Wrapper>
      </Item>
      <Item>
        <h3>Total dishes</h3>
        <Wrapper>
          <Icon>
            <MdFastfood />
          </Icon>
          <span>14</span>
        </Wrapper>
      </Item>
      <Item>
        <h3>Revenue</h3>
        <Wrapper>
          <Icon>
            <MdOutlineAttachMoney />
          </Icon>
          <span>400k</span>
        </Wrapper>
      </Item>
    </Container>
  );
};

export default SalesRevenue;
