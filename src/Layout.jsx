import { Outlet } from "react-router-dom";
import './components/NavBar.css';
import OutlinedButton from './components/OutlinedButton';
import DisplayLogo from './components/Logo';


const Layout = () => {
    return(
        <div className = "container-fluid">
            <div className = "row justify-content-center mt-3">
            <nav className="navbar">
            <div className="logo"> <DisplayLogo/></div>

            <div className="links">
                <a href="#">About</a>
                <a href="#">Meet Us</a>
                <a href="#">Social</a>
                <a href="#">Professionalism</a>
                <a href="#">Service</a>
                <OutlinedButton text="Apply Now" />
                <a className='nav-line'></a>
                <a href="#">Log In</a>
            </div>
            </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout