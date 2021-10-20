import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Routes from './routes';
import { HomePage} from './pages';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename={'./dormdash'}>
        <Switch>
          <Route exact path={Routes.LANDING} component={ HomePage }/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
