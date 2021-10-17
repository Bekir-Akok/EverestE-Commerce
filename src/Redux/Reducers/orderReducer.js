const initialState = {
    order: []
}

export const orderReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_ORDER':
            return { ...state, order: action.payload }

        default:
            return state
    }
}

export default orderReducer;