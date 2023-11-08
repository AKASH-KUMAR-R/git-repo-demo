import { Link } from "react-router-dom/cjs/react-router-dom";

const NavBar = ({ isSignedIn, setSignInStatus }) => {
    return (
        <div className="navigation">
            <div className="nav-logo">logo</div>
            <div className="nav-links" >
                {isSignedIn && <Link to='/home' className="links" >Home</Link>}
                {!isSignedIn && <Link to='/createAccount' className="links" >Sign Up</Link>}
                {isSignedIn && <Link to='/' className="links"><span onClick={() => {
                    localStorage.setItem('isSignedIn', 'false');
                    setSignInStatus(false);
                }}>Sign out</span></Link>}
                <Link to='/aboutUs' className="links" >About us</Link>
            </div>
        </div>
    );
}

export default NavBar;
