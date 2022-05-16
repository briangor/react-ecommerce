import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="" className="navbar-brand">
          Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span>Menu */}
          Menu
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="" className="nav-link active" aria-current="page">
              {/* <i className="bi bi-house"></i>  */}
              Home
            </Link>
            <Link to="about" className="nav-link">
              About
            </Link>
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-nav">
          <Link to="signin" className="nav-link justify-content-end">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
