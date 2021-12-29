// this component is to display color filter
import React from 'react';
import { useDispatch } from 'react-redux';
import './Filters.css';
import {filterColors} from '../../utils/FilterColors';
import { addColorFilter , removeColorFilter} from '../../actions/filters';
export default function Color({activeFilter}) {
    const dispatch = useDispatch();
    function colorChangeHandler(event){
        if(event.target.checked){
            dispatch( addColorFilter( event.target.value))
        }else{
            dispatch( removeColorFilter( event.target.value))
        }
    }
    return (
        <div className=" specific-filter-container " >
            <div className="filter-title" >COLOR</div>
            {
                filterColors.map( (color,index) => {
                    return (
                        <label className="filter-label" key={index}>
                            <input 
                                type="checkbox" 
                                name="color" 
                                value={color.name}
                                checked={activeFilter.includes(color.name)}
                                onClick={ colorChangeHandler }
                            ></input>
                            <span className="filter-name">
                                <div className="filter-color-sample" style={{backgroundColor:color.hex }} ></div>
                                {color.name}
                            </span>
                        </label>
                    )
                })
            }
        </div>
    )
}
