import styled from 'styled-components'

const Navigation = styled.nav`
  margin-bottom: 3rem;

  @media (min-width: ${props => props.theme.width.small}) {
    width: 48%;
  }

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 23%;
  }
`;

const FooterNavigation = () => {
  return (
    <Navigation>
      <ul>
        <li>Terms & Conditions</li>
        <li>Cookie Policy</li>
        <li>Disclaimer</li>
        <li>Privacy policy</li>
      </ul>
      
    </Navigation>
  )
}

export default FooterNavigation
