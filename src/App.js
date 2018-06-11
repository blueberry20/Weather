import React, { Component } from 'react';
//import logo from './logo.svg';
import WeatherList from './components/weatherList';
import CityWeatherDetail from './components/CityWeatherDetail';
//import './App.css';

const API_KEY = "8f2ff7369e6685a359ab7782aaefbb38";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;


class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			weatherData:[],
			cityToShowDetails: ""
		};

		this.fetchData("New York, US");
		this.fetchData("Miami, US");
		this.fetchData("Paris, FR");
		this.fetchData("Moscow, RU");
		this.fetchData("Reykjavik, IS");
	}

  

	fetchData(city){

		const url = `${ROOT_URL}&q=${city}`;
		fetch(url)
      	.then(response => response.json())
      	.then(data =>{ 
      		let weatherDataCopy = this.state.weatherData.slice();
      		weatherDataCopy.push(data);
      		this.setState({ weatherData: weatherDataCopy }, ()=> {console.log(data)});
      	})
      	.catch(error => {console.log(error)});
	}

	updateCityToShowDetails(city){
		//console.log(city);		
		let cityData = this.state.weatherData.filter(function(obj){
			return obj.city.name == city;
		});
		//console.log(cityData);
		this.setState({cityToShowDetails: cityData});
	}



  render() {
    return (
      <div className="App">
      	<h1>Weather</h1>
      		<WeatherList data = {this.state.weatherData} updateCityToShowDetails = {this.updateCityToShowDetails.bind(this)}/>
      		<CityWeatherDetail cityData = {this.state.cityToShowDetails} />
      </div>
    );
  }
}

export default App;
