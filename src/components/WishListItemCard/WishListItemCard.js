import React from 'react'
import './WishListItemCard.css'
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addItemToWishlist,removeItemFromWishlist} from '../../actions/wishlist';
import {addItemToBag} from '../../actions/bag';
export default function WishListItemCard({ item }) {
    const dispatch = useDispatch();
    function moveItemToBagHandler(event){
        console.log(item);
        console.log("move it to bag");
    }
    return (
        <div className="wishlist-item-card">
            <Link to={`/${item.id}`}>
                <div className="wishlist-item-image-container">
                    <img src={item.images[0]} alt="product" className="wishlist-item-image"/>
                </div>
                <div className="wishlist-item-details flex-column ">
                    <div className="wishlist-item-name">{item.productName}</div>
                    <div className="wishlist-item-price">
                        <span className="wishlist-item-price" > Rs.{item.price} </span>
                        <span className="wishlist-item-original-price" > Rs.{item.originalPrice} </span> 
                        <span className="wishlist-item discount" > ({item.discountPercent} %) <span className="wishlist-item-percent-off" >OFF</span></span> 
                    </div>
                </div>
            </Link>
            <div className="wishlist-item-action center" >
                <button 
                    className="remove-item-button" 
                    onClick={()=> dispatch(removeItemFromWishlist(item))} 
                >
                    <i class="fas fa-times-circle"></i>
                </button>
                <button 
                    className="move-to-bag-button" 
                    onClick={()=> { dispatch(addItemToBag(item)); }}
                >
                    MOVE TO BAG
                </button>
            </div>
        </div>
    )
}
