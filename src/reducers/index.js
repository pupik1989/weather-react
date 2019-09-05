import saveWeatherReducer from './saveWeather'
import clickedReducer from './clicked'
import nextDaysReducer from './nextDays'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    saveWeather: saveWeatherReducer,
    clicked: clickedReducer,
    nextDays: nextDaysReducer
})

export default allReducers