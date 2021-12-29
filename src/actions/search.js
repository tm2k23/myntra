export const SEARCH = "SEARCH";
export const TOGGLE_SEARCH_STATE = "TOGGLE_SEARCH_STATE";
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
export const toggleSearchState = ( isSearchActive ) => {
    return {
        type: TOGGLE_SEARCH_STATE,
        isSearchActive : isSearchActive
    }
}
