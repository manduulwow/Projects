import React, { Fragment } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { FiCloudLightning, FiCloudDrizzle } from "react-icons/fi";
import TempList from './tempList';

class WeatherInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        }
        this.getTemperature = this.getTemperature.bind(this);
        this.getNavBar = this.getNavBar.bind(this);
        this.showMoreInfo = this.showMoreInfo.bind(this);
    }

    getTemperature() {
        return (
            <div className="nav-item-c">
                <div className="">hello</div>
                <div className="">2</div>
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
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        return (
            <Fragment>
                <div className="wi-nav">
                    <div className="wi-nh wi-nav-item" onClick={this.showMoreInfo}>
                        <span>{new Date().getHours()}</span>
                        <span style={{ position: "relative", top: 3 }}>
                            {(this.state.showInfo) ? <MdArrowDropDown /> : ""}
                        </span>
                    </div>
                    <div className="wi-nav-item">
                        {(!this.state.showInfo) ? this.getTemperature() : this.getNavBar()}
                    </div>
                </div>
                <div className="wi-i">
                    <TempList />
                </div>
            </Fragment>
        )
    }
}

export default WeatherInfo;