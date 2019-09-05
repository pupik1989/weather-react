export const save = (items) => {
    return {
        type: 'SAVE',
        payload: items
    }
}

export const deleteItem = (items) => {
    return {
        type: 'DELETE',
        payload: items
    }
}

export const nextDays = (arr) => {
    return {
        type: 'nextDays',
        payload: arr
    }
}

export const addToFev = () => {
    return {
        type: 'CLICK'
    }
}