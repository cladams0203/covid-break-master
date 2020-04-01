export const ADD_CART = "ADD_CART"
export const REMOVE_CART = "REMOVE_CART"

export const initialState = {
    items: [],
    total: 0
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case REMOVE_CART:
            return {
                ...state,
                items: state.items.filter(item => {
                    if (item.id == action.payload.id && item.name == action.payload.name) {
                        return null
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}