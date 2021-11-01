import styled from 'styled-components';
import { ProcessItemProps } from '../../interfaces/interfaces';

const Item = styled.li`

  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.width.small}) {
    width: 30%;

  img {
    width: 100%;
    height: 16rem;
  }
  h3 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
  }
}
`;

export const ProcessItem = ({id, name, picture, title, text }:ProcessItemProps) => {
  return (
    <Item key={id}>
      <img src={picture} alt={name} />
      <h3>{title}</h3>
      <p>{text}</p>
    </Item>
  )
}
