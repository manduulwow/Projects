import React, { useState } from 'react';
import './weatherCard.css';
import WeatherInfo from './weatherInfo';

const WeatherCard = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const show = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div className="weatherCard">
            <div className={"wc-wd " + (showInfo ? 'move-wd':'')}>
                <span>{props.city.name}</span>
            </div>
            <div className="wc-body">
                <WeatherInfo show={show} day={props.day} weatherList={props.city.weatherList}/>
            </div>
            <div className="whitespace"></div>
        </div>
    )
}

export default WeatherCard