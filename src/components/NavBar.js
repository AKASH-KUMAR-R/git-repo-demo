import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navigation-container">
            <div className="logo">
                <span>Logo</span>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <Link to="/signin" className="links"><li>Sign In</li></Link>
                    <li>Overview</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;