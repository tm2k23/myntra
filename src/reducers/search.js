import { SEARCH } from "../actions/search";

const initialSearchState = null;

export default function search( state = initialSearchState , action ){
    switch ( action.type ) {
        case SEARCH:
            return action.query;
        default:
            return state;
    }
}