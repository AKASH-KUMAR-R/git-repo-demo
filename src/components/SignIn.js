import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = (props) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isClickedSignIn, setSignInClicked] = useState(true);


    const [isClickedSignUp, setSignUpClicked] = useState(false);
    const history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        const existingUser = props.userDetails.filter((eachUser) => (eachUser.name === username && eachUser.password === password));

        if (existingUser.length !== 0) {
            console.log("Signed successfully!!");
            props.setId(existingUser.id);
            props.setStatus(true);
            history.push('./survey');
        } else {
            console.log("Doesn't exit");
        }
    }
    return (
        <div className="sign-in-main-container" >
            <div className="sign-in-container">
                <div className="signin-signout-container">
                    <div
                        className="signin"
                        style={{
                            borderBottom: isClickedSignIn ? '3px solid black' : 'none',
                            borderWidth: isClickedSignIn ? '100%' : '0%',
                            opacity: isClickedSignIn ? '1' : '0.4',
                        }}
                        onClick={() => {
                            setSignInClicked(true);
                            setSignUpClicked(false);
                        }}>
                        <span className="navigation-text">Sign In</span>
                    </div>
                    <div
                        className="signout"
                        style={{
                            borderBottom: isClickedSignUp ? '3px solid black' : 'none',
                            borderWidth: isClickedSignUp ? '100%' : '0%',
                            opacity: isClickedSignUp ? '1' : '0.4',

                        }}
                        onClick={() => {
                            setSignInClicked(false);
                            setSignUpClicked(true);
                        }}>
                        <span className="navigation-text">Sign Up</span>
                    </div>
                </div>
                <div className="form-section">
                    {isClickedSignIn && <h2>Login Section</h2>}
                    {isClickedSignUp && <h2>Create a Account</h2>}
                    <form onSubmit={handleSubmit}>
                        <div><input
                            type="email"
                            className="input-container"
                            placeholder="Username or Email"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                            required></input>
                        </div>

                        <div><input
                            type="password"
                            className="input-container"
                            placeholder="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            required></input>
                        </div>
                        <div className="button-container">
                            {isClickedSignIn && <button className="button-configuration" >Sign In</button>}
                            {isClickedSignUp && <button className="button-configuration">Sign Up</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;