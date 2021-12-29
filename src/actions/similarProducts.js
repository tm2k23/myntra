export const SHOW_SIMILAR_PRODUCTS = 'SHOW_SIMILAR_PRODUCTS';
export const HIDE_SIMILAR_PRODUCTS = 'HIDE_SIMILAR_PRODUCTS';

export const showSimilarProducts = ( product ) => {
    return {
        type : SHOW_SIMILAR_PRODUCTS,
        product : product,
    }
}
export const hideSimilarProducts = () => {
    return {
        type : HIDE_SIMILAR_PRODUCTS,
    }
}