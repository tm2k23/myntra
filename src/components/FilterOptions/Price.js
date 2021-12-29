// this component is to display price filter
import React from 'react';
import './Filters.css';
import { useDispatch } from 'react-redux';
import {filterPrices} from '../../utils/FilterPrices';
import {checkPriceInFilter} from '../../helpers/selectors';
import { addPriceFilter , removePriceFilter} from '../../actions/filters';
export default function Price({activeFilter}) {
    const dispatch = useDispatch();
    function priceChangeHandler( price,event ){
        console.log(event);
        if(event.target.checked){
            dispatch( addPriceFilter( price ))
        }else{
            dispatch( removePriceFilter( price ))
        }
    }
    return (
        <div className=" specific-filter-container " >
            <div className="filter-title" >PRICE</div>
            {
                filterPrices.map( price => {
                    // console.log( activeFilter , price );    
                    return (
                        <label className="filter-label" >
                            <input 
                                type="checkbox" 
                                name="price"
                                value={price}
                                checked={checkPriceInFilter(price , activeFilter)}
                                onClick={(event) =>{priceChangeHandler(price,event)} }
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
