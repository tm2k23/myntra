import React from 'react'
import './ActiveFilters.css'
import { useDispatch , useSelector } from 'react-redux'
import { 
    removeGenderFilter , 
    removePriceFilter , 
    removeDiscountFilter , 
    removeColorFilter 
} from '../../actions/filters'
export default function ActiveFilter() {
    const activeGenderFilter=[];
    const activeDiscountFilter=[];
    const activeColorFilter=[];
    const activePriceFilter=[];
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filtersStore);
    const {gender , discount , color , price }  = filters;
    if(gender) activeGenderFilter.push(gender);
    if(discount) activeDiscountFilter.push(discount);
    color.forEach( (color) => {
        activeColorFilter.push( color );
    } )
    price.forEach( (price) => {
        activePriceFilter.push( price );
    } ) 
    return (
        <div className="active-filters flex-row" >
            {
                activeGenderFilter.map( (gender,key) =>{
                    return (
                        <div 
                            className="active-filter-name flex-row" 
                        >
                            {gender}
                            &nbsp; &nbsp;
                            <span
                                onClick={()=>dispatch(removeGenderFilter(gender))}
                            >
                                <i class="fas fa-times remove-filter"></i>
                            </span>
                        </div>
                    )
                } )
            }
            {
                activeDiscountFilter.map( (discount,key) =>{
                    return (
                        <div 
                            className="active-filter-name flex-row" 
                        >
                            {discount}% and above
                            &nbsp; &nbsp;
                            <span
                                onClick={()=>dispatch(removeDiscountFilter(discount))}
                            >
                                <i class="fas fa-times remove-filter"></i>
                            </span>
                        </div>
                    )
                } ) 
            }
            {
                activeColorFilter.map( (color,key) =>{
                    return (
                        <div 
                            className="active-filter-name flex-row" 
                        >
                            {color}
                            &nbsp; &nbsp;
                            <span
                                onClick={()=>dispatch(removeColorFilter(color))}
                            >
                                <i class="fas fa-times remove-filter"></i>
                            </span>
                        </div>
                    )
                } )
            }
            {
                activePriceFilter.map( (price,key) =>{
                    return (
                        <div
                            className="active-filter-name flex-row"
                            key = {key}
                        >
                            Rs. {price.start} to Rs. {price.end}
                            &nbsp; &nbsp;
                            <span
                                onClick={()=>dispatch(removePriceFilter(price))}
                            >
                                <i class="fas fa-times remove-filter"></i>
                            </span>
                        </div>
                    )
                })
            }

        </div>
    )
}
