import React from 'react'
import './ProductSampleCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function ProductSampleCarousel({product}) {
    return (
        <div className="product-sample-carousel" >
            <Carousel 
                showThumbs={false} 
                showArrows={false}
                showStatus={false}
            >
                {
                    product.images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image} alt={product.productName} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
