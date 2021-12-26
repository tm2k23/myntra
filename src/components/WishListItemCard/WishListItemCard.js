import React from 'react'
import './WishListItemCard.css'
export default function WishListItemCard({ item }) {
    function moveItemToBagHandler(event){
        console.log(item);
        console.log("move it to bag");
    }
    function removeItemFromWishListHandler(event){
        console.log(item);
        console.log("remove it from wishlist");
    }
    return (
        <div className="wishlist-item-card">
            <div className="wishlist-item-image-container">
                <img src={item.images[0]} alt="product" className="wishlist-item-image"/>
            </div>
            <div className="wishlist-item-details flex-column ">
                <div className="wishlist-item-name">{item.productName}</div>
                <div className="wishlist-item-price">
                    <span className="wishlist-item-price" > Rs.{item.price} </span>
                    <span className="wishlist-item-original-price" > Rs.{item.originalPrice} </span> 
                    <span className="wishlist-item discount" > ({item.discountPercent}% OFF) </span> 
                </div>
            </div>
            <div className="wishlist-item-action center" >
                <button 
                    className="remove-item-button" 
                    onClick={removeItemFromWishListHandler}
                >
                    <i class="fas fa-times-circle"></i>
                </button>
                <button 
                    className="move-to-bag-button" 
                    onClick={moveItemToBagHandler}
                >
                    MOVE TO BAG
                </button>
            </div>
        </div>
    )
}
