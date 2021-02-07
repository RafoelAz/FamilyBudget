import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { LandingPage } from './pages/landing.page';
import { DashboardPage } from './pages/dashboard.page';
import { IncomePage } from './pages/income.page';
import { CashExpensesPage } from './pages/cash-expenses.page';
import { ObjectivesPage } from './pages/objectives.page';
import { StatisticsPage } from './pages/statistics.page';
import { PiggyBankPage } from './pages/piggy-bank.page';
import { RemindersPage } from './pages/reminders.page';
import { SettingsPage } from './pages/settings.page';
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
            <ObjectivesPage />
          </Route>
          <Route path="/statistics">
            <StatisticsPage />
          </Route>
          <Route path="/piggy-bank">
            <PiggyBankPage />
          </Route>
          <Route path="/reminders">
            <RemindersPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
