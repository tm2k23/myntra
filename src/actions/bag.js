export const ADD_TO_BAG = "ADD_TO_BAG";
export const REMOVE_FROM_BAG = "REMOVE_FROM_BAG";
export const EMPTY_BAG = "EMPTY_BAG";
export const addItemToBag = (item) => {
    console.log( "Add" , item , "to bag");
    return {
        type: ADD_TO_BAG,
        item
    }
}
export const removeItemFromBag = (item) => {
    console.log( "Remove" , item , "from bag");
    return {
        type: REMOVE_FROM_BAG,
        item
    }
}
export const emptyBag = () => {
    console.log( "Empty bag");
    return {
        type: EMPTY_BAG
    }
}