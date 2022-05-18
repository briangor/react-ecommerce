import { Link } from "react-router-dom";

const Navbar = () => {
  let cart = true;

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container">
          <Link to="" className="navbar-brand d-flex w-50 me-auto">
            Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse w-100"
            id="collapsingNavbar3"
          >
            <ul className="navbar-nav w-100 justify-content-center">
              <li className="nav-item active">
                <Link to="" className="nav-link">
                  {/* <i className="bi bi-house"></i>  */}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
              <li className="nav-item">
                <Link to="cart" className="nav-link cart-icon">
                  <i class="bi bi-cart2"></i>
                </Link>
                {cart && <span class="badge rounded-pill bg-secondary">
                    5
                  </span>}
              </li>
              <li className="nav-item">
                <Link to="signin" className="nav-link">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
