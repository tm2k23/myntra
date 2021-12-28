import React from 'react'
import './ItemCard.css'
import {ViewSimilarButton} from '../index';
import {Link } from "react-router-dom";
import { addItemToWishlist , removeItemFromWishlist } from '../../actions/wishlist';
import { useDispatch , useSelector } from 'react-redux'; 
import { nFormatter , isInWishList } from '../../helpers/general';
export default function ItemCard( {item , index} ) {
    
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlistStore);
    let isWishlisted = isInWishList( wishlist , item );
    return (
        <div className="item-card" key={index}>
            <div className="item-image">
                <Link to={`/${item.id}`}>
                    <img src={(item.images)} alt={item.name}/>
                </Link>
                <div className="rating-detail" > 
                    {item.rating} <i class="fas fa-star star"></i> | {nFormatter(item.numberOfReviews)}
                </div>
                <div>
                    <ViewSimilarButton item={item} externalClassName="view-similar-mobile-button" />
                </div>
            </div>
            <Link to={`/${item.id}`}>
                <div className="item-info">
                    <p className="brand-name" >{item.brandName}</p>
                    <p className="product-name" >{item.productName}</p>
                    <p className="price-details" >
                        <span className="price" >Rs. {item.price}</span> 
                        &nbsp;
                        <span className="actual-price" >Rs. {item.originalPrice}</span> 
                        &nbsp;
                        <span className="discount" >({item.discountPercent}% <span className="off" >OFF</span>)</span> 
                    </p>
                </div>
            </Link>
            <div className="item-action">
                <ViewSimilarButton item={item} externalClassName="item-card-similar-button"/>
                <button 
                    className="wishlist-button add-to-wishlist center" 
                    onClick={()=> dispatch(addItemToWishlist(item))}
                    style={{display: isWishlisted ? 'none' : 'block'}}
                >
                    <i class="far fa-heart heart-add"></i>
                    &nbsp;
                    WISHLIST
                </button>
                <button 
                    className="wishlist-button remove-from-wishlist center" 
                    onClick={()=> dispatch(removeItemFromWishlist(item))}
                    style={{display: !isWishlisted ? 'none' : 'block'}}
                >
                    <i 
                        class="fas fa-heart heart-remove"
                        style={{color: 'red'}}
                    ></i>
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
            <div className="item-list-mobile-action" >
                <button 
                    onClick={()=> dispatch(addItemToWishlist(item))}
                    style={{display: isWishlisted ? 'none' : 'block'}}
                >
                    <i class="far fa-heart heart-add"></i>
                </button>
                <button 
                    onClick={()=> dispatch(removeItemFromWishlist(item))}
                    style={{display: !isWishlisted ? 'none' : 'block'}}
                >
                    <i class="fas fa-heart heart-remove"></i>
                </button>
            </div>
        </div>
    )
}
