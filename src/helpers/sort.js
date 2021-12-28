export const sorter = ( products , sortParameter ) =>{
    if( sortParameter === 'Price: Low to High' ){
        return products.sort( ( a , b ) => {
            return a.price - b.price;
        } );
    }
    if( sortParameter === 'Price: High to Low' ){
        return products.sort( ( a , b ) => {
            return b.price - a.price;
        } );
    }
    if( sortParameter === 'Customer Rating' ){
        return products.sort( ( a , b ) => {
            return b.rating - a.rating;
        } );
    }
    if( sortParameter === 'Better Discount' ){
        return products.sort( ( a , b ) => {
            return b.discountPercent - a.discountPercent;
        } );
    }
    if( sortParameter === 'Most Reviewed' ){
        return products.sort( ( a , b ) => {
            return b.numberOfReviews - a.numberOfReviews;
        } );
    }
    if( sortParameter === 'Recently Added' ){
        return products.sort( ( a , b ) => {
            return b.postedAt - a.postedAt;
        } );
    }
    return products;
}