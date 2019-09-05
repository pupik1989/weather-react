

const saveWeatherReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE':
            return state.concat(action.payload)
        case 'DELETE':
            return action.payload
        default:
            return state
    }
}

export default saveWeatherReducer