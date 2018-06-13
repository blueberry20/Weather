import React from 'react';

const CityWeatherDetail = (props) => {

	let cityName = props.cityData[0].city.name;
	let mainData = props.cityData[0].list[0].main;
	let temperature = mainData.temp;
	let lowestTemperature = mainData.temp_min;
	let highestTemperature = mainData.temp_max;
	let humidity = mainData.humidity;
	let description = props.cityData[0].list[0].weather[0].description;
	let wind = props.cityData[0].list[0].wind.speed;

	let hourlyWeather = props.cityData[0].list.map((weather,index) => {
		if (index < 8) {
			return <ul key={index}>
				<li>{getDateFromUTC(weather.dt)}</li>
				<li>{weather.main.temp}&#8457;</li>
				<li><p className="capitalize">{weather.weather[0].description}</p></li>
			</ul>
		}
		
	})

	function convertToAmPm(hours){
		//it is pm if hours from 12 onwards
		let suffix = (hours >= 12)? 'pm' : 'am';
		hours = ((hours + 11) % 12 + 1);
		return hours + suffix;
	}

	function getDateFromUTC(timestamp){
		let date = new Date(timestamp*1000);
		let hours = date.getHours();
		return convertToAmPm(hours);
	}

	return (
		<div id="cityWeatherDetailsContainer">
			<div className="largeTile">
				<h1>{cityName}</h1>
				<div className="divider"></div>
				<h2>Current</h2>
				<div className="flex">
					<div className="column">
						<p>Temp: {temperature}&#8457;</p>
						<p>Low: {lowestTemperature}&#8457;</p>
						<p>High: {highestTemperature}&#8457;</p>
					</div>
					<div className="column">
						<p>Humidity: {humidity}%</p>
						<p>Wind: {wind}mph</p>
						<p className="capitalize">{description}</p>
					</div>
				</div>
				<div className="divider"></div>
				<h2>24 Hour Forecast</h2>
					<div className="flex">
						{hourlyWeather}
					</div>
			</div>
			<button className="coralButton" onClick = {props.showAllCities} type="button">Back to all cities</button>
		</div>
	)
}

export default CityWeatherDetail;