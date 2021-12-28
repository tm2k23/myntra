import React from 'react'
import './ActiveFilters.css'
import { useDispatch , useSelector } from 'react-redux'
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
    color.map( (color) => {
        activeColorFilter.push( color );
    } )
    price.map( (price) => {
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
                            <span>
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
                            <span>
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
                            <span>
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
                        >
                            Rs. {price.start} to Rs. {price.end}
                            &nbsp; &nbsp;
                            <span>
                                <i class="fas fa-times remove-filter"></i>
                            </span>
                        </div>
                    )
                })
            }

        </div>
    )
}
