import React, { useState } from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");

  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Navigate directly to the profile page after signup (user is automatically signed in)
        navigate("/profile");
      } catch (error) {
        // Check for specific error messages (like weak passwords)
        if (password.length < 8) {
          setNotice("Your password should be at least 8 characters.");
        } else {
          setNotice("Sorry, something went wrong. Please try again.");
        }
        console.error("Error during signup:", error);
      }
    } else {
      setNotice("Passwords don't match. Please try again.");
    }
  };

  if (auth.currentUser) {
    navigate("/profile");
  }

  return (
    <div
      className="container"
      style={{ height: "100vh", backgroundColor: "#ececec" }}
    >
      <div className="row justify-content-center">
        <form className="col-md-4 mt-3 pt-3 pb-3">
          {notice && (
            <div className="alert alert-warning" role="alert">
              {notice}
            </div>
          )}
          <div className="form-floating mb-3">
            <input
              id="signupEmail"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="signupEmail" className="form-label">
              Enter an email address for your username
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              id="signupPassword"
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              id="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary pt-3 pb-3"
              onClick={(e) => signupWithUsernameAndPassword(e)}
            >
              Signup
            </button>
          </div>
          <div className="mt-3 text-center">
            <span>
              Go back to login? <Link to="/login">Click here.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
