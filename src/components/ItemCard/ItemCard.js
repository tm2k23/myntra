import React from 'react'
import './ItemCard.css'
export default function ItemCard( {item , index} ) {
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
    function addToWishListHandler( event ){
        console.log(item);
        console.log( " Added to wishlist");
    }
    function removeFromWishListHandler( event ){
        console.log(item);
        console.log( " removed from wishlist");
    }
    var isWishlisted = false;
    return (
        <div className="item-card" key={index}>
            <div className="item-image">
                <img src={(item.images)} alt={item.name}/>
                <div className="rating-detail" > 
                    {item.rating} <i class="fas fa-star star"></i> | {nFormatter(item.numberOfReviews)}
                </div>
            </div>
            <div className="item-info">
                <p className="brand-name" >{item.brandName}</p>
                <p className="product-name" >{item.productName}</p>
                <p className="price-details" >
                    <span className="price" >Rs. {item.price}</span> 
                    &nbsp;
                    <span className="actual-price" >Rs. {item.originalPrice}</span> 
                    &nbsp;
                    <span className="discount" >({item.discountPercent}% OFF)</span> 
                </p>
            </div>
            <div className="item-action">
                <button 
                    className="wishlist-button add-to-wishlist center" 
                    onClick={ addToWishListHandler }
                    style={{display: isWishlisted ? 'none' : 'block'}}
                >
                    <i class="far fa-heart heart-add"></i>
                    &nbsp;
                    WISHLIST
                </button>
                <button 
                    className="wishlist-button remove-from-wishlist center" 
                    onClick={ removeFromWishListHandler }
                    style={{display: !isWishlisted ? 'none' : 'block'}}
                >
                    <i class="far fa-heart heart-remove"></i>
                    &nbsp;
                    WISHLISTED
                </button>
                <p className="available-sizes" >
                    <span
                        style={{color: 'black'}}
                    >
                        Sizes
                    </span>
                    : 38, 40, 42, 44, 46
                </p>
            </div>
        </div>
    )
}