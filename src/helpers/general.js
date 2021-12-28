export const nFormatter = (num, digits=1) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export const isInWishList = ( wishList , item )  =>{
    let isPresent = false;
    wishList.forEach( wishItem => {
        if( wishItem.id === item.id ){
            isPresent = true;
        }
    });
    return isPresent;
}

export const isInBag = ( bag , item )  =>{
    let isPresent = false;
    bag.forEach( bagItem => {
        if( bagItem.id === item.id ){
            isPresent = true;
        }
    });
    return isPresent;
}

export const findTotal = ( bag ) => {
    let total = 0;
    bag.forEach( item => {
        total += item.quantity * item.price;
    });
    return total;
}