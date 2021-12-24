import React from 'react'
import './ActiveFilters.css'
export default function ActiveFilter() {
    const activeFilter=[
        "white",
        "male",
        "10% and above"
    ]
    return (
        <div className="active-filters" >
            {
                activeFilter.map( (filterName,key) =>{
                    return (
                        <div className="filter-name" >
                            {filterName}
                        </div>
                    )
                } )
            }
            
        </div>
    )
}
