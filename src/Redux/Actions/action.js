/*Get Requests Actions */

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

export const getOrder = () => dispatch => {
    fetch('https://614efc3db4f6d30017b4842e.mockapi.io/api/v1//orderHistory')
        .then(response => response.json())
        .then(json => dispatch({ type: 'GET_ORDER', payload: json }))
}

/*Get Requests Actions*/

/*Post Request Actions */

export const postOrderAction = (basket, user) => dispatch => {
    fetch("https://614efc3db4f6d30017b4842e.mockapi.io/api/v1/orderHistory", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ orders: basket, user: user })
    })
}

/*Post Request Actions */


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
    return { type: 'EMPTY_BASKET' }
};

/*User Action */

export const isLogin = (user) => {
    return { type: 'SET_USER', payload: user }
}

/*User Action */