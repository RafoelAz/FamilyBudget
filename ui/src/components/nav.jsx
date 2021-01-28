import './nav.css';

function Nav() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse menu">
      <div className="position-sticky menu__position">
        <ul className="nav flex-column menu__nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#/">
              <span data-feather="home" />
              Cash income
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="file" />
              Cash expenses
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="shopping-cart" />
              Objectives
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="users" />
              Statistics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="bar-chart-2" />
              Piggy bank
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="layers" />
              Reminders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="layers" />
              Settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Nav };
