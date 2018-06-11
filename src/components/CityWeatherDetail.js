import React from 'react';

const CityWeatherDetail = (props) => {


	//console.log(props.cityData);

{/*	renderWeatherHourly(){
		let temperatures  = props.cityData[0].list.map(weather => weather.main.temp);
		let lowestTemperatures  = props.cityData[0].list.map(weather => weather.main.temp_min);
		let highestTemperatures  = props.cityData[0].list.map(weather => weather.main.temp_max);

		return (
			<ul>
				<li><{temperatures}/li>
			</ul>
		)
	}*/}




	let cityName = props.cityData[0].city.name;
	let mainData = props.cityData[0].list[0].main;
	let temperature = mainData.temp;
	let lowestTemperature = mainData.temp_min;
	let highestTemperature = mainData.temp_max;
	let humidity = mainData.humidity;
	let pressure = mainData.pressure;
	let description = props.cityData[0].list[0].weather[0].description;
	let wind = props.cityData[0].list[0].wind.speed;

	//console.log(cityName);

	return (
		<div>
			<div>
				<h1>{cityName}</h1>
				<h2>Current</h2>
				<p>Temp: {temperature}&#8457;</p>
				<p>Low: {lowestTemperature}&#8457;</p>
				<p>High: {highestTemperature}&#8457;</p>
				<p>Humidity: {humidity}%</p>
				<p>Wind: {wind}mph</p>
				<p>{description}</p>
				<h2>Hourly</h2>

			</div>
			<button onClick = {props.showAllCities} type="button">Back to all cities</button>
		</div>
	)
}

export default CityWeatherDetail;