import {
    FETCH_PRODUCTS,
} from '../actions/products';

const defaultProductState = [];

export default function products( state = defaultProductState , action ){
    switch (action.type) {
        case FETCH_PRODUCTS:
            // console.log(action.products);
            return action.products;
        default:
            return state;
    }
}