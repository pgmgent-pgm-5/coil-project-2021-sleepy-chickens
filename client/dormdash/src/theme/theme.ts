import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    black: "#000",
    white: "#FFF",
    primaryAccentColor: "#FF3131",
    secondaryAccentColor: "#313244",
    tertiaryAccentColor: "#C5DCEF",
  },
  fontSizes: {
    small: "0.8rem",
    normal: "1rem",
    medium: "1.5rem",
    emedium: "1.8rem",
    large: "2.5rem",
    elarge: "3.5rem",
    slarge: "5rem",
    btn: "1.2rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700
  },
  borderRadius: {
    small: "0.1875rem",
    circle: "50%",
  },
  width: {
    small: "576px",
    medium: "912px",
    large: "1280px",
    elarge: "1600px",
  },
  transition: {
    normal: "all 0.2s ease-in-out",
    medium: "all 0.5s ease-in-out"
  }
};

export default defaultTheme ;
 