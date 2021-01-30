import './header.css';
import logo from './logo.png';
import coin from './coin.png';
import language from './language-eng.png';

function Header() {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="navbar-container">
        <div className="container__start">
          <div className="container__logo">
            <img className="container__logo-img" src={logo} alt={'logo'} />
          </div>
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
            <p className="container__logo-text"> Family Budget</p>
          </a>
        </div>
        <div className="container__center">
          <div className="container__coin">
            <img className="container__coin-img" src={coin} alt={'coin'} />
          </div>
          <div className="container__data">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
              <p className="data"> 16 FEB 2021</p>
            </a>
          </div>
        </div>

        <div className="container__end">
          <div className="container__language">
            <img
              className="container__language-img"
              src={language}
              alt={'language'}
            />
          </div>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#/">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export { Header };
