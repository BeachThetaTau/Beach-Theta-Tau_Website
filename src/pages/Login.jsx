import { useState } from "react";
import { auth } from "./../firebase";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [stayLoggedIn, setStayLoggedIn] = useState(false);
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        const persistenceType = stayLoggedIn ? browserLocalPersistence : browserSessionPersistence;
        
        try {
            await setPersistence(auth, persistenceType);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="col-md-4 mt-3 pt-3 pb-3">
                    {notice !== "" && (
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    )}
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="exampleInputEmail1">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="exampleInputPassword1">Password</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="stayLoggedInCheck" checked={stayLoggedIn} onChange={(e) => setStayLoggedIn(e.target.checked)} />
                        <label className="form-check-label" htmlFor="stayLoggedInCheck">Stay logged in</label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary pt-3 pb-3" onClick={loginWithUsernameAndPassword}>Submit</button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Need to sign up for an account? <Link to="/signup">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
