import React from 'react'
import {products} from '../../utils/Products';
import { ItemCard , Sort , ActiveFilters } from '../../components/index';
import './ProductConatiner.css'
export default function ProductContainer() {
    return (
        <div className="product-container" >  
            <div className="product-container-header flex-row " >
                <ActiveFilters/>
                <Sort/>
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
