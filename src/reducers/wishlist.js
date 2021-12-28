import{
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
}   from '../actions/wishlist';

const defaultWishlistState=[];

export const wishlist = ( state = defaultWishlistState , action )=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            return [...state, action.item];
        case REMOVE_FROM_WISHLIST:
            return state.filter(item => item.id !== action.item.id);
        default:
            return state;
    }
}