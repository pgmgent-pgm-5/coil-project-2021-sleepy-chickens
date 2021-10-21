import styled from 'styled-components';

interface ProcessItemProps {
  id: number
  name: string
  title: string
  picture: string
  text: string
}

export const ProcessItem = (p: ProcessItemProps) => {
  return (
    <li key={p.id}>
      <img src={p.picture} alt={p.name} />
      <h3>{p.title}</h3>
      <p>{p.text}</p>
    </li>
  )
}
