/*Http Requests Actions */

export const getProducts = () => dispatch => {
    return (
        fetch('https://614efc3db4f6d30017b4842e.mockapi.io/api/v1//allProducts')
            .then(response => response.json())
            .then(json => dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: json }))
            .catch(error => dispatch({ type: 'GET_PRODUCTS_ERROR', payload: error }))
    )
}

export const getBasketItem = () => dispatch => {
    return (
        fetch('https://614efc3db4f6d30017b4842e.mockapi.io/api/v1//allProducts')
            .then(response => response.json())
            .then(json => dispatch({ type: 'GET_BASKET_ITEM', payload: json }))
    )
}

export const getCategories = () => dispatch => {
    return (
        fetch('https://614efc3db4f6d30017b4842e.mockapi.io/api/v1//categories')
            .then(response => response.json())
            .then(json => dispatch({ type: 'GET_CATEGORIES_SUCCESS', payload: json }))
            .catch(error => dispatch({ type: 'GET_CATEGORIES_ERROR', payload: error }))
    )
}

export const getComponents = () => dispatch => {
    return (
        fetch('https://614efc3db4f6d30017b4842e.mockapi.io/api/v1//components')
            .then(response => response.json())
            .then(json => dispatch({ type: 'GET_COMPONENTS_SUCCESS', payload: json }))
            .catch(error => dispatch({ type: 'GET_COMPONENTS_ERROR', payload: error }))
    )
}

/*Http Requests Actions*/


/*Basket Actions */


export const addToBasket = (product) => {
    return { type: 'ADD_TO_BASKET', payload: product }
};

export const addQuantity = (product) => {
    return { type: 'ADD_QUANTITY', payload: product }
};

export const removeFromBasket = (product) => {
    return { type: 'REMOVE_FROM_BASKET', payload: product }
};

export const subQuantity = (product) => {
    return { type: 'SUB_QUANTITY', payload: product }
};

export const emptyBasket = () => {
    return { type: 'EMPTY_BASKET'}
};