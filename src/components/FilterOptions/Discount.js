// this component is to display discount filter
import React from 'react';
export default function Discount() {
    const discounts = [ 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 ];
    return (
        <div className="discount-filter" >
            {
                discounts.map( discount => {
                    return (
                        <label>
                            <input type="radio" name="discount" value={discount}></input>
                            {discount}% and above
                        </label>
                    )
                })
            }
        </div>
    )
}
