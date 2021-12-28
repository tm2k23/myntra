import React from 'react'
import './Sort.css'
export default function Sort({sortParameter , setSortParameter}) {
    const sortItems=[
        "Price: Low to High",
        "Price: High to Low",
        "Better Discount",
        "Customer Rating",
        "Most Reviewed",
        "Recently Added"
    ]
    return (
        <div className="sort-by flex-row " >
            <span className="sort-title"> 
                Sort by : 
            </span>
            <span className="selected-sort"> 
                {
                    sortParameter === null ?
                    "Recommended" :
                    sortParameter
                }
            </span>
            <span className="down-arrow">
                <i class="fas fa-chevron-down"></i>
            </span>
            <div className="sort-list" >
                {
                    sortItems.map((sortOption, index) => {
                        return (
                            <label className="sort-list-item flex-row " >
                                <input 
                                    type="radio" 
                                    name="sort" 
                                    value={sortOption} 
                                    className="sort-list-radio-button" 
                                    key={index}
                                    checked={sortParameter === sortOption}
                                    onClick={(event)=>{ setSortParameter(event.target.value) }}
                                />
                                {sortOption}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}
