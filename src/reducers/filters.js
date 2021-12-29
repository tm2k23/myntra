import {
    ADD_GENDER_FILTER,
    REMOVE_GENDER_FILTER,
    ADD_DISCOUNT_FILTER,
    REMOVE_DISCOUNT_FILTER,
    ADD_COLOR_FILTER,
    REMOVE_COLOR_FILTER,
    ADD_PRICE_FILTER,
    REMOVE_PRICE_FILTER,
    CLEAR_ALL_FILTERS
} from '../actions/filters';
const defaultFilterState = {
    gender : null,
    discount : null,
    color : [],
    price : [ ],
}

export default function filters( state = defaultFilterState , action){
    switch (action.type) {
        case ADD_GENDER_FILTER : 
            return {
                ...state, 
                gender : action.gender
            }
        case REMOVE_GENDER_FILTER : 
            return {
                ...state, 
                gender : null
            }
        case ADD_DISCOUNT_FILTER :
            return {
                ...state, 
                discount : action.discount
            }
        case REMOVE_DISCOUNT_FILTER :
            return {
                ...state,
                discount : null
            }
        case ADD_COLOR_FILTER :
            return {
                ...state,
                color : [...state.color, action.color]
            }
        case REMOVE_COLOR_FILTER :
            return {
                ...state,
                color : state.color.filter(color => color !== action.color)
            }
        case ADD_PRICE_FILTER :
            return {
                ...state,
                price : [...state.price, action.price]
            }
        case REMOVE_PRICE_FILTER :
            return {
                ...state,
                price : state.price.filter(price => JSON.stringify(action.price) !== JSON.stringify(price))
            }
        case CLEAR_ALL_FILTERS :
            return defaultFilterState
        default :
            return state;
    }
}