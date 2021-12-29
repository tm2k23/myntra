export const ADD_TO_BAG = "ADD_TO_BAG";
export const REMOVE_FROM_BAG = "REMOVE_FROM_BAG";
export const EMPTY_BAG = "EMPTY_BAG";
export const SET_QUANTITY = "SET_QUANTITY";
export const SET_SIZE = "SET_SIZE";
export const addItemToBag = (item , size) => {
    // console.log( "Add" , item , "to bag");
    item.quantity = 1;
    item.size = size;
    return {
        type: ADD_TO_BAG,
        item : item
    }
}
export const removeItemFromBag = (item) => {
    // console.log( "Remove" , item , "from bag");
    return {
        type: REMOVE_FROM_BAG,
        item : item
    }
}
export const emptyBag = () => {
    // console.log( "Empty bag");
    return {
        type: EMPTY_BAG
    }
}
export const setQuantity = (item, quantity) => {
    // console.log("set quantity of ", item, " to ", quantity)
    if(quantity===0){
        return {
            type: REMOVE_FROM_BAG,
            item : item
        }
    }
    return {
        type: SET_QUANTITY,
        item : item,
        quantity : quantity,
    }
}
export const setSize = (item, size) => {
    // console.log("set size of ", item, " to ", size)
    return {
        type: SET_SIZE,
        item : item,
        size : size,
    }
}