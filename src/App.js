import React, { Component } from 'react';
//import logo from './logo.svg';
import WeatherList from './components/weatherList';
import CityWeatherDetail from './components/CityWeatherDetail';
//import './App.css';

const API_KEY = "8f2ff7369e6685a359ab7782aaefbb38";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&APPID=${API_KEY}`;


class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			allCitiesWeatherData:[],
			oneCityWeatherDetails: []
		};

		this.fetchData("New York, US");
		this.fetchData("Miami, US");
		this.fetchData("Paris, FR");
		this.fetchData("Moscow, RU");
		this.fetchData("Reykjavik, IS");
	}

  
	//get data from Weather API
	fetchData(city){
		const url = `${ROOT_URL}&q=${city}`;
		fetch(url)
      	.then(response => response.json())
      	.then(data =>{ 
      		let weatherDataCopy = this.state.allCitiesWeatherData.slice();
      		weatherDataCopy.push(data);
      		this.setState({ allCitiesWeatherData: weatherDataCopy }, ()=> {console.log(data)});
      	})
      	.catch(error => {console.log(error)});
	}

	//when details button is clicked, add data for that city to the oneCityWeatherDetails state
	updateCityToShowDetails(city){	
		let cityData = this.state.allCitiesWeatherData.filter(function(obj){
			return obj.city.name === city;
		});
		console.log(cityData);
		this.setState({oneCityWeatherDetails: cityData});
	}

	//when a button "Back to all cities" is clicked, empty city data from oneCityWeatherDetails state
	showAllCities(){
		this.setState({"oneCityWeatherDetails": []});
	}


  render() {
    return (
      <div className="App">
      	<h1>Weather</h1>
     	 {/*If some data was added to oneCityWeatherDetails state (details button was clicked) -  
      		show city weather details component.
      		If there is no data in oneCityWeatherDetails (on load and when back to all cities button is clicked) - 
  			show a list of all cities.*/}
      		{this.state.oneCityWeatherDetails.length === 0 ? <WeatherList data = {this.state.allCitiesWeatherData} updateCityToShowDetails = {this.updateCityToShowDetails.bind(this)}/>: null}
      		{this.state.oneCityWeatherDetails.length !== 0 ? <CityWeatherDetail cityData = {this.state.oneCityWeatherDetails} showAllCities = {this.showAllCities.bind(this)} /> : null}
      </div>
    );
  }
}

export default App;
