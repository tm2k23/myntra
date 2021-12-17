import React from 'react'
import {products} from '../../utils/Products';
import { ItemCard } from '../../components/index';
import './ProductConatiner.css'
export default function ProductContainer() {
    return (
        <div className="product-container" >
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
