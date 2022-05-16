import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [toggle, setToggle] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    setPasswordShown((prevState) => !prevState);
  };

  return (
    <div className="signin">
      <h5 className="signin-title">Sign in</h5>
      <form className="signin-form">
        <div className="input-div">
          <i className="bi bi-person icon"></i>
          <input className="signin-input" type="text" placeholder="Email" />
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
            className="signin-input"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
          />
          
        </div>
        <button className="signin-btn btn">Sign in</button>
        <Link to="/signup">
          <button className="signup-link">Not in the clan? sign up</button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
