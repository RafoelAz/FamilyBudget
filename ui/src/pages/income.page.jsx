import './income.page.css';
import { Header } from '../components/header';
import { Nav } from '../components/nav';
import { Main } from '../components/main';

export function IncomePage() {
  return (
    <body>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Nav />
          <Main />
        </div>
      </div>
    </body>
  );
}
