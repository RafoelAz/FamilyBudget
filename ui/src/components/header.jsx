import './header.css';
import logo from './logo.png';
import language from './language-eng.png';
import coin from './coin.png';
import { NavLink } from 'react-router-dom';

const currDate = new Date().toLocaleDateString();

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Family Budget Logo" className="header__logo" />
            Family Budget
          </a>

          <div className="header__center">
            <NavLink to="/piggy-bank">
              <img src={coin} alt="user cash" className="header__coin" />
              <span className="coin__value">2000$</span>
            </NavLink>
            <NavLink to="/reminders" className="header__date">
              {currDate}
            </NavLink>
          </div>

          <div className="header__aside">
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
