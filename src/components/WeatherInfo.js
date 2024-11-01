import React, { useState, useEffect } from 'react';
import './WeatherInfo.css'; // 스타일 파일 import

function WeatherInfo() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // 날씨 API 호출 (예: OpenWeatherMap API)
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchWeatherData();
    }, []);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { main, weather, wind } = weatherData;
    const temperature = main.temp;
    const description = weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

    return (
        <div className="weather-info-container">
            <div className="location">서울</div>
            <div className="current-weather">
                <img src={icon} alt="weather icon" className="weather-icon" />
                <div className="temperature">{temperature}°</div>
                <div className="description">{description}</div>
            </div>
            <div className="additional-info">
                <div className="info">풍속: {wind.speed} m/s</div>
                <div className="info">습도: {main.humidity}%</div>
                <div className="info">체감 온도: {main.feels_like}°</div>
            </div>
        </div>
    );
}

export default WeatherInfo;
