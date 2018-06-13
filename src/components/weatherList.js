import React from 'react';

const WeatherList = (props) => {
	//show loading message on load
	if (props.data.length === 0 || props.data === undefined){
		return <div className="text-center">Loading</div>
	}

	//loop through data from WeatherAPI and show a snippet of weather for each
	const weatherDetails = props.data.map((item, index) =>{
		return (
			<div className="tiles" key={index}>
				<h2>{item.city.name}</h2>
				<p>{item.list[0].main.temp}&#8457;</p>
				<p className="capitalize">{item.list[0].weather[0].description}</p>
				<button className="coralButton" type="button" onClick = {()=> props.updateCityToShowDetails(item.city.name)}>Details</button>
			</div>
			)
	})

	return (
		<div id="allCitiesContainer" className="flex">
			{weatherDetails}
		</div>
		)
}

export default WeatherList;