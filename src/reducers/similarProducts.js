import {
    SHOW_SIMILAR_PRODUCTS,
    HIDE_SIMILAR_PRODUCTS,
} from '../actions/similarProducts';

const defaultSimilarProductsState = {
    product:null,
    isActive:false,
};

export default function similarProducts( state=defaultSimilarProductsState , action ){
    switch(action.type){
        case SHOW_SIMILAR_PRODUCTS:
            return {
                product: action.product,
                isActive:true
            }
        case HIDE_SIMILAR_PRODUCTS:
            return {
                product: null,
                isActive:false
            }
        default:
            return state;
    }
}