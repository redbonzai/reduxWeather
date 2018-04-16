import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        //We have to bind the context of (this) to the searchBar.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        //Fetch weather data with API request
        this.props.fetchWeather( this.state.term );

        //after weather is fetched, we set the term to empty string in the state.
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={ this.onFormSubmit } className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={ this.state.term }
                    onChange={ this.onInputChange } />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-danger" >Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch );
}

//This container doesn't manage state, hence null as the first parameter.
export default connect( null, mapDispatchToProps)(SearchBar);