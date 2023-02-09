import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import whiteLogo from '../logos/shpotify_logo_login_cropped.jpg';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [confirmEmail, setConfirmEmail] = useState("");

    if (sessionUser) return <Redirect to="/" />;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password === confirmPassword) {
    //         setErrors([]);
    //         return dispatch(sessionActions.signup({ email, username, password }))
    //         .catch(async (res) => {
    //         let data;
    //         try {
    //         // .clone() essentially allows you to read the response body twice
    //             data = await res.clone().json();
    //         } catch {
    //         data = await res.text(); // Will hit this case if the server is down
    //         }
    //         if (data?.errors) setErrors(data.errors);
    //         else if (data) setErrors([data]);
    //         else setErrors([res.statusText]);
    //         });
    //     }
    //     return setErrors(['Confirm Password field must be the same as the Password field']);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === confirmEmail) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    let data;
                    try {
                        
                        data = await res.clone().json();
                    } catch {
                        data = await res.text(); 
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
        }
        return setErrors([`The email addresses don't match.`]);
    };

    return (
        
        // <div className="officialSignUpLogo">
        //     <img src={whiteLogo} alt="Shpotify Logo" />
        // </div>
        <div className="signupDiv">
            <div className="officialSignUpLogo">
                <img className="logo2" src={whiteLogo} alt="Shpotify Logo" />
        </div>

        <div className="freeListen">
            <h1 className="freeListenHeader">Sign up for free to start listening.</h1>
        </div>


        <form className="signupForm" onSubmit={handleSubmit}>
            
        <div className='loginFormErrors'>
        
        {errors.map(error => <p className="errors" key={error}><i class="fa-solid fa-circle-exclamation"></i> {error}</p>)}
        
        </div>

            <h1 className="signupFormHead">Sign up with your email address</h1>

            <label id="signupTitle">
                What's your email?
            <input
                id="signupInput"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email."
            />
            </label>

            <label id="signupTitle">
                Confirm your Email
            <input
                id="signupInput"
                type="text"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                required
                placeholder="Enter your email again."
            />
            </label>

            <label id="signupTitle">
                Password
            <input
                id="signupInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Create a password."
            />
            </label>

            <label id="signupTitle">
                What should we call you?
            <input
                id="signupInput"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter a profile name."
            />
            </label>
            <p className="signupText">This appears on your profile.</p>
            <br/>
            <div className="signupTerms">
            <p className="signupComment1">By clicking on sign-up, you agree to Shpotify's <a href="https://www.spotify.com/us/legal/end-user-agreement/" className="loginLink">Terms and Conditions of Use.</a></p>
            {/* <br/> */}
            <p className="signupComment2">To learn more about how Spotify collects, uses, shares and protects your personal data,</p>
            <p className="signupComment3">please read <a href="https://www.spotify.com/us/legal/privacy-policy/" className="loginLink">Shpotify's Privacy Policy.</a></p>
            </div>
            <div className='signupButtonsDiv'>
                <button className="signupButton" type="submit">Sign Up</button>
                {/* <button onClick={handleDemoUserSignupForm} className="demoUserSignUpForm" type="submit">Demo User</button> */}
            </div>
            <p className="haveAccount">Have an account? <a href="/login" className="loginLink">Log in.</a></p>
        </form>
        </div>
    );
}

export default SignupFormPage;
