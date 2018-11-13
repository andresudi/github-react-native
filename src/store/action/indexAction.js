import axios from  'axios'
import isToken from '../reducer/isToken'

export const getUsers = () => {
    return (dispatch) => {
        axios({
            method: "get",
            url: "https://api.github.com/users?page=2&per_page=100",
            headers: {
                "Authorization": isToken
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