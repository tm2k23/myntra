import {similarMatchParameter} from "../utils/SimilarMatchParameter";
import { genderFilter } from "./selectors";
// find similar to item in products
/** Matches
 * similar match parameter 
 * gender
 * */
let purifyProperty = ( itemProperty ) => {
    // return all values from itemProprty which are in similarMatchParameter
    return itemProperty.filter( ( property ) => {
        return similarMatchParameter.includes( property.toLowerCase() );
    } )
}
let checkIfPropertyMatch = (arr1, arr2) => {
	let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!obj[arr1[i]]) {
            const element = arr1[i].toLowerCase();
            obj[element] = true;
        }
    }
	for (let j = 0; j < arr2.length ; j++) {
		if(obj[arr2[j].toLowerCase()]) {
			return true;
		}
	}
	return false;
}			

export function findSimilar( products , item ){
    let similarProducts = [];
    let itemProperty = purifyProperty(item.productName.split(" "));
    console.log(itemProperty);
    products = genderFilter( products , item.gender )
    for( let i = 0; i < products.length; i++){
        let productProperty = purifyProperty(products[i].productName.split(" "));
        if( checkIfPropertyMatch(productProperty , itemProperty) && products[i].id !== item.id ){
            similarProducts.push(products[i]);
        }
    }
    return similarProducts;
}