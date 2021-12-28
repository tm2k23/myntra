// this component is to display price filter
import React from 'react';
import './Filters.css';
import {filterPrices} from '../../utils/FilterPrices';
import {checkPriceInFilter} from '../../helpers/selectors';
export default function Price({activeFilter}) {
    return (
        <div className=" specific-filter-container " >
            <div className="filter-title" >PRICE</div>
            {
                filterPrices.map( price => {
                    console.log( activeFilter , price );    
                    return (
                        <label className="filter-label" >
                            <input 
                                type="checkbox" 
                                name="price"
                                value={price}
                                checked={checkPriceInFilter(price , activeFilter)}
                            ></input>
                            <span className="filter-name">
                                Rs. {price.start} to Rs. {price.end}
                            </span>
                        </label>
                    )
                })
            }
        </div>
    )
}
