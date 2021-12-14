import React from 'react'
import {products} from '../../utils/Products';
import { ItemCard } from '../../components/index';
export default function ProductContainer() {
    return (
        <div className="flex-row" >
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
