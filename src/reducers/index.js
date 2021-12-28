import {combineReducers} from 'redux';

import modals from './modals';
import bag from './bag';
import products from './products';
import { wishlist } from './wishlist';

const reducer = combineReducers({
    modalsStore : modals,
    bagStore : bag,
    productStore : products,
    wishlistStore : wishlist
});

export default reducer;


