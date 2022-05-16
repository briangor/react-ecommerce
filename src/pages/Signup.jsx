import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [toggle, setToggle] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    setPasswordShown((prevState) => !prevState);
  };

  return (
    <div className="signup">
      <h5 className="signup-title">Create an account</h5>
      <form className="signup-form">
      <div className="input-div">
          <i className="bi bi-person icon"></i>
          <input className="signup-input" type="text" placeholder="Name" />
        </div>
      <div className="input-div">
          <i className="bi bi-envelope icon"></i>
          <input className="signup-input" type="text" placeholder="Email" />
        </div>
        <div className="input-div">
          <i className="bi bi-key icon"></i>
          <span onClick={handleToggle} className="pwd-toggle">
            {toggle ? (
              <i class="bi bi-eye"></i>
            ) : (
              <i class="bi bi-eye-slash"></i>
            )}
          </span>
          <input
            className="signup-input"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
          />
        </div>
        <div className="input-div">
          <i className="bi bi-key icon"></i>
          <span onClick={handleToggle} className="pwd-toggle">
            {toggle ? (
              <i class="bi bi-eye"></i>
            ) : (
              <i class="bi bi-eye-slash"></i>
            )}
          </span>
          <input
            className="signup-input"
            type={passwordShown ? "text" : "password"}
            placeholder="Confirm password"
          />
        </div>
        <button className="signup-btn btn">Sign up</button>
        <Link to='/signin'>
        <button className="signin-link">In the clan? sign in</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
