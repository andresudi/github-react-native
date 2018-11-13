const intiateState = {
    users: [],
    isLoading: false
}

const indexReduer = (state=intiateState, action) => {
    switch (action.type) {
        case 'GET_USERS':
        return {
            ...state,
            users: action.payload,
        }
        default: 
            return state
    }
}

export default indexReduer