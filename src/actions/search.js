export const SEARCH = "SEARCH";

export const search = ( query ) => {
    if( query !== null && query!=="" ){
        return {
            type: SEARCH,
            query : query
        }
    }   
    else{
        return {
            type: SEARCH,
            query : null
        }
    }
}