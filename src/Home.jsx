import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom"; // Import Link for navigation links

const Home = () => {
  const navigate = useNavigate();
  // Update: Use useState to manage the user state locally
  const [user, setUser] = useState(null); // Initialize user state as null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, update the user state
        setUser(user);
        console.log("uid", user.uid);
      } else {
        // User is signed out, set user state to null
        setUser(null);
        console.log("User is logged out");
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const logoutUser = async (e) => {
    e.preventDefault();
    await signOut(auth); // Sign out the current user
    navigate("/"); // Navigate to the homepage or login page as needed
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">
        Welcome to Theta Tau Xi Epsilon Chapter
      </h1>
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          {user ? (
            <div>
              <p>
                Welcome{" "}
                <em className="text-decoration-underline">{user.email}</em>. You
                are logged in!
              </p>
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary pt-3 pb-3"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // If user is not logged in, show login button
            <div>
              <p>You are not logged in.</p>
              <div className="d-grid gap-2">
                <Link to="/login" className="btn btn-primary pt-3 pb-3">
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
