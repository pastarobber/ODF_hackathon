// Map.js
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const { kakao } = window;
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심점 (서울)
      level: 3, // 초기 확대 레벨
    };

    // 지도 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커 추가 예시
    const markerPosition  = new kakao.maps.LatLng(37.5665, 126.9780); 
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default Map;
