import './header.css';
import logo from './logo.png';
import coin from './coin.png';
import language from './language-eng.png';

function Header() {
  return (
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="navbar-container">
        <div className="container__start">
          <div className="container__logo">
            <img className="container__logoImg" src={logo} alt={'logo'} />
          </div>
          <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
            <p className="container__logoText"> Family Budget</p>
          </a>
        </div>
        <div className="container__center">
          <div className="container__coin">
            <img className="container__coinImg" src={coin} alt={'coin'} />
          </div>
          <div className="container__data">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
              <p className="data"> 16 FEB 2021</p>
            </a>
          </div>
        </div>

        <div className="container__end">
          <div className="container__language">
            <img
              className="container__languageImg"
              src={language}
              alt={'language'}
            />
          </div>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#/">
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
