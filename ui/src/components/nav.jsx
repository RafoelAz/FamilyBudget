import './nav.css';

function Nav() {
  return (
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
      </div>
    </div>
  );
}
export { Nav };
