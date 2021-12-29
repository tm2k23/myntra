// this component is to display discount filter
import React from 'react';
import { useDispatch } from 'react-redux';
import './Filters.css';
import { addDiscountFilter } from '../../actions/filters';
export default function Discount({activeFilter}) {
    const discounts = [ 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 ];
    const dispatch = useDispatch();
    return (
        <div className=" specific-filter-container " >
            <div className="filter-title" >DISCOUNT RANGE</div>
            {
                discounts.map( discount => {
                    return (
                        <label className="filter-label" >
                            <input 
                                type="radio" 
                                name="discount" 
                                value={discount}
                                checked={activeFilter == discount}
                                onClick={ (event) => dispatch( addDiscountFilter( event.target.value)) }
                            ></input>
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
