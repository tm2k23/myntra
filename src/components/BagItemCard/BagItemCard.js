import React from 'react'
import './BagItemCard.css'
export default function BagItemCard({ item }) {
    function removeItemFromBagHandler(event){
        console.log(item);
        console.log("remove it from bag")
    }
    function wishlistItemFromBagHandler(event){
        console.log(item);
        console.log(" wishlist item from bag")
    }
    function unwishlistItemFromBagHandler(event){
        console.log(item);
        console.log(" unwish list item from bag");
    }
    function sizeChangeHnadler(event){
        console.log(item);
        console.log("change its size to" , event.target.value);
    }
    let isWishListed =true;
    const sizes=[38,40,42,44,46];
    const selectedSize=44;
    return (
        <div className="bag-item-card">
            <div className="bag-item-image-container">
                <img src={item.images[0]} alt="product" className="bag-item-image"/>
            </div>
            <div className="bag-item-details">
                <div className="bag-item-name">{item.productName}</div>
                <div className="bag-item-price">
                    <span className="bag-item-price" > Rs.{item.price} </span>
                    <span className="bag-item-original-price" > Rs.{item.originalPrice} </span> 
                    <span className="bag-item discount" > ({item.discountPercent}% OFF) </span> 
                </div>
                <div className="bag-item-action" >
                    <>
                        <button 
                            className="remove-item-button" 
                            onClick={removeItemFromBagHandler}
                        >
                            <i class="fas fa-times-circle"></i>
                        </button>
                        <button 
                            className="wishlist-item-from-bag wishlist-bag-button " 
                            onClick={wishlistItemFromBagHandler}
                            style={{display: isWishListed ? "none" : "block"}}
                        >
                            <i class="far fa-heart"></i>
                        </button>
                        <button 
                            className="unwishlist-item-from-bag wishlist-bag-button" 
                            onClick={unwishlistItemFromBagHandler}
                            style={{display: !isWishListed ? "none" : "block"}}
                        >
                            <i class="fas fa-heart"></i>
                        </button>
                    </>
                    <div className="bag-item-quantity">
                        <span className="quantity-title">Qty : </span> &nbsp; &nbsp;
                        <i class="fas fa-plus-square quantity-button "></i>
                        <span className="quantity-value"> 5 </span>
                        <i class="fas fa-minus-square quantity-button "></i>
                    </div>
                    <div className="bag-item-size" >
                        <span className="bag-item-size-title" >Size : </span>
                        {
                            sizes.map((size,index)=>{
                                return(
                                    <>
                                        <input 
                                            type="radio" 
                                            name={item.id +"-item-size"} 
                                            value={size} 
                                            className="size-radio-input"
                                            id={item.id + index}
                                            onChange={sizeChangeHnadler}
                                            checked={selectedSize === size}
                                        />
                                        <label className="bag-item-size-label" for={item.id + index} >
                                            <span className="bag-item-size-number" > {size} </span>
                                        </label>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
