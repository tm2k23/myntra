import {
    ADD_TO_BAG,
    REMOVE_FROM_BAG,
    EMPTY_BAG
} from '../actions/bag';

const defaultBagState = [];

export default function bag(state = defaultBagState, action) {
    switch (action.type) {
        case ADD_TO_BAG:
            return [
                ...state,
                action.item
            ];
        case REMOVE_FROM_BAG:
            return state.filter(item => item.id !== action.item.id);
        case EMPTY_BAG:
            return [];
        default:
            return state;
    }
}