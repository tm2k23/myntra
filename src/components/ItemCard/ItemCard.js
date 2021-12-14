import React from 'react'
import './ItemCard.css'
export default function ItemCard( {item , index} ) {
    return (
        <div className="item-card" key={index}>
            {/* <div className="item-image">
                
            </div> */}
            <img src={(item.images)} alt={item.name} className="item-image"/>
            <div className="item-info">
                <p className="brand-name" >{item.brandName}</p>
                <p className="product-name" >{item.productName}</p>
                <p>
                    <span className="price" >Rs. {item.price}</span> 
                    &nbsp;
                    <span className="actual-price" >Rs. {item.originalPrice}</span> 
                    &nbsp;
                    <span className="discount" >({item.discountPercent}% OFF)</span> 
                </p>
            </div>
        </div>
    )
}
