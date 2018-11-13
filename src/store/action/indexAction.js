import axios from  'axios'

export const getUsers = () => {
    return (dispatch, getState) => {
        dispatch({ type: "REQUEST_GET_TODO" })
        axios({
            method: "get",
            url: "https://api.github.com/users?page=2&per_page=100",
            headers: {
                "Authorization": "token a49e16d6187a9904b1511f340bc4bb7f8521b477"
            }
        })
        .then((result) => {
            console.log('ini result',result.data)
            dispatch({ type: 'GET_USERS', payload: result.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}