import React from 'react';

const WeatherList = (props) => {

	if (props.data.length === 0 || props.data === undefined){
		return <div>Loading</div>
	}

	//console.log(props.data);

	const weatherDetails = props.data.map((item, index) =>{
		return (
			<div key={index}>
				<h2>{item.city.name}</h2>
				<p>{item.list[0].main.temp}&#8457;</p>
				<p>{item.list[0].weather.description}</p>
				<img src={`http://openweathermap.org/img/w/${item.list[0].weather[0].icon}.png`} alt="weather icon" />
				<button type="button" onClick = {()=> props.updateCityToShowDetails(item.city.name)}>Details</button>
			</div>
			)
	})
	//let cityName = props.data.city.name;
	//let temperature = props.data.list[0].main.temp;
	//let description = props.data.list[0].weather[0].description;
	//let iconUrl = `http://openweathermap.org/img/w/${props.data.list[0].weather[0].icon}.png`;

	return (
		<div>
			{weatherDetails}
		</div>
		)
}

export default WeatherList;