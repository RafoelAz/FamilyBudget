import './income.page.css';
import { Header } from '../components/header';
import { Nav } from '../components/nav';

export function IncomePage() {
  return (
    <body>
      <Header />
      <Nav />

      <div className="container-main">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          blanditiis consequuntur in eligendi quod, quas sequi vero optio odit fugit
          cum reiciendis nemo soluta, ratione sint suscipit odio dignissimos modi!
        </p>
      </div>
    </body>
  );
}
