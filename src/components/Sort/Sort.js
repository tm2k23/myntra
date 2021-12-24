import React from 'react'
import './Sort.css'
export default function Sort() {
    const sortItems=[
        "Customer Rating",
        "Price: Low to High",
        "Price: High to Low",
        "Better Discount",
        "Most Reviewed"
    ]
    return (
        <div className="sort-by flex-row " >
            <span className="sort-title"> 
                Sort by : 
            </span>
            <span className="selected-sort"> 
                Recommended
            </span>
            <span className="down-arrow">
                <i class="fas fa-chevron-down"></i>
            </span>
            <div className="sort-list" >
                {
                    sortItems.map((item, index) => {
                        return (
                            <label className="sort-list-item flex-row " >
                                <input 
                                    type="radio" 
                                    name="sort" 
                                    value={item} 
                                    className="sort-list-radio-button" 
                                    key={index}
                                    onClick={(event)=>{console.log(event.target.value)}}
                                />
                                {item}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}
