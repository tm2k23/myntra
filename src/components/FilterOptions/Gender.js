// this component is to display gender filter
import React from 'react';
import './Filters.css';
import { useDispatch } from 'react-redux';
import {addGenderFilter} from '../../actions/filters';
export default function Gender({activeFilter}) {
    const Genders=[
        "Male",
        "Female",
        "Boys",
        "Girls",
    ];
    const dispatch = useDispatch();
    return (
        <div className="specific-filter-container" >
            {
                Genders.map((gender,index) => {
                    return(
                        <label className="filter-label" key={index} >
                            <input 
                                type="radio" name="gender" 
                                value={gender}
                                checked = {activeFilter?.toLowerCase() === gender.toLowerCase()}
                                onClick={ (event) => dispatch( addGenderFilter( event.target.value)) }
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
