import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins';
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.emedium};
    line-height: 1.2;

    @media (min-width: ${props => props.theme.width.medium}) {
      font-size: ${props => props.theme.fontSizes.large};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.medium};
    line-height: 1.2;
    color: ${props => props.theme.colors.primaryAccentColor};

    @media (min-width: ${props => props.theme.width.medium}) {
      font-size: ${props => props.theme.fontSizes.emedium};
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem
  }

  span {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 1.5;
  }

  p {
    font-size: ${props => props.theme.fontSizes.normal};
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  input, textarea {
    font-family: 'Poppins';
    font-size: ${props => props.theme.fontSizes.small};
    padding-bottom 1rem;
  }

  button {
    font-family: 'Poppins';
    font-size: ${props => props.theme.fontSizes.normal};
  }
`;
 
export default GlobalStyle;