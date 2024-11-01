import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/'); // 로그인 버튼 클릭 시 '/main' 경로로 이동
    };

    return (
        <div className="login-container">
            <img src="/mascot.png" alt="Welcome Mascot" className="welcome-image" />
            <p>안녕하세요! 알래미예요</p>
            
            <div className="input-container">
                <i className="fas fa-user input-icon"></i>
                <input type="text" placeholder="Enter email / Phone no" />
            </div>
            
            <button className="login-button" onClick={handleLoginClick}>Login</button>
            
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