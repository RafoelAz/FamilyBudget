import './dashboard.page.css';
import { Header } from '../components/header';
import { Nav } from '../components/nav';

export function DashboardPage() {
  return (
    <body>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Nav />
        </div>
      </div>
    </body>
  );
}
