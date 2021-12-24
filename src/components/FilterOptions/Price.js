// this component is to display price filter
import React from 'react';
import './Filters.css';
import {filterPrices} from '../../utils/FilterPrices';
export default function Price() {
    return (
        <div className=" specific-filter-container " >
            <div className="filter-title" >PRICE</div>
            {
                filterPrices.map( price => {
                    return (
                        <label className="filter-label" >
                            <input type="checkbox" name="price"></input>
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
