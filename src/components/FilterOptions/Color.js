// this component is to display color filter
import React from 'react';
import './Filters.css';
import {filterColors} from '../../utils/FilterColors';
export default function Color() {
    return (
        <div className=" specific-filter-container " >
            <div className="filter-title" >COLOR</div>
            {
                filterColors.map( color => {
                    return (
                        <label>
                            <input type="checkbox" name="color"></input>
                            <div className="filter-color-sample" style={{backgroundColor:color.hex }} ></div>
                            {color.name}
                        </label>
                    )
                })
            }
        </div>
    )
}
