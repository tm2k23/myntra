import React from 'react';
import './FilterContainer.css';
import {GenderFilter , DiscountFilter} from '../../components/index';
export default function FilterContainer() {
    return (
        <div className="filter-container" >
            <div className="filter-container-title" >FILTERS</div>
            <GenderFilter/>
            <DiscountFilter/>
        </div>
    )
}
