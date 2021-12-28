import {
    SORT
} from '../actions/sort';

const defaultSortState = null;

export default function sort( state = defaultSortState , action ){
    switch(action.type){
        case SORT:
            return action.sortBy;
        default:
            return state;
    }
}