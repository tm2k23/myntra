import {combineReducers} from 'redux';

import modals from './modals';

const reducer = combineReducers({
    modalsStore : modals,
});

export default reducer;


