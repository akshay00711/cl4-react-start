import { use } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const onSignIn = (e) => {
    e.preventDefault();
    setError("");
    console.log(userName, password);

    const obj = { email: userName, password: password };
    localStorage.setItem("token", "sdsdsd");
    navigate("/dashboard", { replace: true });
  };

  const toggleSwitch = () =>{
    setVisible(!visible);
  }

  return (
    <>
      <div className="singin-card">
        <form onSubmit={onSignIn}>
          <div className="form-area">
            <h1 className="heading">Sign In</h1>
            {error != "" && (
              <p className="error"> Invalid username or password</p>
            )}

            <div>
              <label>Username</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Enter username"
                className="input m-1"
              />
            </div>
            <div>
              <label>Password</label>
              <div className="password-field">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type= {visible ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="input"
                />
                <button onClick={toggleSwitch} className="button" type="button">
                  eye
                </button>
              </div>
            </div>
            <button type="submit" className="button">
              Sign In
            </button>
            <p className="link-msg">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
