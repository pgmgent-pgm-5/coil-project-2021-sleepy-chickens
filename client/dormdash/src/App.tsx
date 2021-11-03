import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Routes from "./routes";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import { HomePage, SignIn, SignUp } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={Routes.LANDING} component={HomePage} />
          <Route exact path={Routes.SIGN_IN} component={SignIn} />
          <Route exact path={Routes.SIGN_UP} component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
