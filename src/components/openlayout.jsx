import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
query {
   openWeather {
    coord {
      lon
      lat
    }
    weather {
      id
      main
      description
      icon  
    }
    main{
      temp
      pressure
      humidity
      temp_min
      temp_max
    }
    dt
    sys{
      type
      id
      message
      country
      sunrise
      sunset  
    }
    timezone
    name
    id
    cod
  }
  } 
`
}
      

  
  render={data => (
  <div>
        <Link to="/" style={{ float: `right`}}>
      Home
    </Link>.
    {children}
        {/* <Link to="/">Home    </Link>  */}
     <h3><ul>
     <li><h3>City Name: {data.openWeather.name}</h3></li>
     <li><h4>DateTime: { Date(data.openWeather.dt*1000) }</h4></li>
     <li><h3>DateTime Epoch Secs: {data.openWeather.dt} </h3></li>
            <li><h3>Main temp: {data.openWeather.main.temp}</h3></li>
            <li><h3>City Coord lat: {data.openWeather.coord.lat}</h3></li>
            <li><h3>City Coord lon: {data.openWeather.coord.lon}</h3></li>
            <li><h3>weatherInfoArrays: {Object.keys(data.openWeather.weather).length} </h3></li>            
            <li><h3>weatherInfoItemsInZerothArray: {Object.keys(data.openWeather.weather[0]).length} </h3></li>
            <li><h3>...weather[0].id: {data.openWeather.weather[0].id } </h3></li>
            <li><h3>...weather[0].main: {data.openWeather.weather[0].main } </h3></li>
            <li><h3>...weather[0].description: {data.openWeather.weather[0].description } </h3></li>
            <li><h3>...weather[0].icon: {data.openWeather.weather[0].icon } </h3></li>
  
             </ul></h3>
       </div> 
      )} 
     /> 
     )  
       