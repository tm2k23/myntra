import React from 'react'
import './Sort.css'
import {useDispatch} from 'react-redux';
import { sort } from '../../actions/sort';
export default function Sort({sortParameter}) {
    const sortItems=[
        "Price: Low to High",
        "Price: High to Low",
        "Better Discount",
        "Customer Rating",
        "Most Reviewed",
        "Recently Added"
    ]
    const dispatch = useDispatch();
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
                            <label className="sort-list-item flex-row " key={index} >
                                <input 
                                    type="radio" 
                                    name="sort" 
                                    value={sortOption} 
                                    className="sort-list-radio-button" 
                                    key={index}
                                    onClick={(event)=>{ dispatch(sort(event.target.value)) }}
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
