import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"; // MapMarker로 수정
import Header from './Header';

export default function BasicMap() {
  const [userLocation, setUserLocation] = useState(null); // 사용자 위치 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const loadKakaoMap = () => {
      const kakaoMapScript = document.createElement("script");
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false`;
      kakaoMapScript.onload = () => {
        console.log("Kakao Map Loaded");
        setLoading(false); // 스크립트 로드 후 로딩 해제
      };
      document.head.appendChild(kakaoMapScript);
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude }); // 상태에 위치 업데이트
          },
          (error) => {
            console.error("Error getting location:", error);
            setLoading(false); // 위치 가져오기 실패 시 로딩 해제
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false); // 지원하지 않을 때도 로딩 해제
      }
    };

    loadKakaoMap();
    getUserLocation(); // 사용자 위치 가져오기 호출

    // 주기적으로 위치 업데이트
    const positionUpdateInterval = setInterval(getUserLocation, 5000); // 5초마다 위치 업데이트

    return () => clearInterval(positionUpdateInterval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Header /> {/* 헤더 추가 */}
      {loading || !userLocation ? ( // 로딩 중이거나 사용자 위치가 없는 경우
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p>Loading map...</p>
        </div>
      ) : (
        <Map
          id="map"
          center={userLocation} // 사용자 위치를 중심으로 설정
          style={{
            width: "100%",
            height: "100%",
          }}
          level={3}
        >
          <MapMarker // MapMarker로 수정
            position={userLocation} // 사용자 위치에 마커 추가
            title={"현재 위치"} // 마커 툴팁 텍스트
          />
        </Map>
      )}
    </div>
  );
}
