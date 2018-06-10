import React, { Component } from 'react';
//import logo from './logo.svg';
import WeatherList from './components/weatherList';
//import './App.css';

const API_KEY = "8f2ff7369e6685a359ab7782aaefbb38";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;


class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			weatherData:[],
		};

		this.fetchData("New York");
	}

  

	fetchData(city){
		//const url = `${ROOT_URL}&q=${city},us`;
		const url = `${ROOT_URL}&q=${city},us`;
		fetch(url)
      	.then(response => response.json())
      	.then(data => this.setState({ weatherData: data }, ()=> {console.log()}))
      	.catch(error => {console.log(error)});
	}

  render() {
    return (
      <div className="App">
      	<h1>Weather</h1>
      		<WeatherList data = {this.state.weatherData}/>
      </div>
    );
  }
}

export default App;
