import React from 'react';
import './FilterContainer.css';
import { 
    GenderFilter , 
    DiscountFilter , 
    ColorFilter ,
    PriceFilter
} from '../../components/index';
export default function FilterContainer() {
    let isFilterApplied = true;
    return (
        <div className="filter-container" >
            <div className="filter-container-header flex-row " >
                <span className="filter-container-title" >FILTERS</span>
                <span 
                    className="clear-all-filters" 
                    style={isFilterApplied ? {display: 'block'} : {display: 'none'}}
                >
                    CLEAR ALL
                </span>
            </div>
            <GenderFilter/>
            <DiscountFilter/>
            <ColorFilter/>
            <PriceFilter/>
        </div>
    )
}
