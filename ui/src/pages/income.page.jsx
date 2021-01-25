import './income.page.css';

export function IncomePage() {
  return (
    <div>
      <body>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <div>
            <img src="logo.png" alt="qq" />
          </div>
          <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
            Family Budget:
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
        <div class="container-fluid">
          <div class="row">
            <nav
              id="sidebarMenu"
              class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                  <div class="d-grid gap-2">
                    <button class="btn btn-dark" type="button">
                      Cash income
                    </button>
                    <button class="btn btn-light" type="button">
                      Cash expenses
                    </button>
                    <button class="btn btn-light" type="button">
                      Objectives
                    </button>
                    <button class="btn btn-light" type="button">
                      Statistics
                    </button>
                    <button class="btn btn-light" type="button">
                      Piggy bank
                    </button>
                    <button class="btn btn-light" type="button">
                      Reminders
                    </button>
                    <button class="btn btn-light" type="button">
                      Settings
                    </button>
                  </div>
                </ul>
              </div>
            </nav>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Share
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar" />
                    This week
                  </button>
                </div>
              </div>

              <canvas class="my-4 w-100" id="myChart" width="900" height="380" />
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}
