
const initialState = {
    products: [],
    productsMessage: '',
    productsLoading: false,
}

export const requestReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload, productsLoading: true }

        case 'GET_PRODUCTS_ERROR':
            return { ...state, message: action.payload }

        default:
            return state
    }
}

