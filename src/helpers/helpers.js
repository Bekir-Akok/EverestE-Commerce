/*Selected item filtered*/
export const basketLength = (basket, setState) => {
    const newArr = []
    basket.filter(x => x.selected ? newArr.push(x) : null)
    setState(newArr)
}
/*Selected item filtered*/


/*basket length control*/
export const basketControl = (basket , dispatch , getBasketItem) => {
    return (
        basket.length === 0
            ? dispatch(getBasketItem())
            : null)
}
/*basket length control*/

/*add to card animation */
export const addToCardEffect = (cardText , cardImg , cardButton) => {
    cardText.current.style.display = 'none';
    cardImg.current.style.display = 'block';
    if(cardButton === undefined){
        
    }else {
        cardButton.current.style.backgroundColor = '#f5f5f5';
    }
    setTimeout(() => {
        cardText.current.style.display = 'block';
        cardImg.current.style.display = 'none';
        if(cardButton === undefined){
        
        }else {
            cardButton.current.style.backgroundColor = '#3d7c7d';
        }
    }, 500)
}
/*add to card animation */