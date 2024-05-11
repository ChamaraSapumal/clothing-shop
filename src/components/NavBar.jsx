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
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header>

      <nav className="py-1 mb-4 bg-body-tertiary border-bottom ">
        <div className="container-fluid d-flex flex-wrap">
          <ul className="nav">
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
                Wemen's
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
      </nav>
    </div>
  );
}
