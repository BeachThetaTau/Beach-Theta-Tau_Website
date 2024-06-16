import "./NavBar.css";
import OutlinedButton from "./OutlinedButton";
import DisplayLogo from "./Logo";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <DisplayLogo />
        </div>
        <div className="links">
          <a href="#">About</a>
          <a href="#">Meet Us</a>
          <a href="#">Social</a>
          <a href="#">Professionalism</a>
          <a href="#">Service</a>
          <OutlinedButton text="Apply Now" />
          <a className="nav-line"></a>
          <a href="#">Log In</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
