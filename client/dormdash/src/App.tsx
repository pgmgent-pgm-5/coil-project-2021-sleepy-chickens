import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Routes from './routes';
import { HomePage} from './pages';

function App() {
  return (
    <>
      <Router basename={'./dormdash'}>
        <Switch>
          <Route exact path={Routes.LANDING} component={ HomePage }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
