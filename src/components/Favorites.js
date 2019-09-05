import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../style.css'

import { deleteItem } from '../actions'



const Favorites = () => {
    const dispatch = useDispatch();
    const savedItems = useSelector(state => state.saveWeather)

    //delete item from Favorites
    const deleteSelectedItem = (selected) => {
        const arr = savedItems.filter(item => item !== selected)
        const a = deleteItem(arr)
        dispatch(a)
    }


    return (
        <div>
            <h1 className="favorites">Favorites</h1>
            <div>
                <ul>
                    {savedItems.map(item =>
                       
                            <li
                                key={item.Link}>
                                <button className="deleteItem" onClick={(e) => deleteSelectedItem(item)}>Delete</button>
                                <p>{item.Temperature.Metric.Value + 'C - ' + item.WeatherText}</p>
                            </li>
                       
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Favorites