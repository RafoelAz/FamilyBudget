import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { LandingPage } from './pages/landing.page';
import { DashboardPage } from './pages/dashboard.page';
import { IncomePage } from './pages/income.page';
import { CashExpensesPage } from './pages/cash-expenses.page';
import { Layout } from './components/layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Layout>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/cash-expenses">
            <CashExpensesPage />
          </Route>
          <Route path="/income">
            <IncomePage />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
