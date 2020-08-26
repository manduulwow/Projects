import React from 'react';
import './weatherCard.css';
import WeatherInfo from './weatherInfo';

const WeatherCard = (props) => {

    return (
        <div className="weatherCard">
            <div className="wc-wd">
                <span>{props.day}</span>
            </div>
            <div className="wc-body">
                <WeatherInfo />
            </div>
        </div>
    )
}

export default WeatherCard