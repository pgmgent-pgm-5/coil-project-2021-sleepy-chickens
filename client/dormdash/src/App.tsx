import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Routes from "./routes";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import {
  HomePage,
  SignIn,
  SignUp,
  BecomeDriver,
  BecomePartner,
  AboutUs,
  FAQ,
  DetailPage,
  Checkout,
} from "./pages";
import RestaurantOverview from "./pages/RestaurantOverview";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={Routes.LANDING} component={HomePage} />
          <Route
            exact
            path={Routes.RESTAURANTS_OVERVIEW}
            component={RestaurantOverview}
          />
          <Route exact path={Routes.SIGN_IN} component={SignIn} />
          <Route exact path={Routes.SIGN_UP} component={SignUp} />
          <Route exact path={Routes.BECOME_DRIVER} component={BecomeDriver} />
          <Route exact path={Routes.BECOME_PARTNER} component={BecomePartner} />
          <Route exact path={Routes.ABOUT_US} component={AboutUs} />
          <Route exact path={Routes.FAQ} component={FAQ} />
          <Route exact path={Routes.DETAIL_PAGE} component={DetailPage} />
          <Route exact path={Routes.CHECKOUT} component={Checkout} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
