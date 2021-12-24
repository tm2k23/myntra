// this component is to display discount filter
import React from 'react';
import './Filters.css';
export default function Discount() {
    const discounts = [ 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 ];
    return (
        <div className=" specific-filter-container " >
            <div className="filter-title" >DISCOUNT RANGE</div>
            {
                discounts.map( discount => {
                    return (
                        <label className="filter-label" >
                            <input type="radio" name="discount" value={discount}></input>
                            <span className="filter-name">
                                {discount}% and above
                            </span>
                        </label>
                    )
                })
            }
        </div>
    )
}
