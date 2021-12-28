import {combineReducers} from 'redux';

import modals from './modals';
import bag from './bag';
import products from './products';

const reducer = combineReducers({
    modalsStore : modals,
    bagStore : bag,
    productStore : products,
});

export default reducer;


