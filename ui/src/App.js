import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { LandingPage } from './pages/landing.page';
import { DashboardPage } from './pages/dashboard.page';
import { IncomePage } from './pages/income.page';
import { CashExpensesPage } from './pages/cash-expenses.page';
import { Objectives } from './pages/objectives.page';
import { Statistics } from './pages/statistics.page';
import { PiggyBank } from './pages/piggybank.page';
import { Reminders } from './pages/reminders.page';
import { Settings } from './pages/setings.page';
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
          <Route path="/objectives">
            <Objectives />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/piggy-bank">
            <PiggyBank />
          </Route>
          <Route path="/reminders">
            <Reminders />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
