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
import {checkPriceInFilter} from '../helpers/selectors';
const defaultFilterState = {
    gender : "Male",
    discount : 50,
    color : ["White","Blue"],
    price : [
        {
            start : 2000,
            end : 3000
        },
        {
            start : 3000,
            end : 4000
        },
        {
            start : 4000,
            end : 5000
        }
    ],
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
                price : state.price.filter(price => checkPriceInFilter(price , action.price)===false)
            }
        case CLEAR_ALL_FILTERS :
            return defaultFilterState
        default :
            return state;
    }
}