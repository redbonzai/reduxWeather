import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/weather-chart';

class WeatherList extends Component {


    renderWeather(cityData) {
        //console.log('cityData: ', cityData );
        const name = cityData.city.name;
        const temps = _.map( cityData.list.map( (weather) => weather.main.temp ), (temp) => (9/5)*(temp - 273) + 32 );
        const pressure = cityData.list.map( (weather) => weather.main.pressure );
        const humidity = cityData.list.map( (weather) => weather.main.humidity );

        console.log('Temperatures: ' + name ,temps );
        return (
            <tr key={ name }>
                <td>{ name }</td>
                <td> <Chart data={temps} color="orange" units="F"/></td>
                <td> <Chart data={pressure} color="green" units="hPa"/></td>
                <td> <Chart data={humidity} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature ( F )</th>
                        <th>Pressure ( hPa )</th>
                        <th>Humidity ( % )</th>
                    </tr>
                </thead>
                <tbody>
                  { this.props.weather.map( this.renderWeather )}
                </tbody>
            </table>
        );

    }

}


function mapStateToProps(state) {
    return { weather: state.weather };

}
//above method could also be in es-6:
/*function mapStateToProps({ weather }) {
    return { weather };
}*/

export default connect( mapStateToProps)(WeatherList);