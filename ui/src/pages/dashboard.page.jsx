import './dashboard.page.css';
import { Header } from '../components/header';
import { Nav } from '../components/nav';
import { Main } from '../components/main';

export function DashboardPage() {
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Nav />
          <Main />
        </div>
      </div>
    </>
  );
}
