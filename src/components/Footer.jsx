import logo from "../../public/title-icon.png";

export default function Footer() {
  return (
    <div>
      <div
        className=" d-flex flex-column flex-sm-row justify-content-between border-top pt-3 pb-0 bg-dark"
        data-bs-theme="dark"
      >
        <span className="text-white m-1 mt-0 h3">
          Connect with us <i className="bi bi-arrow-right h3"></i>
        </span>
        <ul className="list-unstyled d-flex ms-auto">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="bi bi-whatsapp h4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="bi bi-facebook h4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="bi bi-instagram h4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="bi bi-tiktok h4"></i>
            </a>
          </li>
        </ul>
      </div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top pt-3">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <img src={logo} className="bi me-2" width="96" height="96"></img>
          </a>
          <p className="text-body-secondary">&copy; 2024 Devify&reg;</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3 container">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
