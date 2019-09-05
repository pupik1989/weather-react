import React from 'react'
import '../style.css'
const rain = require('../images/rain.png')
const sun = require('../images/sun.png')




const Currently = (props) => {
    return (
        <div className="currently">
            <div className="header">
                <h1 className={props.current.Temperature.Metric.Value > 20 ? 'sunny' : 'rainy'}>Current Weather</h1>
                <h2 className={props.current.Temperature.Metric.Value > 20 ? 'sunny' : 'rainy'}>{props.current.Temperature.Metric.Value}C</h2>
                <h3 className={props.current.Temperature.Metric.Value > 20 ? 'sunny' : 'rainy'}>{props.current.WeatherText}</h3>
            </div>
            <img src={props.current.Temperature.Metric.Value > 20 ? sun : rain} alt="" />
        </div>
    )
}

export default Currently