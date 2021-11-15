import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Routes from "./routes";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "./context/AuthenticationContext";

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
  Profile,
  RestaurantDashboardHome,
  RestaurantDashboardDishes,
  RestaurantDashboardProfile,
  RestaurantDishEditPage,
  RestaurantDishAddPage,
  RemoveDish,
} from "./pages";
import RestaurantOverview from "./pages/RestaurantOverview";
import ScrollToTop from "./components/ScrollToTop ";
import { Helmet } from "react-helmet";

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Helmet>
            <title>Dormdash</title>
            <meta
              name="description"
              content="We are Dormdash, a food delivery service that connects students with restaurants in their city. Dormdash started as a side project for some hungry students - we always studied late into the night and had no food to eat. We created Dormdash as a solution to those late nights. No more missing meals!"
            />
            <meta name="keywords" content="delivery, food, students meals" />
          </Helmet>
          <AnimatePresence exitBeforeEnter>
            <ScrollToTop />
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
              <Route
                exact
                path={Routes.BECOME_PARTNER}
                component={BecomePartner}
              />
              <Route exact path={Routes.PROFILE} component={Profile} />
              <Route exact path={Routes.ABOUT_US} component={AboutUs} />
              <Route exact path={Routes.FAQ} component={FAQ} />
              <Route exact path={Routes.DETAIL_PAGE} component={DetailPage} />
              <Route exact path={Routes.CHECKOUT} component={Checkout} />
              <Route
                exact
                path={Routes.DASHBOARD_RESTAURANT_HOME}
                component={RestaurantDashboardHome}
              />
              <Route
                exact
                path={Routes.DISHES}
                component={RestaurantDashboardDishes}
              />
              <Route
                exact
                path={Routes.PROFILE_RESTAURANT}
                component={RestaurantDashboardProfile}
              />
              <Route
                exact
                path={Routes.DISH_EDITPAGE}
                component={RestaurantDishEditPage}
              />
              <Route
                exact
                path={Routes.DISH_ADD}
                component={RestaurantDishAddPage}
              />
              <Route
                exact
                path={Routes.DISH_REMOVE}
                component={RemoveDish}
              />
            </Switch>
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
