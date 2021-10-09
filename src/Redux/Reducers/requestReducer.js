
const initialState = {
    products: [],
    productsMessage: '',
    productsLoading: false,
    categories: [],
    categoriesMessage: '',
    categoriesLoading: false,
    components: [],
    componentsMessage: '',
    componentsLoading: false
}

export const requestReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload, productsLoading: true }

        case 'GET_PRODUCTS_ERROR':
            return { ...state, message: action.payload }

        case 'GET_CATEGORIES_SUCCESS':
            return { ...state, categories: action.payload, categoriesLoading: true }

        case 'GET_CATEGORIES_ERROR':
            return { ...state, productsMessage: action.payload }

        case 'GET_COMPONENTS_SUCCESS':
            return { ...state, components: action.payload, componentsLoading: true }

        case 'GET_COMPONENTS_ERROR':
            return { ...state, componentsMessage: action.payload }

        default:
            return state
    }
}

