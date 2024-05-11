import logo from "../../public/title-icon.png";

export default function NavBar() {
  return (
    <div className="container-fluid">
      <header className="py-2 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <img src={logo} className="bi me-2" width="40" height="32" />
            <span className="fs-4">Double header</span>
          </a>
          <div className="col-12 col-lg-auto mb-3 mb-lg-0">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search items..."
                aria-label="Search items..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg py-1 mb-4 bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="bi bi-chevron-double-down"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link link-body-emphasis px-2 active"
                  aria-current="page"
                >
                  Men's
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Women's
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Kid's
                </a>
              </li>
            </ul>
            <ul className="nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Quick Assist
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Store Location
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
