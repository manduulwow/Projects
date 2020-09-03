import React, { Fragment } from 'react';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import './tempList.css';

const TempList = (props) => {
    return (
        <Fragment>
            {
                props.weatherList.map((weather, index) => (
                    <div className="ibox" key={index}>
                        <div>{(index === 0) ? "Now": new Date(weather.dt_txt).getHours().toString()}</div>
                        <div><BsFillBrightnessHighFill /></div>
                        <div>{(weather.main.temp-273).toFixed(0)}</div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default TempList;