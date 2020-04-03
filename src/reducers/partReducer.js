export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR' 

const initialState = {
    parts:{},
    loading: false,
    errors:''
}

export function partReducer(state = initialState, action) {
    switch(action.type) {
        case LOADING :
            return {
                ...state,
                loading: true
            }
        case SUCCESS :
            return {
                ...state,
                parts: action.payload,
                loading: false
            }
        case ERROR :
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}