import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/weather-chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        //console.log('cityData: ', cityData );
        const name = cityData.city.name;
        const temps = cityData.list.map( (weather) => weather.main.temp );
        const pressure = cityData.list.map( (weather) => weather.main.pressure );
        const humidity = cityData.list.map( (weather) => weather.main.humidity );

        console.log('Temperatures: ',temps );
        return (
            <tr key={ name }>
                <td>{ name }</td>
                <td> <Chart data={temps} color="orange" /></td>
                <td> <Chart data={pressure} color="green" /></td>
                <td> <Chart data={humidity} color="black" /></td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                 { this.props.weather.map( this.renderWeather )}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    console.log('weather list mapStateToProps: ', weather );
    return { weather }; //{ weather } === {weather: weather }
}

export default connect( mapStateToProps)(WeatherList);