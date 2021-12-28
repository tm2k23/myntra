export const ADD_GENDER_FILTER = "ADD_GENDER_FILTER"
export const REMOVE_GENDER_FILTER = "REMOVE_GENDER_FILTER"
export const ADD_DISCOUNT_FILTER = "ADD_DISCOUNT_FILTER"
export const REMOVE_DISCOUNT_FILTER = "REMOVE_DISCOUNT_FILTER"
export const ADD_COLOR_FILTER = "ADD_COLOR_FILTER"
export const REMOVE_COLOR_FILTER = "REMOVE_COLOR_FILTER"
export const ADD_PRICE_FILTER = "ADD_PRICE_FILTER"
export const REMOVE_PRICE_FILTER = "REMOVE_PRICE_FILTER"
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS"

export const addGenderFilter = ( gender ) => {
    return ({
        type: ADD_GENDER_FILTER,
        gender: gender
    })
}
export const removeGenderFilter = ( gender ) =>{
    return ({
        type: REMOVE_GENDER_FILTER,
        gender : null
    })
}
export const addDiscountFilter = ( discount ) => {
    return ({
        type: ADD_DISCOUNT_FILTER,
        discount : discount
    })
}
export const removeDiscountFilter = (discount) => {
    return ({
        type: REMOVE_DISCOUNT_FILTER,
        discount : null
    })
}
export const addColorFilter = ( color ) => {
    return ({
        type: ADD_COLOR_FILTER,
        color : color
    })
}
export const removeColorFilter = ( color ) => {
    return ({
        type: REMOVE_COLOR_FILTER,
        color : color
    })
}
export const addPriceFilter = ( price ) => {
    return ({
        type: ADD_PRICE_FILTER,
        price : price
    })
}
export const removePriceFilter = ( price ) => {
    return ({
        type: REMOVE_PRICE_FILTER,
        price : price
    })
}
export const clearAllFilters = () => {
    return ({
        type: CLEAR_ALL_FILTERS
    })
}
