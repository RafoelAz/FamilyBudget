import "./header.css";
import logo from "./logo.png";
import language from "./language-eng.png";
import { SignIn } from "./sign-in";

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Family Budget Logo" className="header__logo" />
            Family Budget
          </a>
          <div className="header__aside">
            <a href="/">
              <img
                src={language}
                alt="Change language"
                className="header__flag"
              />
            </a>
            <button
              type="button"
              data-bs-toggle="modal"
              className="btn text-white header__sign-in-btn"
              data-bs-target="#exampleModal"
            >
              Sign In
            </button>
            <SignIn />
          </div>
        </div>
      </nav>
    </header>
  );
}

export { Header };
