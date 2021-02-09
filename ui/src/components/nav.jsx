import "./nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <aside className="sidebar-navigation col-md-3 col-lg-2 d-md-block bg-light collapse menu">
      <nav className="list-group">
        <NavLink
          to="/dashboard"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="home" />
          Dashboard
        </NavLink>

        <NavLink
          to="/income"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="home" />
          Cash income
        </NavLink>

        <NavLink
          to="/cash-expenses"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="file" />
          Cash expenses
        </NavLink>

        <NavLink
          to="/objectives"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="shopping-cart" />
          Objectives
        </NavLink>

        <NavLink
          to="/statistics"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="users" />
          Statistics
        </NavLink>

        <NavLink
          to="/piggy-bank"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="bar-chart-2" />
          Piggy bank
        </NavLink>

        <NavLink
          to="/reminders"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="layers" />
          Reminders
        </NavLink>

        <NavLink
          to="/settings"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          <span data-feather="layers" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export { Nav };
