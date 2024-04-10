import React from 'react';
import "../styles/signup.css"; // Import your CSS file




const SignUpForm = () => {
    return (
        <section id="signup">
        <div className="container1" id="container1">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="/" className="icon">
                            <i className="fa-brands fa-google-plus-g"></i>
                        </a>
                        <a href="/" className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="/" className="icon">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="/" className="icon">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            {/* Add the Sign In form component here */}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, User!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default SignUpForm;
