export const ADD_TO_WISHLIST = "ADD_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const addItemToWishlist = (item) => {
    // console.log( "Add" , item , "to wishlist");
    return {
        type: ADD_TO_WISHLIST,
        item : item
    }
}
export const removeItemFromWishlist = (item) => {
    // console.log( "Remove" , item , "from wishlist");
    return {
        type: REMOVE_FROM_WISHLIST,
        item : item
    }
}
