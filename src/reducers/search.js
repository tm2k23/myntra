import { SEARCH } from "../actions/search";
import { TOGGLE_SEARCH_STATE } from "../actions/search";

const initialSearchState = {
    query: null,
    isSearchActive: false
};

export default function search( state = initialSearchState , action ){
    switch ( action.type ) {
        case SEARCH:
            return {
                ...state,
                query: action.query
            };
        case TOGGLE_SEARCH_STATE:
            if( ! action.isSearchActive ){
                return {
                    isSearchActive : false,
                    query : null
                }
            }
            else{
                return {
                    ...state,
                    isSearchActive: action.isSearchActive
                };
            }
        default:
            return state;
    }
}