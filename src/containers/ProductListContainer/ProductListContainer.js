import React from 'react'
import { ItemCard , Sort , ActiveFilters } from '../../components/index';
import './ProductListConatiner.css'
export default function ProductListContainer( {products} ) {
    return (
        <div className="product-container" >  
            <div className="product-container-header flex-column " >
                <Sort/>
                <ActiveFilters/>
            </div>
            {
                products.map((item, index) => {
                    return (
                        <ItemCard key={index} item={item} />
                    )
                })
            }
        </div>
    )
}
