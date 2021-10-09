
const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_BASKET_ITEM':
            return { ...state, basket: action.payload }

        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: state.basket.map(product =>
                    product.id === action.payload.id
                        ? { ...product, selected: true }
                        : product,
                )
            }

        case 'ADD_QUANTITY':
            return {
                ...state,
                basket: state.basket.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product,
                )
            }

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.map(product =>
                    product.id === action.payload.id
                        ? { ...product, selected: false, quantity: 0 }
                        : product,
                ),
            };
        case 'SUB_QUANTITY':
            return {
                ...state,
                basket: state.basket.map(product =>
                    product.id === action.payload.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                        }
                        : product,
                ),
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: state.basket.map(product =>
                    product.selected
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            };
        default:
            return state
    }
}


