import { use, useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onFormSubmit = (e) => {
    setError("");
    e.preventDefault();
    console.log(userName, email, password);
    const lowercaseRegx = /^[a-z]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/;

    if (!lowercaseRegx.test(userName)) {
      return setError("Username must contain only lowercse letters");
    } else if (!emailPattern.test(email)) {
      return setError("Not valid email");
    } else if (!regularExpression.test(password)) {
      return setError(
        "Password must contain at least one capital letter, one lowercase letter, one special character, and a minimum of 8 characters"
      );
    }

    const obj = { username: userName, email: email, password: password };

    // API call to register user

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const response = await fetch("https://example.org/post", {
    //   method: "POST",
    //   body: JSON.stringify({ username: "example" }),
    //   headers: myHeaders,
    // });

    // async function getData() {
    //   const url = "https://example.org/products.json";
    //   try {
    //     const response = await fetch(url);
    //     if (!response.ok) {
    //       throw new Error(`Response status: ${response.status}`);
    //     }

    //     const json = await response.json();
    //     console.log(json);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // }

    localStorage.setItem(
      "user",
      JSON.stringify({
        username: "PDEACL4",
        email: "abc@ert.com",
        role: 0,
        id: "user_id",
      })
    );
    navigate("/signin", { replace: true });
  };

  return (
    <>
      <div className="singin-card w-1">
        <div className="form-area">
          <h1 className="heading">Sign Up</h1>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
                className="input input-signup m-1"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="input input-signup m-1"
              />
            </div>

            <div>
              <label>Password</label>
              <div className="password-field">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter password"
                  className="input"
                />
                <button className="button" type="button">
                  eye
                </button>
              </div>
            </div>

            {error != "" && <p className="error"> {error}</p>}

            <div className="button-div">
              <button onClick={onFormSubmit} className="button" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <p className="link-msg">
            Already have an account?{" "}
            <Link to="/signin" className="link">
              Return to Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
