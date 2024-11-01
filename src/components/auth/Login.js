import React from 'react';
import '../styles/Login.css';

function Login() {
    return (
        <div className="login-container">
            <img src="/mascot.png" alt="Welcome Mascot" className="welcome-image" />
            <p>안녕하세요! 알래미예요</p>
            
            <div className="input-container">
                <i className="fas fa-user input-icon"></i>
                <input type="text" placeholder="Enter email / Phone no" />
            </div>
            
            <button className="login-button">Login</button>
            
            <p className="or-sign-in">Or Sign In via</p>
            
            <div className="social-icons">
                <button className="social-button google-button">
                    <i className="fab fa-google"></i>
                </button>
                <button className="social-button apple-button">
                    <i className="fab fa-apple"></i>
                </button>
                <button className="social-button instagram-button">
                    <i className="fab fa-instagram"></i>
                </button>
            </div>
        </div>
    );
}

export default Login;