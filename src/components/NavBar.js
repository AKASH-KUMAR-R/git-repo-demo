import { Link } from "react-router-dom";
const NavBar = (props) => {
    return (
        <div className="navigation-container">
            <div className="logo">
                <span>Logo</span>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    {!props.isSignedIn && <Link to="/signin" className="links"><li>Sign In</li></Link>}
                    {props.isSignedIn && <Link to="/signin" className="links" onClick={() => {
                        props.setStatus(false);
                    }}><li>Sign Out</li></Link>}
                    <li><img src="./user.png" alt="userdetails" className="userDetails"></img></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;