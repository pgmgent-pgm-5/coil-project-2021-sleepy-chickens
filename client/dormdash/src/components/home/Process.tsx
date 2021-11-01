import styled from 'styled-components';
import locationImg from '../../assets/process/chooseMeal.svg';
import process from '../../data/process.json';
import { ProcessItem } from './ProcessItem';

const Container = styled.div`
  margin-top: 1.5rem;

  h2 {
    text-align: center;
  }
`;

const ProcessList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.width.small}) {
    justify-content: space-between;
  }
`;

const Process = () => {
  return (
    <Container>
      <h2>How it works</h2>
      
      <ProcessList> 
        {process.map((p, index) => {
          return (
            <ProcessItem key={index} id={p.id} name={p.name} title={p.title} picture={p.picture}  text={p.text}  />
          )
        })}
      </ProcessList>
      
      
    </Container>
  )
}

export default Process
