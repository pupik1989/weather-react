

const nextDaysReducer = (state = [], action) => {
    switch (action.type) {
        case 'nextDays':
            return action.payload
        default:
            return state
    }
}
export default nextDaysReducer