import React from 'react'
import './ProductDetailsContainer.css'
export default function ProductDetailsContainer({product}) {
    const sizes=[38,40,42,44,46];
    let isAddedToBag=!!!!false;
    let isAddedToWishlist=!!!!!false;
    function addItemToWishListHandler(event) {
        console.log(product);
        console.log("add item to wishlist");
    }
    function removeItemFromWishlistHandler(event) {
        console.log(product);
        console.log("remove item from wishlist");
    }
    function addItemToBagHandler(event) {
        console.log(product);
        console.log("add item to bag");
    }
    function goToBagHandler(event) {
        console.log("go to bag");
    }
    function nFormatter(num, digits=1) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "M" },
            { value: 1e9, symbol: "G" },
            { value: 1e12, symbol: "T" },
            { value: 1e15, symbol: "P" },
            { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }
    return (
        <div className="product-details-container" >
            <h2 className="product-brandname" >{product.brandName}</h2>
            <p className="product-name" >{product.productName}</p>
            <div className="product-rating-count" >
                <span className="rating" >{product.rating}</span>
                <span className="star-icon" > <i class="fas fa-star"></i> | </span>
                <span className="no-of-reviews" >  {nFormatter(product.numberOfReviews,1)} Ratings </span>   
            </div>
            <div className="product-price-details" >
                <span className="final-price" > Rs. {product.price} </span> &nbsp;
                <span className="original-price" > Rs. {product.originalPrice} </span> &nbsp;
                <span className="discount-percentage" > ({product.discountPercent}% OFF) </span>
                <p className="tax-detail" > inclusive of all taxes </p>
            </div>
            <div className="product-size-details" >
                <p className="select-size-title" > SELECT SIZE </p>
                {
                    sizes.map((size,index)=>{
                        return(
                            <>
                                <input 
                                    type="radio" 
                                    name= {`size-${product.id}`}
                                    value={size} 
                                    className="size-radio-input"
                                    id={ product.id + index}
                                />
                                <label className="detail-size-label" for={product.id + index} >
                                    <span className="detail-size-number" > {size} </span>
                                </label>
                            </>
                        )
                    })
                }
            </div>
            <div className="product-actions" >
                <>
                    <button
                        style={isAddedToBag ? {display:'none'} : {display:'inline'} }
                        className="bag-handler-button"
                        onClick={addItemToBagHandler}
                    >
                        <i class="fas fa-shopping-bag"></i>
                        &nbsp;
                        ADD TO BAG
                    </button>
                    <button
                        style={isAddedToBag ? {display:'inline'} : {display:'none'} }
                        className="bag-handler-button"
                        onClick={goToBagHandler}
                    >
                        GO TO BAG
                        &nbsp;
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </>
                <>
                    <button
                        style={isAddedToWishlist ? {display:'none'} : {display:'inline'} }
                        className="wishlist-handler-button  add-to-wishlist-button"
                        onClick={addItemToWishListHandler}
                    >
                        <i class="far fa-heart"></i>
                        &nbsp;
                        WISHLIST
                    </button>
                    <button
                        style={isAddedToWishlist ? {display:'inline'} : {display:'none'} }
                        className="wishlist-handler-button remove-from-wishlist-button"
                        onClick={removeItemFromWishlistHandler}
                    >
                        <i class="fas fa-heart" style={{color:"red"}} ></i>
                        &nbsp;
                        WISHLISTED
                    </button>
                </>
                
            </div>
        </div>
    )
}
