// this component is to display gender filter
import React from 'react';
import './Filters.css';
export default function Gender({activeFilter}) {
    const Genders=[
        "Male",
        "Female",
        "Boys",
        "Girls",
    ];
    return (
        <div className="specific-filter-container" >
            {
                Genders.map((gender,index) => {
                    return(
                        <label className="filter-label" key={index} >
                            <input 
                                type="radio" name="gender" 
                                value={gender}
                                checked={activeFilter?.toLowerCase() === gender.toLowerCase()}
                            ></input>
                            <span className="filter-name">
                                {gender}
                            </span>
                        </label>
                    )
                })
            }
            
        </div>
    )
}
