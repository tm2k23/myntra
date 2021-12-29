import { products } from '../utils/Products';

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () =>{ 
    // console.log("fetching products");
    return {
        type: FETCH_PRODUCTS,
        products:products
    }
}