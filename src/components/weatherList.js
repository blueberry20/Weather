import React from 'react';

const WeatherList = (props) => {

	if (props.data.length === 0 || props.data === undefined){
		return <div>Loading</div>
	}

	console.log(props.data);
	let cityName = props.data.city.name;
	let temperature = props.data.list[0].main.temp;
	let description = props.data.list[0].weather[0].description;
	let iconUrl = `http://openweathermap.org/img/w/${props.data.list[0].weather[0].icon}.png`;

	return (
		<div>
			<h2>{cityName}</h2>
			<ul className="col-md-4 list-group">
				<li>{temperature}</li>
				<li>{description}</li>
				<li><img src={iconUrl} alt="weather icon"/></li>
			</ul>
		</div>
		)
}

export default WeatherList;