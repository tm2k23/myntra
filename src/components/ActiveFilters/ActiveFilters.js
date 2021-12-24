import React from 'react'
import './ActiveFilters.css'
export default function ActiveFilter() {
    const activeFilter=[
        "White",
        "Male",
        "10% and above"
    ]
    return (
        <div className="active-filters" >
            {
                activeFilter.map( (filterName,key) =>{
                    return (
                        <div 
                            className="active-filter-name flex-row" 
                        >
                            {filterName}
                            &nbsp; &nbsp;
                            <i class="fas fa-times remove-filter"></i>
                        </div>
                    )
                } )
            }
            
        </div>
    )
}