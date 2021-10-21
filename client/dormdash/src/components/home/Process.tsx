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

  li {
    margin-bottom: 2rem;

    @media (min-width: ${props => props.theme.width.small}) {
      width: 30%;
    }

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

interface Process {
  id: number
  name: string
  title: string
  picture: string
  text: string
}

const Process = () => {
  return (
    <Container>
      <h2>How it works</h2>
      
      <ProcessList> 
        {process.map((p, index) => {
          return (
            // <li key={index}>
            //     <img src={p.picture} alt={p.name} />
            //     <h3>{p.title}</h3>
            //     <p>{p.text}</p>
            // </li>
            <ProcessItem key={index} p={p} />
          )
        })}
      </ProcessList>
      
      
    </Container>
  )
}

export default Process
