import { LOADING, SUCCESS, ERROR } from '../reducers/partReducer'
import axios from 'axios'

export const getParts = () => (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:5000')
        .then(res => {
            dispatch({type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: ERROR, payload: err.message})
        })
}