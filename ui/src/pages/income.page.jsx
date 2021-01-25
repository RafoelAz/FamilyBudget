import './income.page.css';

export function IncomePage() {
  return (
    <div>
      <body>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
            Family Budget:
          </a>
          <button
            class="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
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
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#/">
                      <span data-feather="home" />
                      <button type="button" class="btn btn-dark">
                        Cash income
                      </button>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/">
                      <span data-feather="file" />
                      <button type="button" class="btn btn-light">
                        Cash expenses
                      </button>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/">
                      <span data-feather="shopping-cart" />
                      <button type="button" class="btn btn-light">
                        Objectives
                      </button>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/">
                      <span data-feather="users" />
                      <button type="button" class="btn btn-light">
                        Statistics
                      </button>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/">
                      <span data-feather="bar-chart-2" />
                      <button type="button" class="btn btn-light">
                        Piggy bank
                      </button>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/">
                      <span data-feather="layers" />
                      <button type="button" class="btn btn-light">
                        Reminders
                      </button>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/">
                      <span data-feather="settings" />
                      <button type="button" class="btn btn-light">
                        Settings
                      </button>
                    </a>
                  </li>
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
