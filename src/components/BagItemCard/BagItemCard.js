import React from 'react'
import './BagItemCard.css'
import {Link} from 'react-router-dom';
import { setQuantity , setSize , removeItemFromBag } from '../../actions/bag';
import { addItemToWishlist , removeItemFromWishlist} from '../../actions/wishlist';
import { isInWishList} from '../../helpers/general';
import {useDispatch , useSelector} from 'react-redux';
export default function BagItemCard({ item }) {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlistStore);
    console.log(item);
    let isWishListed = isInWishList( wishlist,item )
    const sizes=[38,40,42,44,46];
    return (
        <div className="bag-item-card"  >
            <Link to={`/${item.id}`}>
                <div className="bag-item-image-container">
                    <img src={item.images[0]} alt="product" className="bag-item-image"/>
                </div>
            </Link>
            <div className="bag-item-details">
                <Link to={`/${item.id}`}>
                    <div className="bag-item-name">{item.productName}</div>
                    <div className="bag-item-price">
                        <span className="bag-item-price" > Rs.{item.price} </span>
                        <span className="bag-item-original-price" > Rs.{item.originalPrice} </span> 
                        <span className="bag-item discount" > ({item.discountPercent}% OFF) </span> 
                    </div>
                </Link>
                <div className="bag-item-action" >
                    <>
                        <button 
                            className="remove-item-button" 
                            onClick={()=>dispatch(removeItemFromBag(item))}
                        >
                            <i class="fas fa-times-circle"></i>
                        </button>
                        <button 
                            className="wishlist-item-from-bag wishlist-bag-button " 
                            onClick={()=>dispatch(addItemToWishlist(item))}
                            style={{display: isWishListed ? "none" : "block"}}
                        >
                            <i class="far fa-heart"></i>
                        </button>
                        <button 
                            className="unwishlist-item-from-bag wishlist-bag-button" 
                            onClick={()=>dispatch(removeItemFromWishlist(item))}
                            style={{display: !isWishListed ? "none" : "block"}}
                        >
                            <i class="fas fa-heart"></i>
                        </button>
                    </>
                    <div className="bag-item-quantity">
                        <span className="quantity-title">Qty : </span> &nbsp; &nbsp;
                        <span
                            onClick={()=>dispatch(setQuantity(item, item.quantity-1))}
                        >
                            <i class="fas fa-minus-square quantity-button"></i>
                        </span>
                        <span className="quantity-value"> {item.quantity} </span>
                        <span
                            onClick={()=>dispatch(setQuantity(item, item.quantity+1))}
                        >
                        <i class="fas fa-plus-square quantity-button "></i>
                        </span>
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
                                            onClick={()=>dispatch(setSize(item, size))}
                                            checked={item.size === size}
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
