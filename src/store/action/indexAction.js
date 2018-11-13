import axios from  'axios'

export const getUsers = () => {
    return (dispatch, getState) => {
        dispatch({ type: "REQUEST_GET_TODO" })
        axios({
            method: "get",
            url: "https://api.github.com/users?page=2&per_page=100",
            headers: {
                "Authorization": "token 87612c7db17941a8b863b26abcf34f198af85404"
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