import './header.css';
import logo from './logo.png';
import coin from './coin.png';
import language from './language-eng.png';

function Header() {
  return (
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="flexbox-container">
        <div className="flexbox-container-start">
          <div className="container-logo">
            <img className="container-logo-img" src={logo} alt={'logo'} />
          </div>
          <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
            <p className="logo-name"> Family Budget</p>
          </a>
        </div>
        <div className="flexbox-container-center">
          <div className="container-coin">
            <img className="container-coin-img" src={coin} alt={'coin'} />
          </div>
          <div className="container-data">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
              <p className="data"> 16 FEB 2021</p>
            </a>
          </div>
        </div>

        <div className="flexbox-container-end">
          <div className="container-language">
            <img
              className="container-language-img"
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
