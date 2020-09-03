import React from 'react';
import WeatherCard from './components/weatherCard';
import './main.css';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: [],
            text: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.getWeatherInfo = this.getWeatherInfo.bind(this);
    }

    onChange(e) {
        this.setState({ text: e.target.value });
    }

    onKeyDown(e) {
        if (e.key === 'Enter') {
            this.getWeatherInfo(this.state.text);
        }
    }

    getWeatherInfo(city) {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=13fc637eb24ecfee389a2adba748b81e`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.cod == 404) return;
                const city = {
                    name: data.city.name,
                    weatherList: data.list.slice(0, 5)
                }

                this.setState(state => {
                    const list = state.cityList.concat(city);
                    return { cityList: list };
                });
            })
    }

    componentDidMount() {

    }

    render() {
        const { cityList } = this.state;
        return (
            <div className="weather-mc">
                <div className="weather-title" style={{position:"relative",marginBottom:"7%"}}>
                    <input onChange={this.onChange} onKeyDown={this.onKeyDown} />
                </div>
                <div className="wc-box">
                    {
                        cityList.map((city, index) => (<WeatherCard key={index} day={"Wednesday"} city={city} />))
                    }
                </div>
            </div>
        )
    }
}

export default Weather;