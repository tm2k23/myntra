import React from 'react'
import './WishListContainer.css'
import {WishListItemCard} from '../../components/index';
import {useSelector} from 'react-redux';
export default function WishListContainer() {
    const products = useSelector(state => state.wishlistStore);
    return (
        <div className="wishlist-container flex-row " >
            {
                products.map((product,index) =>{
                    return (
                        <WishListItemCard item={product} />
                    )
                })
            }
        </div>
    )
}