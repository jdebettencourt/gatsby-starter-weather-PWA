import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
  weatherData {
    latitude
    longitude
    timezone
    currently {
      time
      summary
      icon
      nearestStormDistance
      precipIntensity
      precipProbability
      temperature
      apparentTemperature
      dewPoint
      humidity
      pressure
      windSpeed
      windGust
      windBearing
      cloudCover
      uvIndex
      visibility
      ozone
    }
    daily {
      summary
      icon
      data {
        time
        summary
        icon
        sunriseTime
        sunsetTime
        moonPhase
        precipIntensity
        precipIntensityMax
        precipIntensityMaxTime
        precipProbability
        precipType
        temperatureHigh
        temperatureHighTime
        temperatureLow
        temperatureLowTime
        apparentTemperatureHigh
        apparentTemperatureHighTime
        apparentTemperatureLow
        apparentTemperatureLowTime
        dewPoint
        humidity
        pressure
        windSpeed
        windGust
        windGustTime
        windBearing
        cloudCover
        uvIndex
        uvIndexTime
        visibility
        ozone
        temperatureMin
        temperatureMinTime
        temperatureMax
        temperatureMaxTime
        apparentTemperatureMin
        apparentTemperatureMinTime
        apparentTemperatureMax
        apparentTemperatureMaxTime
      }
    }
  }
} `
}
    render={data => (
  <div>
    <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
{/*    <Link to="/">Home </Link> */}
    <h3><ul>
      <li><h3>Currently Time: {data.weatherData.currently.time}</h3></li> 
      <li><h3>Currently Summary: {data.weatherData.currently.summary}</h3></li> 
      <li><h3>Currently Temperature: {data.weatherData.currently.temperature}</h3></li> 
      <li><h3>cloudCover: {data.weatherData.currently.cloudCover}</h3></li> 
      <li><h3>latitude: {data.weatherData.latitude}</h3></li>
      <li><h3>longitude: {data.weatherData.longitude}</h3></li>
      <li><h3>Summary for Today: {data.weatherData.daily.summary}</h3></li>
      <li><h3>weather Forecast Arrays or Days: {Object.keys(data.weatherData.daily.data).length} </h3></li>
      <li><h3>daily weather Forecast items: {Object.keys(data.weatherData.daily.data[0]).length} </h3></li>
    </ul></h3>  
  </div>
    )}
  />
    )