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