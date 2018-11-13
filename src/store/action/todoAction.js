import axios from  'axios'

export const getTodo = () => {
    return (dispatch, getState) => {
        dispatch({ type: "REQUEST_GET_TODO" })
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/todos"
        })
        .then((result) => {
            console.log('ini result',result.data)
            dispatch({ type: 'GET_TODO', payload: result.data})
            // result.data.forEach(element => {
            //     // console.log('ini element',element.completed)
            //     if (element.completed == true) {
            //         dispatch({ type: "DONE_TODO", payload: element})
            //     } else if (element.completed == false) {
            //         dispatch({ type: "NOT_DONE_TODO", payload: element})
            //     } else {
            //         dispatch({ type: 'GET_TODO', payload: element})
            //     }
            // });
        })
        .catch((err) => {
            console.log(err)
        })
    }
}