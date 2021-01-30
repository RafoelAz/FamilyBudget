import './income.page.css';
import { Header } from '../components/header';
import { Nav } from '../components/nav';
import { Main } from '../components/main';

export function IncomePage() {
  return (
    <div className="income-page">
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Nav />
          <Main />
        </div>
      </div>
    </div>
  );
}
