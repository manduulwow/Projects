import React from 'react';
import WeatherCard from './components/weatherCard';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: {}
        }
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Alameda&appid=13fc637eb24ecfee389a2adba748b81e")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ city: data.city });
            })
    }

    render() {

        return (
            <div className="weather-mc">
                <div className="weather-title">
                    <h1>{this.state.city.name}</h1>
                </div>
                <WeatherCard day={"Wednesday"} />
            </div>
        )
    }
}

export default Weather;