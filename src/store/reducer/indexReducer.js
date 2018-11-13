const intiateState = {
    users: [],
    todos: [],
    doneTodos: [],
    notDoneTodos: [],
    isLoading: false
}

const indexReduer = (state=intiateState, action) => {
    switch (action.type) {
        case 'GET_USERS':
        return {
            ...state,
            users: action.payload,
        }
        case 'GET_TODO':
        return {
            ...state,
            todos: action.payload,
        }
        case 'DONE_TODO':
        return {
            ...state,
            doneTodos: action.payload
        }
        case 'NOT_DONE_TODO':
        return {
            ...state,
            notDoneTodos: action.payload
        }
        case 'REQUEST_GET_TODO':
        return {
            ...state,
            isLoading: true
        }
        default: 
            return state
    }
}

export default indexReduer