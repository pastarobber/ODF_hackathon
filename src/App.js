import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoadingScreen from './components/auth/LoadingScreen';
import MainContent from './components/MainContent';
import Login from './components/auth/Login';
import Map from './components/Map';

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate 사용
  const location = useLocation();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        navigate('/login'); // 로딩이 끝나면 /login으로 이동
      }, 2000); // 로딩 시간 설정

      return () => clearTimeout(timer); // 타이머 정리
    }
  }, [loading, navigate]);

  const handleLoginSuccess = () => {
    setLoading(false); // 로그인 성공 시 로딩 상태 해제
    navigate('/'); // '/' 경로로 이동
  };

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
