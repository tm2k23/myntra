import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/modals';

const defaultModalState = {
    isActive : false,
    container : null,
};

export default function modals(state = defaultModalState, action) {
    // console.log(state);
    switch (action.type) {
        case OPEN_MODAL:
            return {
                isActive : true,
                container : action.container
            };
        case CLOSE_MODAL:
            return {
                isActive : false,
                container : null
            };
        default:
            return state;
    }
}