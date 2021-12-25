import React from 'react'
import './ProductSamplesContainer.css'
export default function ProductSamplesContainer({product}) {
    
    const images = product.images;
    return (
        <div className="product-samples-container flex-row" >
            {
                images.map((image , index) =>{
                    return (
                        <div className="sample-image-container" key="index">
                            <img src={image} alt="sample-image" className="sample-image"/>
                        </div>
                    )
                })
            }
        </div>
    )
}
