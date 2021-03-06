const intiateState = {
    users: [],
    isLoading: true,
}

const indexReduer = (state=intiateState, action) => {
    switch (action.type) {
        case 'GET_USERS':
        return {
            ...state,
            users: action.payload,
            isLoading: false
        }
        default: 
            return state
    }
}

export default indexReduer