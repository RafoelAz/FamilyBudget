import './header.css';
import logo from './logo.png';

function Header() {
  return (
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <div>
        <img src={logo} alt={'logo'} />
      </div>
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
        Family Budget
      </a>
      <div>
        <img
          src="https://st.depositphotos.com/2711989/3513/v/600/depositphotos_35135847-stock-illustration-british-union-jack-flag.jpg"
          alt="qqq"
          width="30px"
          height="18px"
        />
      </div>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#/">
            Sign out
          </a>
        </li>
      </ul>
    </header>
  );
}

export { Header };
