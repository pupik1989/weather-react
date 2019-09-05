import React, { useState } from 'react'
import Currently from './Currently'
import MassageModel from './MassageModel'
import axios from '../api/accuweather'

import { save, nextDays, addToFev } from '../actions'
import { useSelector, useDispatch } from 'react-redux'




const Weather = () => {
    const apikey = 'w4rkpIIvclWus56dp8OLX5lZdYFEyCU0'
    const fiveDays2 = useSelector(state => state.nextDays)
    const isDisabled = useSelector(state => state.clicked)
    const dispatch = useDispatch();

    const [term, setTerm] = useState("");
    const [today, setToday] = useState('');
    const [wroneSearch, setwroneSearch] = useState(false);
    const [savedItem, setsavedItem] = useState(false);


    const handleSearch = (e) => {
        e.preventDefault()
        fetchWeather(term)
    }

    const fetchWeather = async (term) => {
        if (term) {

            const autocomplete = await axios.get('/locations/v1/cities/autocomplete', {
                params: {
                    apikey: apikey,
                    q: term
                }
            });


            if (autocomplete.data[0]) {
                setwroneSearch(false)
                const LocationKey = autocomplete.data[0].Key


                const currentWeather = await axios.get('/currentconditions/v1/' + LocationKey, {
                    params: {
                        apikey
                    }
                })

                setToday(currentWeather.data[0])


                const fiveDays = await axios.get('/forecasts/v1/daily/5day/' + LocationKey, {
                    params: {
                        apikey
                    }
                })


                //save 5 days wether to array
                const temp = nextDays(fiveDays.data.DailyForecasts)
                dispatch(temp)

                //enable save button in new search
                const click = addToFev()
                dispatch(click)
            }else {
                setwroneSearch(true)
            }
        } 
    }

    //display current wether
    const TempConverter = (max, min) => {
        const sum = (max + min) / 2
        const obj = {
            sum: sum,
            max: max,
            min: min
        }
        return (
            <div className="temperature">
                <h3>{((5 / 9) * (obj.sum - 32)).toFixed(1) + 'C'}</h3>
                <h5>H {((5 / 9) * (obj.max - 32)).toFixed(1)} L {((5 / 9) * (obj.min - 32)).toFixed(1)}</h5>
            </div>
        )
    }

    //display wether for 5 days
    const handelDate = (time) => {
        const t = time.split('T07')[0]
        const arr = t.split('-')
        return <div className="date"><h3>{arr[1] + '/' + arr[2]}</h3></div>
    }

    //display description for 5 days
    const description = (d) => {
        return <h4>{d}</h4>
    }

    //save to reducer,disabled the button after saving data
    const saveData = () => {
        const item = save(today)
        dispatch(item)
        const click = addToFev()
        dispatch(click)
        setsavedItem(true)
    }

    //disply popup after saving
    const handleSaveNote = () => {
        setsavedItem(false)
    }


    return (
        <div>
            <div className="upper">
                <form onClick={handleSearch}>
                    <input
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                    <button>Search</button>

                    {wroneSearch && <p>Location Not Found</p>}
                </form>
                <div>
                    {today ? <button className="saveButton" disabled={isDisabled} onClick={saveData}>Save</button> : ''}
                    < MassageModel closeFunc={handleSaveNote} show={savedItem} />

                </div>
            </div>
           
                {today ? <Currently current={today} /> : ''}
           
            <div className="details">
                {
                    fiveDays2.map(o =>
                        <span
                            className="days"
                            key={o.EpochDate} >
                            {handelDate(o.Date)}
                            {TempConverter(o.Temperature.Maximum.Value, o.Temperature.Minimum.Value)}
                            {description(o.Day.IconPhrase)}
                            {console.log()}
                        </span>
                    )
                }
            </div>

        </div >
    )
}


export default Weather