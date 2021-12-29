export function searcher( products , query ){
    console.log('searching');
    if( query !== null && query!=="" ){
        return products.filter(product => {
            let splitedProductName = product.productName.split(" ");
            let splitedQuery = query.split(" ");
            for( let i = 0; i < splitedQuery.length; i++ ){
                splitedQuery[i] = splitedQuery[i].toLowerCase();
            }
            let isFound = false;
            splitedProductName.forEach(word => {
                if( splitedQuery.includes(word.toLowerCase()) ){
                    isFound = true;
                }
            });
            return isFound || product.brandName.toLowerCase() === query.toLowerCase();
        });
    }
    else{
        return products;
    }
}