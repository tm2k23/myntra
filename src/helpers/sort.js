export const sorter = ( products , sortParameter ) =>{
    if( sortParameter === 'price' ){
        return products.sort( ( a , b ) => {
            return a.price - b.price;
        } );
    }
    if( sortParameter === 'name' ){
        return products.sort( ( a , b ) => {
            return a.name.localeCompare( b.name );
        } );
    }
    if( sortParameter === 'rating' ){
        return products.sort( ( a , b ) => {
            return b.rating - a.rating;
        } );
    }
    return products;
}  