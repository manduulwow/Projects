import React, { Fragment } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { FiCloudLightning, FiCloudDrizzle } from "react-icons/fi";
import TempList from './tempList';

class WeatherInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
        }
        this.getTemperature = this.getTemperature.bind(this);
        this.getNavBar = this.getNavBar.bind(this);
        this.showMoreInfo = this.showMoreInfo.bind(this);
    }

    getTemperature() {
        let description = this.props.weatherList[0].weather[0].description;
        return (
            <div className="nav-item-c">
                <div className="">{description.charAt().toUpperCase()+description.slice(1)}</div>
                <div className="">{(this.props.weatherList[0].main.temp-273).toFixed(0)}</div>
            </div>
        )
    }

    getNavBar() {
        return (
            <div className="nav-item-cn">
                <div><FiCloudLightning /></div>
                <div><FiCloudDrizzle /></div>
            </div>
        )
    }

    showMoreInfo() {
        this.props.show();
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        return (
            <Fragment>
                <div className="wi-nav">
                    <div className="wi-nh wi-nav-item" onClick={this.showMoreInfo}>
                        <span>{this.props.day}</span>
                        <span style={{ position: "relative", top: 3 }}>
                            {(this.state.showInfo) ? <MdArrowDropDown /> : ""}
                        </span>
                    </div>
                    <div className="wi-nav-item">
                        {(!this.state.showInfo) ? this.getTemperature() : this.getNavBar()}
                    </div>
                </div>
                <div className={"wi-i "+(this.state.showInfo ? 'wi-i-show':'')}>
                    <TempList weatherList={this.props.weatherList}/>
                </div>
            </Fragment>
        )
    }
}

export default WeatherInfo;