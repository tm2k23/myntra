// this function checks if all the elements of target are present in arr
let checkIfAllElementsPresent = (arr, target) => target.every(v => arr.includes(v));

export function searcher( products , query ){
    console.log('searching');
    if( query !== null && query!=="" ){

        // split the query
        let splitedQuery = query.split(" ");
        for( let i = 0; i < splitedQuery.length; i++ ){
            splitedQuery[i] = splitedQuery[i].toLowerCase();
        }

        return products.filter(product => {
            var splitedProductInfo = product.productName.split(" ");
            splitedProductInfo.push(product.brandName.toLowerCase());
            for( let i = 0; i < splitedProductInfo.length; i++ ){
                splitedProductInfo[i] = splitedProductInfo[i].toLowerCase();
            }
            return checkIfAllElementsPresent(splitedProductInfo, splitedQuery);
        });
    }
    else{
        return products;
    }
}