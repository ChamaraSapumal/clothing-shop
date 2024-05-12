import logo from "../../public/title-icon.png";

export default function NavBar() {
  return (
    <div>
      <header className="py-2 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <img src={logo} className="bi me-2" width="40" height="32" />
            <span className="fs-4">Devify&reg;</span>
          </a>
          <div className="col-9 col-lg-auto mb-3 mb-md-0">
            <div className="input-group">
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
          <div className="col-1 col-lg-auto m-3 mt-0 mb-0 mb-md-0">
            <i
              className="bi bi-cart-check-fill h2 text-dark-emphasis"
              role="button"
            ></i>
          </div>
        </div>
      </header>

      <nav
        className="navbar navbar-expand-lg py-0 m-0 bg-dark border-bottom"
        data-bs-theme="dark"
      >
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
                  Men&apos;s
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Women&apos;s
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Kid&apos;s
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
