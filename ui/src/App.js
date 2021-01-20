import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { LandingPage } from './pages/landing.page';
import { DashboardPage } from './pages/dashboard.page';
import { IncomePage } from './pages/income.page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/income">
          <IncomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
