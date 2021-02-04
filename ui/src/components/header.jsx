import './header.css';
import logo from './logo.png';
import language from './language-eng.png';
import coin from './coin.png';

const currDate = new Date().toLocaleDateString();

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="header__brand">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Family Budget Logo" className="header__logo" />
              Family Budget:
            </a>
            <h5 className="header__user">Michman</h5>
          </div>
          <div className="header__coin">
            <img src={coin} alt="" className="header__coin-img" />
            <h5 className="header__coin-sum">2000</h5>
            <a href="/" className="header__currency">
              UAH
            </a>
          </div>
          <div className="header__aside">
            <a href="/reminders" className="header__date">
              {currDate}
            </a>
            <a href="/">
              <img src={language} alt="Change language" className="header__flag" />
            </a>
            <button className="btn btn-link text-white header__sign-in-btn">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export { Header };
