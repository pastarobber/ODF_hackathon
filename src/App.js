import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/auth/LoadingScreen'; // LoadingScreen 컴포넌트를 가져옵니다.
import MainContent from './components/MainContent'; // 메인 콘텐츠 컴포넌트를 가져옵니다.
import Map from './components/Map'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/map" element={<Map />} /> {/* Map 페이지 추가 */}
      </Routes>
    </Router>
  );
}
export default App;


// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // 2초 후에 로딩 상태를 false로 변경하여 메인 콘텐츠를 표시합니다.
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // 원하는 시간(밀리초)으로 조정 가능

//     // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {loading ? <LoadingScreen /> : <Map />}
//     </div>
//   );
// }

// export default App;
